import {
    Container,
} from './styles';
import Modal from 'react-modal'
import { X } from 'phosphor-react';

interface Props {
    onOpenModal: boolean;
    onCloseModal: () => void;
}

export const NewTransactionModal = ({ onCloseModal, onOpenModal }: Props) => {

    return (

        <Modal
            isOpen={onOpenModal}
            onRequestClose={onCloseModal}

            //criar classes de styles
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <button type='button' onClick={onCloseModal} className="react-modal-close">
                <X size={20} />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input type="text" placeholder='Titulo' />

                <input type="number" placeholder='Valor' />

                <input type="text" placeholder='Categoria' />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>

    );
}