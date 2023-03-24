import React, { useState } from 'react'
import Image from 'next/image'

// Modalbox allowing email to be sent from gmail or copied to clipboard
function ModalProjets(props: any) {
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


  return (
    <div>
      <button onClick={handleOpen}>{props.projet}</button>
      {isOpen && (
        <div className="modal-projets">
          <div className="modal-content-projets">
          <Image className="modal-img-projets" src="/skills/javascript.svg" width={30} height={30} alt="gmail" />
            <p id="close" onClick={handleClose}>
              Fermer
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModalProjets
