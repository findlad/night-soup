import type { Metadata } from 'next';
import { ThemeRegistry } from './theme-registry';
import './globals.css';

export const metadata: Metadata = {
  title: 'Night Soup | Music after dark',
  description: 'The official home of Night Soup — music, live dates, and news from the band.',
  icons: { icon: '/favicon.svg' },
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
