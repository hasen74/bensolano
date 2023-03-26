import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import localFont from '@next/font/local'
import SkillCard from '../components/SkillCard'

const khula = localFont({ src: './Khula-Regular.ttf', display: 'swap' })

const Competences: NextPage = () => {
  const [containerSize, setContainerSize] = useState('')

  const [selectedBack, setSelectedBack] = useState('allskillsback')
  const [selectedBdd, setSelectedBdd] = useState('allskillsbdd')
  const [selectedAlgo, setSelectedAlgo] = useState('allskillsalgo')
  const [selectedFront, setSelectedFront] = useState('allskillsfront')
  const [selectedTools, setSelectedTools] = useState('allskillstools')

  useEffect(() => {
    switch (containerSize) {
      case 'back':
        setSelectedBdd('allskillsbdd')
        setSelectedAlgo('allskillsalgo')
        setSelectedFront('allskillsfront')
        setSelectedTools('allskillstools')
      case 'bdd':
        setSelectedBack('allskillsback')
        setSelectedAlgo('allskillsalgo')
        setSelectedFront('allskillsfront')
        setSelectedTools('allskillstools')
      case 'algo':
        setSelectedBack('allskillsback')
        setSelectedBdd('allskillsbdd')
        setSelectedFront('allskillsfront')
        setSelectedTools('allskillstools')
      case 'front':
        setSelectedBack('allskillsback')
        setSelectedBdd('allskillsbdd')
        setSelectedAlgo('allskillsalgo')
        setSelectedTools('allskillstools')
      case 'tools':
        setSelectedBack('allskillsback')
        setSelectedBdd('allskillsbdd')
        setSelectedAlgo('allskillsalgo')
        setSelectedFront('allskillsfront')
    }
  }, [containerSize])

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
          <div className="cliquez">Pour plus de détails sur une compétence et voir les projets associés, cliquez sur l'icône.</div>
          <div className={`competences-container ${containerSize}`}>
            <div className="competences-description-containers competences-description-back">
              <div className={`competences-description ${khula.className}`}>
                {selectedBack === 'allskillsback' && <p>Web back-end</p>}
                {selectedBack === 'javascript' && <p>JavaScript</p>}
                {selectedBack === 'typescript' && <p>TypeScript</p>}
                {selectedBack === 'nodejs' && <p>NodeJS</p>}
                {selectedBack === 'nestjs' && <p>Nest.JS</p>}
              </div>
            </div>
            <div className="competences-icons-containers competences-icons-back">
              {selectedBack === 'allskillsback' && (
                <div className="icons-containers-phone">
                <div className="description-phone"><p>Web back-end</p></div>
                <div className="icons">
                  <Image
                    onClick={() => {
                      setContainerSize('back')
                      setTimeout(() => {
                        setSelectedBack('javascript')
                      }, 700)
                    }}
                    className="competences-img javascript"
                    src="/skills/javascript.svg"
                    width={60}
                    height={60}
                    alt="JavaScript"
                  />
                  <Image
                    onClick={() => {
                      setContainerSize('back')
                      setTimeout(() => {
                        setSelectedBack('typescript')
                      }, 700)
                    }}
                    className="competences-img typescript"
                    src="/skills/typescript.svg"
                    width={60}
                    height={60}
                    alt="TypeScript"
                  />
                  <Image
                    onClick={() => {
                      setContainerSize('back')
                      setTimeout(() => {
                        setSelectedBack('nodejs')
                      }, 700)
                    }}
                    className="competences-img nodejs"
                    src="/skills/nodejs.svg"
                    width={60}
                    height={60}
                    alt="NodeJS"
                  />
                  <Image
                    onClick={() => {
                      setContainerSize('back')
                      setTimeout(() => {
                        setSelectedBack('nestjs')
                      }, 500)
                    }}
                    className="competences-img nestjs"
                    src="/skills/nestjs.svg"
                    width={60}
                    height={60}
                    alt="NestJS"
                  />
                </div>
                </div>
              )}
              {selectedBack !== 'allskillback' && (
                <SkillCard skill={selectedBack} setContainerSize={setContainerSize} setSelected={setSelectedBack} />
              )}
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
            <div className="competences-icons-containers competences-icons-bdd">
              {selectedBdd === 'allskillsbdd' && (
                <div className="icons-containers-phone">
                <div className="description-phone"><p>Bases de données</p></div>
                <div className="icons">
                  <Image
                    onClick={() => {
                      setContainerSize('bdd')
                      setTimeout(() => {
                        setSelectedBdd('mysql')
                      }, 700)
                    }}
                    className="competences-img mysql"
                    src="/skills/mysql.svg"
                    width={60}
                    height={60}
                    alt="MySQL"
                  />
                  <Image
                    onClick={() => {
                      setContainerSize('bdd')
                      setTimeout(() => {
                        setSelectedBdd('sequelize')
                      }, 700)
                    }}
                    className="competences-img sequelize"
                    src="/skills/sequelize.svg"
                    width={60}
                    height={60}
                    alt="Sequelize"
                  />
                  <Image
                    onClick={() => {
                      setContainerSize('bdd')
                      setTimeout(() => {
                        setSelectedBdd('prisma')
                      }, 700)
                    }}
                    className="competences-img prisma"
                    src="/skills/prisma.svg"
                    width={60}
                    height={60}
                    alt="Prisma"
                  />
                  <Image
                    onClick={() => {
                      setContainerSize('bdd')
                      setTimeout(() => {
                        setSelectedBdd('mongodb')
                      }, 700)
                    }}
                    className="competences-img mongodb"
                    src="/skills/mongodb.svg"
                    width={60}
                    height={60}
                    alt="MongoDB"
                  />
                </div>
                </div>
              )}
              {selectedBdd !== 'allskillbdd' && (
                <SkillCard skill={selectedBdd} setContainerSize={setContainerSize} setSelected={setSelectedBdd} />
              )}
            </div>
            <div className="competences-description-containers competences-description-algo">
              <div className={`competences-description ${khula.className}`}>
                {selectedAlgo === 'allskillsalgo' && <p>Algorithmie</p>}
                {selectedAlgo === 'c' && <p>C</p>}
                {selectedAlgo === 'python' && <p>Python</p>}
              </div>
            </div>
            <div className="competences-icons-containers competences-icons-algo">
              {selectedAlgo === 'allskillsalgo' && (<div className="icons-containers-phone">
                <div className="description-phone">
                  <p>Algorithmie</p></div>
                <div className="icons">
                  <Image
                    onClick={() => {
                      setContainerSize('algo')
                      setTimeout(() => {
                        setSelectedAlgo('c')
                      }, 700)
                    }}
                    className="competences-img c"
                    src="/skills/c.svg"
                    width={60}
                    height={60}
                    alt="C"
                  />
                  <Image
                    onClick={() => {
                      setContainerSize('algo')
                      setTimeout(() => {
                        setSelectedAlgo('python')
                      }, 700)
                    }}
                    className="competences-img python"
                    src="/skills/python.png"
                    width={60}
                    height={60}
                    alt="Python"
                  />
                </div>
                </div>
              )}
              {selectedAlgo !== 'allskillalgo' && (
                <SkillCard skill={selectedAlgo} setContainerSize={setContainerSize} setSelected={setSelectedAlgo} />
              )}
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
            <div className="competences-icons-containers competences-icons-front">
              {selectedFront === 'allskillsfront' && (
                <div className="icons-containers-phone">
                <div className="description-phone"><p>Web Front-end</p></div>
                <div className="icons">
                  <Image
                    onClick={() => {
                      setContainerSize('front')
                      setTimeout(() => {
                        setSelectedFront('html5')
                      }, 700)
                    }}
                    className="competences-img html5"
                    src="/skills/html5.svg"
                    width={60}
                    height={60}
                    alt="HTML5"
                  />
                  <Image
                    onClick={() => {
                      setContainerSize('front')
                      setTimeout(() => {
                        setSelectedFront('css3')
                      }, 700)
                    }}
                    className="competences-img css3"
                    src="/skills/css3.svg"
                    width={60}
                    height={60}
                    alt="Css3"
                  />
                  <Image
                    onClick={() => {
                      setContainerSize('front')
                      setTimeout(() => {
                        setSelectedFront('react')
                      }, 700)
                    }}
                    className="competences-img react"
                    src="/skills/react.svg"
                    width={60}
                    height={60}
                    alt="React"
                  />
                  <Image
                    onClick={() => {
                      setContainerSize('front')
                      setTimeout(() => {
                        setSelectedFront('nextjs')
                      }, 700)
                    }}
                    className="competences-img nextjs"
                    src="/skills/nextjs.svg"
                    width={60}
                    height={60}
                    alt="NextJS"
                  />
                </div>
                </div>
              )}
              {selectedFront !== 'allskillfront' && (
                <SkillCard skill={selectedFront} setContainerSize={setContainerSize} setSelected={setSelectedFront} />
              )}
            </div>
            <div className="competences-description-containers competences-description-tools">
              <div className={`competences-description ${khula.className}`}>
                {selectedTools === 'allskillstools' && <p>Outils</p>}
                {selectedTools === 'git' && <p>Git</p>}
                {selectedTools === 'bash' && <p>Bash</p>}
              </div>
            </div>
            <div className="competences-icons-containers competences-icons-tools">
              {selectedTools === 'allskillstools' && (
                <div className="icons-containers-phone">
                <div className="description-phone"><p>Outils</p></div>
                <div className="icons">
                  <Image
                    onClick={() => {
                      setContainerSize('tools')
                      setTimeout(() => {
                        setSelectedTools('git')
                      }, 700)
                    }}
                    className="competences-img git"
                    src="/skills/git.svg"
                    width={60}
                    height={60}
                    alt="Git"
                  />
                  <Image
                    onClick={() => {
                      setContainerSize('tools')
                      setTimeout(() => {
                        setSelectedTools('bash')
                      }, 700)
                    }}
                    className="competences-img bash"
                    src="/skills/bash.svg"
                    width={60}
                    height={60}
                    alt="Bash"
                  />
                </div>
                </div>
              )}
              {selectedTools !== 'allskilltools' && (
                <SkillCard skill={selectedTools} setContainerSize={setContainerSize} setSelected={setSelectedTools} />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Competences
