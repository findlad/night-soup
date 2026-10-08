import type { Metadata } from 'next';
import { ThemeRegistry } from './theme-registry';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const siteUrl = 'https://findlad.github.io/night-soup';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Night Soup | Music after dark',
  description: 'The official home of Night Soup — music, live dates, and news from the band.',
  icons: { icon: `${basePath}/favicon.svg` },
  openGraph: {
    title: 'Night Soup | Music after dark',
    description: 'The official home of Night Soup — music, live dates, and news from the band.',
    url: `${siteUrl}/`,
    siteName: 'Night Soup',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Night Soup logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Night Soup | Music after dark',
    description: 'The official home of Night Soup — music, live dates, and news from the band.',
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
