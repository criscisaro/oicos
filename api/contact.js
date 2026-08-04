import nodemailer from 'nodemailer';

const json = (data, status = 200) =>
  Response.json(data, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });

const clean = (value, maxLength) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : '';

const validEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default {
  async fetch(request) {
    if (request.method !== 'POST') {
      return json({ error: 'Metodo non consentito' }, 405);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Richiesta non valida' }, 400);
    }

    const website = clean(body.website, 200);
    if (website) return json({ ok: true });

    const name = clean(body.name, 120);
    const phone = clean(body.phone, 40);
    const email = clean(body.email, 160).toLowerCase();
    const message = clean(body.message, 4000);

    if (name.length < 2 || !validEmail(email) || message.length < 5) {
      return json({ error: 'Compila correttamente i campi obbligatori' }, 400);
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
      console.error('Configurazione email incompleta');
      return json({ error: 'Servizio temporaneamente non disponibile' }, 503);
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 465),
      secure: Number(SMTP_PORT || 465) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 12000,
      disableFileAccess: true,
      disableUrlAccess: true,
    });

    const safeName = name.replace(/[\r\n]+/g, ' ');
    try {
      await transporter.sendMail({
        from: `Sito Studio Oicos <${SMTP_USER}>`,
        to: CONTACT_TO,
        replyTo: email,
        subject: `Richiesta dal sito Oicos — ${safeName}`,
        text: [
          `Nome e cognome: ${name}`,
          `Telefono: ${phone || 'Non indicato'}`,
          `Email: ${email}`,
          '',
          'Messaggio:',
          message,
        ].join('\n'),
      });
    } catch (error) {
      console.error('Invio email non riuscito', error instanceof Error ? error.message : 'errore sconosciuto');
      return json({ error: 'Invio non riuscito' }, 502);
    }

    return json({ ok: true });
  },
};
