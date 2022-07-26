import { useEffect, useState } from 'react';
import { api } from '../../lib/api';
import { formatAmount, formatDate } from '../../utils/format';
import {
    Container,
} from './styles';

interface ITransaction {
    id: number
    title: string
    amount: number
    category: string
    type: string
    created_At: string
}

export const TransactionsTable = () => {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions))

    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>{formatAmount(transaction.amount)}</td>
                            <td>{transaction.category}</td>
                            <td>{formatDate(transaction.created_At)}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </Container>
    );
}