import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import Modal from 'react-modal'
import { useState } from "react";

Modal.setAppElement('#root');//executar o modal no elemento root acessibilidade

export const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setModalIsOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setModalIsOpen(false)
  }


  return (
    <>
      <Header onOpenModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar transação</h2>
      </Modal>
    </>
  )
}


