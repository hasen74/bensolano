import { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Cards from '../projects-data.json'
import Image from 'next/image'
import Link from 'next/link'
import localFont from '@next/font/local'

const hindVadodara = localFont({src: './HindVadodara-Regular.ttf', display: 'swap' })

// Projects page
// Map method used to display as many cards as there are objects in the json file */
const Projets: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio de Benjamin Solano</title>
        <meta name="description" content="Développeur fullstack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href=".favicon.ico" />
      </Head>

      <main className="container">
        <Navbar />
        <div className="main">
          <div className="projects-cards">

            {Cards.map((projet) => {
              return (
                <div className={`project ${hindVadodara.className}`} key="{projet}">
                  <p className="title">{projet.Titre}</p>
                  <p>{projet.Description}</p>
                  <p>Technologies : {projet.Technologies}</p>
                  <div className="project-img-container">
                    <Link href={projet.Image} target="_blank">
                    <Image
                      className="project-img"
                      src={projet.Image}
                      width={500}
                      height={500}
                      title="Inclukathon"
                      alt="Inclukathon"
                    />
                    </Link>
                  </div>
                  <div className="github-projet">
                    <Image
                      className="github-img-project"
                      src="/github.png"
                      width={30}
                      height={30}
                      title="Voir le code sur Github"
                      alt="Lien Github"
                    />
                    <Link href={projet.Lien} target="_blank" rel="noreferrer">
                    <p className="text-github">Voir le code sur Github</p></Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Projets
