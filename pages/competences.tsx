import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import localFont from '@next/font/local'

const khula = localFont({src: './Khula-Regular.ttf' })

// Skills page
const Competences: NextPage = () => {
  // UseState hook to allow toggle between the different skills
  // UseState value is changed on click of the different images
  // Skill name is displayed accordingly
  const [selected, setSelected] = useState('allskills')

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
          <div className="competences-container">
            <div className="competences-icons-container">
              <Image
                onClick={() => setSelected('html5')}
                className="competences-img html5"
                src="/skills/html5.svg"
                width={60}
                height={60}
                alt="HTML5"
              />
              <Image
                onClick={() => setSelected('css3')}
                className="competences-img css3"
                src="/skills/css3.svg"
                width={60}
                height={60}
                alt="Css3"
              />
              <Image
                onClick={() => setSelected('javascript')}
                className="competences-img javascript"
                src="/skills/javascript.svg"
                width={60}
                height={60}
                alt="JavaScript"
              />
              <Image
                onClick={() => setSelected('typescript')}
                className="competences-img typescript"
                src="/skills/typescript.svg"
                width={60}
                height={60}
                alt="TypeScript"
              />
              <Image
                onClick={() => setSelected('c')}
                className="competences-img c"
                src="/skills/c.svg"
                width={60}
                height={60}
                alt="C"
              />
              <Image
                onClick={() => setSelected('react')}
                className="competences-img react"
                src="/skills/react.svg"
                width={60}
                height={60}
                alt="React"
              />
              <Image
                onClick={() => setSelected('nextjs')}
                className="competences-img nextjs"
                src="/skills/nextjs.svg"
                width={60}
                height={60}
                alt="NextJS"
              />
              <Image
                onClick={() => setSelected('nestjs')}
                className="competences-img nestjs"
                src="/skills/nestjs.svg"
                width={60}
                height={60}
                alt="NestJS"
              />
              <Image
                onClick={() => setSelected('sequelize')}
                className="competences-img sequelize"
                src="/skills/sequelize.svg"
                width={60}
                height={60}
                alt="Sequelize"
              />
              <Image
                onClick={() => setSelected('prisma')}
                className="competences-img prisma"
                src="/skills/prisma.svg"
                width={60}
                height={60}
                alt="Prisma"
              />
              <Image
                onClick={() => setSelected('git')}
                className="competences-img git"
                src="/skills/git.svg"
                width={60}
                height={60}
                alt="Git"
              />
              <Image
                onClick={() => setSelected('bash')}
                className="competences-img bash"
                src="/skills/bash.svg"
                width={60}
                height={60}
                alt="Bash"
              />
            </div>
            <div className="competences-description-container">
              <div className={`competences-description ${khula.className}`}>
              {selected === 'allskills' && <p>Sélectionnez une compétence</p>}
              {selected === 'html5' && <p>HTML5</p>}
              {selected === 'css3' && <p>CSS3</p>}
              {selected === 'javascript' && <p>JavaScript</p>}
              {selected === 'typescript' && <p>Typescript</p>}
              {selected === 'c' && <p>C</p>}
              {selected === 'react' && <p>React</p>}
              {selected === 'nextjs' && <p>Next.JS</p>}
              {selected === 'nestjs' && <p>Nest.JS</p>}
              {selected === 'sequelize' && <p>Sequelize</p>}
              {selected === 'prisma' && <p>Prisma</p>}
              {selected === 'git' && <p>Git</p>}
              {selected === 'bash' && <p>Bash</p>}
            </div>
            </div>
          </div>
          <div className="background-rect-competences"></div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Competences
