import React, { useState } from 'react'
import Image from 'next/image'

// Modalbox allowing email to be sent from gmail or copied to clipboard
function ModalDialog(props: any) {
  // UseState hook to allow opened and closed box states
  const [isOpen, setIsOpen] = useState(false)

  // Function to open the box
  const handleOpen = () => {
    setIsOpen(true)
  }

  // Function to close the box
  const handleClose = () => {
    setIsOpen(false)
  }

  // Copies email passed from the calling component to clipboard
  function clipboard() {
    const copyText = props.email
    navigator.clipboard.writeText(copyText)
  }

  return (
    <div>
      <button onClick={handleOpen}>{props.element}</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <p id="phone">Tel : {props.phone}</p>
            <p id="email">{props.email}</p>
            <div className="modal-icons-nav">
            <a
              href="https://mail.google.com/mail/?view=cm&source=mailto&to=solano_b@etna-alternance.net"
              title="Ecrivez-moi sur Gmail"
              target="_blank"
              rel="noreferrer"
            >
              <Image className="modal-img" src="/gmail.png" width={30} height={30} alt="gmail" />
            </a>
            <Image
              onClick={clipboard}
              className="modal-img clipboard"
              src="/copy.png"
              width={30}
              height={30}
              title="Copier l'email dans le presse-papier"
              alt="gmail"
            />
            </div>
            <p id="close" onClick={handleClose}>
              Fermer
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModalDialog
