import {
    Container,
    TransactionTypeContainer,
} from './styles';
import Modal from 'react-modal'
import { X } from 'phosphor-react';
import { CheckButton } from './CheckButton';
import { useState } from 'react';
import { api } from '../../lib/api';

interface Props {
    onOpenModal: boolean;
    onCloseModal: () => void;
}

export const NewTransactionModal = ({ onCloseModal, onOpenModal }: Props) => {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState<'deposit' | 'withdraw'>()

    const handleCreateNewTransaction = (e: React.FormEvent) => {
        e.preventDefault()
        const data = { title, value, category, type }

        api.post('/transactions', data)

    }

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

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input type="text" placeholder='Titulo' value={title} onChange={e => setTitle(e.target.value)} />

                <input type="number" placeholder='Valor' value={value} onChange={e => setValue(Number(e.target.value))} />

                <input type="text" placeholder='Categoria' value={category} onChange={e => setCategory(e.target.value)} />

                <TransactionTypeContainer>
                    <CheckButton
                        type='deposit'
                        title='Entrada'
                        onType={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    />
                    <CheckButton
                        type='withdraw'
                        title='Saida'
                        onType={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    />
                </TransactionTypeContainer>

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>

    );
}