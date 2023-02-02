import '../styles/globals.css'
import '../styles/modal.css'
import '../styles/navbar.css'
import '../styles/competences.css'
import '../styles/projets.css'
import type { AppProps } from 'next/app'

import localFont from '@next/font/local'

const oswald = localFont({src: './Oswald-Regular.ttf' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={oswald.className}>
      <Component {...pageProps} />
    </main>
  )
}
