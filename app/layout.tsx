import '@/styles/globals.css';
import clsx from 'clsx';
import { Metadata, Viewport } from 'next';
import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';

import { Providers } from './providers';

import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';
import { title } from '@/components/primitives';
import { GithubIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className='relative flex flex-col h-dvh'>
            <header className='w-full flex items-center justify-center py-3 pt-4 px-6'>
              <h1>
                <span className={title({ color: 'violet' })}>QUEUE</span>{' '}
                <span className={title()}>SOUNDBOARD</span>
              </h1>
              <ThemeSwitch className='absolute right-4' />
            </header>
            <main className='container mx-auto max-w-md pt-4 px-6 flex-grow h-fit'>
              {children}
            </main>
            <footer className='w-full flex items-center justify-between py-3 px-6 mx-auto max-w-md border-t border-default-50'>
              <Link
                isExternal
                className='flex items-center gap-1 text-current'
                href='https://github.com/victorbenedict'
                title='heroui.com homepage'
              >
                <span className='text-default-600'>Built by</span>
                <p className='text-primary'>Victor Benedict</p>
              </Link>
              <Link
                isExternal
                className={
                  (buttonStyles({
                    variant: 'light',
                  }),
                  'px-0 text-default-600')
                }
                href={siteConfig.links.github}
              >
                <GithubIcon size={20} />
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
