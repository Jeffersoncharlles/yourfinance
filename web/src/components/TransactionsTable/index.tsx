import { useEffect, } from 'react';
import { useTransaction } from '../../context/TransactionsContext';

import { formatAmount, formatDate } from '../../utils/format';
import {
    Container,
} from './styles';


export const TransactionsTable = () => {
    const { transactions } = useTransaction()


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