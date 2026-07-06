# Studio Oicos — sito

Sito vetrina di **Studio Oicos**, amministratori condominiali in provincia di Ragusa.

Costruito con [Astro](https://astro.build) (statico, zero-JS di framework), con:

- **SEO/GEO**: `astro-seo`, meta geo (IT-RG), sitemap, robots, canonical
- **Structured data**: JSON-LD `ProfessionalService` (LocalBusiness) + `FAQPage`
- **Accessibilità**: widget con scala testo, contrasto, interlinea, focus, ecc.
- **Pagine legali**: Privacy e Cookie policy (GDPR) + banner consenso
- Immagini WebP, font Google (Archivo · Inter · IBM Plex Mono)

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output statico in dist/
```

## Struttura

- `src/pages/` — home (`index.astro`), `privacy/`, `cookie/`
- `src/components/` — Header, Footer, Brand, CookieBanner, AccessibilityWidget…
- `src/data.ts` — contatti, servizi, FAQ (fonte unica per pagine + schema)
- `src/styles.css` — design system (palette Evergreen/oro, geometrie a cerchi)
- `public/` — immagini, favicon, robots.txt
- `loghi/` — sorgenti loghi associazioni + `whiten.py` (ricolorazione in bianco)

---

Design & sviluppo — [keyapp.it](https://keyapp.it)
