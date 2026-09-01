# Gold Coast Accom Website

Frontend for the Gold Coast Accom direct-booking website, built with Next.js and prepared for Vercel.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Property data

The frontend consumes a platform-neutral property contract in `lib/property-catalogue.ts`. The current catalogue contains presentation data. A future PropertyStack or PMS adapter should map API responses into this contract, leaving the page components unchanged.

## Deployment

Connect this repository to a Vercel project. Pull requests and non-production branches generate preview deployments; the production branch is `main`.

Git-connected deployments are managed automatically by Vercel.
