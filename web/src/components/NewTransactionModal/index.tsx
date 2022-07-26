import {
    Container,
    TransactionTypeContainer,
} from './styles';
import Modal from 'react-modal'
import { X } from 'phosphor-react';
import { CheckButton } from './CheckButton';
import { useState } from 'react';
import { api } from '../../lib/api';
import { useTransaction } from '../../context/TransactionsContext';

interface Props {
    onOpenModal: boolean;
    onCloseModal: () => void;
}

export const NewTransactionModal = ({ onCloseModal, onOpenModal }: Props) => {
    const { createNewTransaction } = useTransaction()
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState<'deposit' | 'withdraw'>('deposit')

    const handleCreateNewTransaction = async (e: React.FormEvent) => {
        e.preventDefault()
        await createNewTransaction({ title, type, category, amount })


        setTitle('')
        setCategory('')
        setAmount(0)
        setType('deposit')
        onCloseModal()

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

                <input type="number" placeholder='Valor' value={amount} onChange={e => setAmount(Number(e.target.value))} />

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