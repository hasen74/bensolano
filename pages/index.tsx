import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { NextPage } from 'next'
import localFont from '@next/font/local'

const khula = localFont({ src: './Khula-Regular.ttf', display: 'swap' })

// Index/presentation page
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Benjamin Solano | Porfolio Apprenti Développeur Full Stack</title>
        <meta name="description" content="Développeur fullstack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <Navbar />
        <div className="main">
          <div className="presentation">
            <div className="bandeau">
              <p>OPEN TO WORK. 
              Disponible pour une alternance de 8 mois jusqu'en janvier 2024. 
              Alternance renouvelable un an sur l'année du bachelor.</p>
            </div>
            <div className="photo-container">
                <Image className="photo-element" src="/photo_test.png" width={130} height={130} alt="photo"></Image>
            </div>
            <div className="background-rect"></div>
            <div className="text-pres">
              <div className="text-general square">
                <p>
                  Développeur full stack en année préparatoire à l'ETNA depuis septembre 2022, je suis particulièrement attiré
                   par le développement back et impatient de découvrir l'administration système réseaux et la sécurité.

                  </p>
                <p>
                  Ancien danseur, passionné des différentes formes de communication, j'ai 
                </p>
              </div>
              <div className="text-langues square">
                <p>Je parle couramment anglais, espagnol, et peux échanger simplement en italien.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Home
