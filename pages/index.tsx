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
        <title>Portfolio de Benjamin Solano</title>
        <meta name="description" content="Développeur fullstack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <Navbar />
        <div className="main">
          <div className="presentation">
            <div className="bandeau">
              <p className="opentowork">OPEN TO WORK.&nbsp;</p>
              <p>Disponible pour une alternance de 8 mois jusqu'en janvier 2024.&nbsp;</p>
              <p>Alternance renouvelable un an sur l'année du bachelor.</p>
            </div>
            <div className="photo-pres">
              <Image className="photo-element" src="/photo_test.png" width={130} height={130} alt="photo"></Image>
              <div className="background-rect"></div>
            </div>
            <div className="text-pres">
              <div className="text-general">
                <p>
                  Développeur fullstack en début de cursus à l'ETNA, je suis particulièrement attiré par le
                  développement back et impatient de découvrir l'administration systèmes et la sécurité.
                </p>
              </div>
              <div className="text-langues">
                <p>Je parle couramment anglais, espagnol, et peux échanger simplement en italien.</p>
              </div>
              <div className="text-qualites">
                <p>Ancien professeur de danse, je possède un excellent relationnel, un goût prononcé pour l'apprentissage et une grande curiosité.</p>
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
