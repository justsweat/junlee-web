# Jun Lee Sdn Bhd Website

Corporate website for Jun Lee Sdn Bhd, built as a static Astro site with a small Node.js server for Hostinger deployment.

## Local Commands

```bash
npm install
npm run dev
npm run build
npm start
```

## Hostinger

- Build command: `npm install && npm run build`
- Start command: `npm start`
- App listens on: `process.env.PORT || 3000`

## Updating Content

- Company facts and contact details: `src/content/company.ts`
- Page copy and card content: `src/content/pages.ts`
- Jun Lee logo files: `public/assets/logo/`
- Brand logos:
  - `public/assets/brand-logos/roscani/`
  - `public/assets/brand-logos/u2/`
  - `public/assets/brand-logos/aurafit/`
  - `public/assets/brand-logos/renata/`
  - `public/assets/brand-logos/spron/`
  - `public/assets/brand-logos/seisaken/`
  - `public/assets/brand-logos/gp/`
- Company photos: `public/assets/company/`
- Watch photos: `public/assets/products/watches/`
- Smart watch photos: `public/assets/products/smart-watches/`
- Battery photos: `public/assets/products/batteries/`
- Watch glass photos: `public/assets/products/watch-glasses/`

Replace the placeholder images with real company photos when available.
