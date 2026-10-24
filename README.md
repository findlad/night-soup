# Night Soup

The official Night Soup band website. Built with Next.js and Material UI, exported as a static site, and hosted on GitHub Pages.

## Local development

Install a current Node.js LTS release, then run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating the site

| Content | Location |
| --- | --- |
| Kitchen videos | `app/kitchen-videos.ts` |
| Shows | The `shows` array in `app/page.tsx` |
| Band photos | `public/slideshow/` |
| Page text and links | `app/page.tsx` |
| Colours and layout | `app/globals.css` |

To add a video, add an entry to `app/kitchen-videos.ts`:

```ts
{
  displayName: 'Video title',
  youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID',
}
```

Standard YouTube, `youtu.be`, Shorts, and Live links are supported. Slideshow data is regenerated automatically when the development server or build runs.

## Useful commands

```bash
npm run dev      # Start the local development server
npm run lint     # Check the source code
npm run build    # Create the static site in out/
```

## Deployment

Pushing to the `main` branch automatically builds and deploys the site through the GitHub Actions workflow in `.github/workflows/deploy.yml`. A deployment can also be started manually from the repository's **Actions** tab.
