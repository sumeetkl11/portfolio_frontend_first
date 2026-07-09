import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Syne, JetBrains_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sumeetkanhiya.dev'),
  title: 'Sumeet Kanhiya — Full Stack Developer',
  description:
    'Full Stack Developer specializing in the PERN stack and scalable web architectures.',
  openGraph: {
    title: 'Sumeet Kanhiya — Full Stack Developer',
    description:
      'Full Stack Developer specializing in the PERN stack and scalable web architectures.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumeet Kanhiya — Full Stack Developer',
    description:
      'Full Stack Developer specializing in the PERN stack and scalable web architectures.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${syne.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
