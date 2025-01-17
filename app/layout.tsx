import './globals.css'
import { Providers } from './Providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}