import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { NextPage } from 'next'

import { Khula } from '@next/font/google'

const khula = Khula({
  weight: '400',
  subsets: ['latin']
})

// Index/presentation page
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio de Benjamin Solano</title>
        <meta name="description" content="Développeur fullstack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <Navbar />
        <div className="main">
          <div className="presentation">
            <div className="photo-pres animated">
              <Image className="photo" src="/photo_test.png" width={130} height={130} alt="photo"></Image>
            </div>
            <div className="text-pres animated">
              <div className="text">
                <p className={`text ${khula.className}`}>
                  Jeune développeur fullstack en début de cursus à l'ETNA, ancien danseur en reconversion, je suis à la
                  recherche d'une alternance pour la mi-mars 2023. Je suis particulièrement attiré par le développement
                  back et impatient de découvrir l'administration systèmes et la sécurité.
                </p>
              </div>
              <div className="background-rect-index"></div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Home
