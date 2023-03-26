import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { NextPage } from 'next'
import localFont from '@next/font/local'

const khula = localFont({ src: './Khula-Regular.ttf', display: 'swap' })
const hind = localFont({ src: './HindVadodara-Regular.ttf', display: 'swap' })

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
              <p>
                OPEN TO WORK. Je recherche une alternance de 8 mois jusqu'en janvier 2024. Alternance renouvelable un
                an sur l'année du bachelor.
              </p>
            </div>
            <div className="photo-container">
              <Image className="photo-element" src="/photo_test.png" width={130} height={130} alt="photo"></Image>
              <div className="bonjour">
              <span>Bonjour !&nbsp;</span>
              <span>Je&nbsp;</span>
              <span>m'appelle&nbsp;</span>
              <span>Benjamin.</span>
              </div>
            </div>
            <div className={`text-pres ${hind.className}`}>
              <div className="zone1 zone">
                <p>
                  <b>Développeur full stack</b> en année préparatoire à l'ETNA depuis
                  septembre 2022, je suis <b>particulièrement attiré par le développement back</b> et suis impatient de découvrir
                  l'administration système réseaux et la sécurité.
                </p>
                <p>Amoureux du langage, curieux du monde qui m'entoure et passionné par l'informatique depuis mon adolescence, j'ai décidé de démarrer une carrière dans l'IT après des études de langues et dix ans en tant que professeur de danse.</p>
              </div>
              <div className="zone2 zone">
                <p>En attendant le coup de foudre pour les technos qui me donneront envie de m'y consacrer à 100%, je prend plaisir à explorer différents langages et développer ma culture informatique.</p>
                <p>Toujours <b>très engagé dans mes projets</b>, à l'aise en autonomie comme en équipe, <b>j'aime vraiment apprendre</b> et n'ai pas peur de poser des questions ou d'admettre que je n'ai pas la réponse.</p>
                <p>Je parle couramment <b>anglais</b>, <b>espagnol</b>, et peux échanger simplement en <b>italien</b>.</p>
                <p>A votre dispostion pour discuter d'une éventuelle belle collaboration !</p>
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
