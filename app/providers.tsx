// app/providers.tsx
'use client';

import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <NextUIProvider className='NextUIProvider flex' navigate={router.push}>
      {children}
    </NextUIProvider>
  );
}
