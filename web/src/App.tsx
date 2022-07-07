import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');//executar o modal no elemento root acessibilidade

export const App = () => {
  const [newTransactionModal, setNewTransactionModal] = useState(false);



  return (
    <>
      <Header onOpenModal={() => setNewTransactionModal(true)} />
      <Dashboard />

      <NewTransactionModal
        onCloseModal={() => setNewTransactionModal(false)}
        onOpenModal={newTransactionModal}
      />
    </>
  )
}


