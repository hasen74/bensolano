import '../styles/globals.css'
import '../styles/modal.css'
import '../styles/navbar.css'
import '../styles/competences.css'
import '../styles/projets.css'
import type { AppProps } from 'next/app'

import { Oswald } from '@next/font/google'

const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={oswald.className}>
      <Component {...pageProps} />
    </main>
  )
}
