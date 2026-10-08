# Night Soup website

A static band website built with Next.js, Material UI, and Firebase Hosting.

## Run locally

```bash
npm install
npm run dev
```

## Customize

The main page content lives in `app/page.tsx`; the visual design and logo-derived palette live in `app/globals.css`. Replace the placeholder copy and inactive links as music, show dates, social accounts, and band details become available.

## Deploy to Firebase Hosting

1. Install dependencies with `npm install`.
2. Sign in with `npx firebase login`.
3. Connect the folder to your Firebase project with `npx firebase use --add`.
4. Run `npm run deploy`.

The site exports to `out/`, which is already configured as the Firebase Hosting public directory.
