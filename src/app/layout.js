import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import PWAInstaller from '@/components/PWAInstaller'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Panchang - TheGodSays',
  description: 'Your daily Panchang and personalized astrological insights',
  manifest: '/manifest.json',
  themeColor: '#1e40af',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Panchang'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <PWAInstaller />
          <ServiceWorkerRegistration />
        </Providers>
      </body>
    </html>
  )
}