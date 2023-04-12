import '../styles/globals.css'
import { Space_Grotesk as spaceGrotesk } from '@next/font/google'

import { Navigation } from '../components/Navigation'

const font = spaceGrotesk({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>

      <head>
        <title>My first app with Next 13</title>
      </head>

      <body className={font.className}>
        <Navigation />
        {children}
      </body>

    </html>
  )
}
