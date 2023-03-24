import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import localFont from '@next/font/local'
import SkillCard from '../components/SkillCard'

const khula = localFont({ src: './Khula-Regular.ttf', display: 'swap' })

const Competences: NextPage = () => {
  const [isBackOpen, setIsBackOpen] = useState(false)

  const [selectedBack, setSelectedBack] = useState('allskillsback')
  const [selectedBdd, setSelectedBdd] = useState('allskillsbdd')
  const [selectedAlgo, setSelectedAlgo] = useState('allskillsalgo')
  const [selectedFront, setSelectedFront] = useState('allskillsfront')
  const [selectedTools, setSelectedTools] = useState('allskillstools')

  const ToggleBack = () => {
    setIsBackOpen(!isBackOpen)
  }

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
          <div className={`competences-container ${isBackOpen ? 'open' : ''}`}>
            <div className="competences-icons-containers competences-icons-back">
              {selectedBack === 'allskillsback' && (
                <div className="icons">
                  <Image
                    onClick={() => {
                      setIsBackOpen(!isBackOpen)
                      setTimeout(() => {
                        setSelectedBack('javascript');
                      }, 500);}}
                    className="competences-img javascript"
                    src="/skills/javascript.svg"
                    width={60}
                    height={60}
                    alt="JavaScript"
                  />
                  <Image
                    onClick={() => setSelectedBack('typescript')}
                    className="competences-img typescript"
                    src="/skills/typescript.svg"
                    width={60}
                    height={60}
                    alt="TypeScript"
                  />
                  <Image
                    onClick={() => setSelectedBack('nodejs')}
                    className="competences-img nodejs"
                    src="/skills/nodejs.svg"
                    width={60}
                    height={60}
                    alt="NodeJS"
                  />
                  <Image
                    onClick={() => setSelectedBack('nestjs')}
                    className="competences-img nestjs"
                    src="/skills/nestjs.svg"
                    width={60}
                    height={60}
                    alt="NestJS"
                  />
                </div>
              )}
              {selectedBack !== 'allskillback' &&
                <SkillCard skill={selectedBack}
                setIsOpen={setIsBackOpen}
                setSelected={setSelectedBack}/>
              }
            </div>
            <div className="competences-description-containers competences-description-back">
              <div className={`competences-description ${khula.className}`}>
                {selectedBack === 'allskillsback' && <p>Web back-end</p>}
                {selectedBack === 'javascript' && <p>JavaScript</p>}
                {selectedBack === 'typescript' && <p>Typescript</p>}
                {selectedBack === 'nodejs' && <p>NodeJS</p>}
                {selectedBack === 'nestjs' && <p>Nest.JS</p>}
              </div>
            </div>
            <div className="competences-icons-containers competences-icons-bdd">
              <Image
                onClick={() => setSelectedBdd('mysql')}
                className="competences-img mysql"
                src="/skills/mysql.svg"
                width={60}
                height={60}
                alt="MySQL"
              />
              <Image
                onClick={() => setSelectedBdd('sequelize')}
                className="competences-img sequelize"
                src="/skills/sequelize.svg"
                width={60}
                height={60}
                alt="Sequelize"
              />
              <Image
                onClick={() => setSelectedBdd('prisma')}
                className="competences-img prisma"
                src="/skills/prisma.svg"
                width={60}
                height={60}
                alt="Prisma"
              />
              <Image
                onClick={() => setSelectedBdd('mongodb')}
                className="competences-img mongodb"
                src="/skills/mongodb.svg"
                width={60}
                height={60}
                alt="MongoDB"
              />
            </div>
            <div className="competences-description-containers competences-description-bdd">
              <div className={`competences-description ${khula.className}`}>
                {selectedBdd === 'allskillsbdd' && <p>Bases de données</p>}
                {selectedBdd === 'mysql' && <p>MySQL</p>}
                {selectedBdd === 'sequelize' && <p>Sequelize</p>}
                {selectedBdd === 'prisma' && <p>Prisma</p>}
                {selectedBdd === 'mongodb' && <p>MongoDB</p>}
              </div>
            </div>
            <div className="competences-icons-containers competences-icons-algo">
              <Image
                onClick={() => setSelectedAlgo('c')}
                className="competences-img c"
                src="/skills/c.svg"
                width={60}
                height={60}
                alt="C"
              />
              <Image
                onClick={() => setSelectedAlgo('python')}
                className="competences-img python"
                src="/skills/python.png"
                width={60}
                height={60}
                alt="Python"
              />
            </div>
            <div className="competences-description-containers competences-description-algo">
              <div className={`competences-description ${khula.className}`}>
                {selectedAlgo === 'allskillsalgo' && <p>Algorithmie</p>}
                {selectedAlgo === 'c' && <p>C</p>}
                {selectedAlgo === 'python' && <p>Python</p>}
              </div>
            </div>
            <div className="competences-icons-containers competences-icons-front">
              <Image
                onClick={() => setSelectedFront('html5')}
                className="competences-img html5"
                src="/skills/html5.svg"
                width={60}
                height={60}
                alt="HTML5"
              />
              <Image
                onClick={() => setSelectedFront('css3')}
                className="competences-img css3"
                src="/skills/css3.svg"
                width={60}
                height={60}
                alt="Css3"
              />
              <Image
                onClick={() => setSelectedFront('react')}
                className="competences-img react"
                src="/skills/react.svg"
                width={60}
                height={60}
                alt="React"
              />
              <Image
                onClick={() => setSelectedFront('nextjs')}
                className="competences-img nextjs"
                src="/skills/nextjs.svg"
                width={60}
                height={60}
                alt="NextJS"
              />
            </div>
            <div className="competences-description-containers competences-description-front">
              <div className={`competences-description ${khula.className}`}>
                {selectedFront === 'allskillsfront' && <p>Web front-end</p>}
                {selectedFront === 'html5' && <p>HTML5</p>}
                {selectedFront === 'css3' && <p>CSS3</p>}
                {selectedFront === 'react' && <p>React</p>}
                {selectedFront === 'nextjs' && <p>Next.JS</p>}
              </div>
            </div>
            <div className="competences-icons-containers competences-icons-tools">
              <Image
                onClick={() => setSelectedTools('git')}
                className="competences-img git"
                src="/skills/git.svg"
                width={60}
                height={60}
                alt="Git"
              />
              <Image
                onClick={() => setSelectedTools('bash')}
                className="competences-img bash"
                src="/skills/bash.svg"
                width={60}
                height={60}
                alt="Bash"
              />
            </div>
            <div className="competences-description-containers competences-description-tools">
              <div className={`competences-description ${khula.className}`}>
                {selectedTools === 'allskillstools' && <p>Outils</p>}
                {selectedTools === 'git' && <p>Git</p>}
                {selectedTools === 'bash' && <p>Bash</p>}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Competences
