// Dati centrali dello Studio Oicos — usati da pagine, componenti e JSON-LD.

export const SITE = {
  url: 'https://oicos.studio',
  name: 'Studio Oicos',
  legalName: 'Studio Oicos — Amministratori condominiali',
  vat: '0000000000', // TODO: P.IVA reale da confermare col cliente
  founded: '1998',
};

export const CONTACT = {
  street: 'Viale del Fante, 10',
  zip: '97100',
  city: 'Ragusa',
  province: 'RG',
  country: 'IT',
  phone: '0932 621230',
  phoneHref: '+390932621230',
  mobile: '333 661 1012',
  mobileHref: '+393336611012',
  whatsapp: '393315088223',
  email: 'studio.oicos@virgilio.it',
  hoursLabel: 'Lun — Ven',
  hours: '9:00 – 13:00 · 16:00 – 19:00',
  // Coordinate città di Ragusa (livello comunale, per geo/LocalBusiness)
  lat: 36.9269,
  lng: 14.7255,
};

export const STATS = {
  condomini: '200',
  utenti: '5.000',
  unita: '1.300',
  anni: '30',
};

export const NAV = [
  { href: '/#studio', label: 'Studio' },
  { href: '/#servizi', label: 'Servizi' },
  { href: '/#portale', label: 'Area riservata' },
];

export const SERVIZI = [
  { n: '01', t: 'Amministrazione ordinaria', d: 'La gestione quotidiana del condominio, con un referente sempre disponibile.' },
  { n: '02', t: 'Contabilità e bilanci', d: 'Rendiconti chiari e puntuali e un conto corrente dedicato per ogni condominio.' },
  { n: '03', t: 'Assemblee e verbali', d: 'Convocazione, conduzione e verbalizzazione nel rispetto del Codice Civile.' },
  { n: '04', t: 'Tutela e recupero crediti', d: 'Gestione delle morosità e degli interessi del condominio, fino al contenzioso.' },
  { n: '05', t: 'Manutenzioni e fornitori', d: 'Selezione e coordinamento di imprese e fornitori, con preventivi sempre comparati.' },
  { n: '06', t: 'Sicurezza e adempimenti', d: 'Antincendio, ascensori e impianti: ogni obbligo di legge sempre in regola.' },
  { n: '07', t: 'Fiscalità e bonus edilizi', d: 'Detrazioni, bonus, pratiche ENEA e adempimenti fiscali del condominio.' },
  { n: '08', t: 'Portale digitale', d: 'Documenti, bilanci e comunicazioni online, accessibili h24 da ogni dispositivo.' },
  { n: '09', t: 'Gestione immobili e locazioni', d: 'Amministrazione di proprietà per conto terzi: locazioni, adempimenti e rapporti con gli inquilini.' },
  { n: '10', t: 'Consulenza legale', d: 'Assistenza su ogni questione condominiale, con studi legali specializzati a supporto.' },
];

export const FAQ = [
  { q: 'Come posso cambiare amministratore di condominio?', a: "Basta una delibera dell'assemblea a maggioranza. Pensiamo noi al subentro e al passaggio di consegne con l'amministratore uscente, senza che tu debba occuparti di nulla." },
  { q: 'Quali documenti ricevo come condòmino?', a: "Bilancio consuntivo e preventivo, riparto delle spese, verbali d'assemblea e tutte le comunicazioni: sempre consultabili, anche online nell'area riservata." },
  { q: 'Come vengono gestiti i soldi del condominio?', a: 'Ogni condominio ha un conto corrente dedicato e intestato. Nessuna commistione tra condomìni e tracciabilità totale di ogni entrata e uscita.' },
  { q: 'Cosa succede in caso di morosità?', a: 'Inviamo solleciti tempestivi e, quando necessario, avviamo il recupero del credito a tutela degli altri condòmini, fino alle vie legali.' },
  { q: 'Gestite anche le emergenze fuori orario?', a: 'Sì. Per i guasti urgenti — allagamenti, ascensore bloccato, impianti — è attivo un canale di reperibilità dedicato.' },
  { q: "Quanto costa affidarvi l'amministrazione?", a: "Il compenso viene proposto per iscritto prima dell'incarico, in base al numero di unità e ai servizi richiesti. Nessun costo nascosto." },
  { q: 'Vi occupate di bonus e detrazioni fiscali?', a: 'Sì: pratiche ENEA, detrazioni, bonus edilizi e tutti gli adempimenti fiscali del condominio, dall\'inizio alla fine.' },
  { q: 'Da quante unità si può affidare un condominio?', a: 'Dal piccolo stabile al supercondominio. Anche per edifici con poche unità troviamo la formula di gestione più adatta.' },
];
