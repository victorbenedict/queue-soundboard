import type { Metadata } from 'next';
import './globals.css';

import cn from 'classnames';
import { Inter } from 'next/font/google';

import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SisBrew Number Caller',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark h-full'>
      <body className={cn({ inter }, 'h-full flex bg-slate-900')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
