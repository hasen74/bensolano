import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ModalBox from './ModalBox'

// Navbar component
// UseState hook used to control hamburger and social menus opening and closing in phone mode
export default function Navbar() {
  const [isSocialsOpen, setIsSocialsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="header">
      <div className="name">
        <div className="fullName">Benjamin Solano</div>
      </div>
      <div className="menu">
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-elements">
            <Link href="/index">PRESENTATION</Link>
          </div>
          <div className="nav-elements">
            <Link href="/competences">COMPETENCES</Link>
          </div>
          <div className="nav-elements">
            <Link href="/projets">PROJETS</Link>
          </div>
        </nav>
        <div className={`burger-button-menu ${isMenuOpen ? 'open' : ''}`}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image src="/hamburger.png" width="20" height="20" alt="menu"></Image>
          </button>
        </div>
      </div>
      <div className="socials-container">
        <nav className={`nav-socials ${isSocialsOpen ? 'open' : ''}`}>
          <div className="socials socials-cv">
            <a href="/CV_Benjamin_Solano_Alternance_Developpeur.pdf" target="_blank" rel="noreferrer">
              <Image className="socials-img socials-img-cv" src="./cv.png" width={30} height={30} alt="cv" />
            </a>
            <a href="/CV_Benjamin_Solano_Alternance_Developpeur.pdf" target="_blank" rel="noreferrer">
              <p className="tooltiptext tooltiptext-cv">Téléchargez mon CV</p>
            </a>
          </div>
          <div className="socials socials-contact">
            <ModalBox
              element={
                <Image
                  className="socials-img socials-img-contact"
                  src="/mail.png"
                  width={30}
                  height={30}
                  alt="email"
                />
              }
              email="solano_b@etna-alternance.net"
            />
          </div>
          <div className="socials socials-github">
            <a href="https://github.com/hasen74" target="_blank" rel="noreferrer">
              <Image
                className="socials-img socials-img-github"
                src="/github.png"
                width={30}
                height={30}
                alt="github"
              />
            </a>
          </div>
          <div className="socials socials-linkedin">
            <a href="https://www.linkedin.com/in/b-solano/" target="_blank" rel="noreferrer">
              <Image
                className="socials-img socials-img-linkedin"
                src="/linkedin.png"
                width={30}
                height={30}
                alt="linkedin"
              />
            </a>
          </div>
        </nav>
        <div className="burger-button-socials">
          <button onClick={() => setIsSocialsOpen(!isSocialsOpen)}>
            <p>Contact</p>
          </button>
        </div>
      </div>
    </div>
  )
}
