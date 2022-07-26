import { ArrowCircleDown, ArrowCircleUp, CurrencyCircleDollar, CurrencyDollar } from 'phosphor-react';
import { useTransaction } from '../../context/TransactionsContext';
import { formatAmount } from '../../utils/format';

import {
    Container,
} from './styles';

interface Props {
    title: string
    value: number
}

export const Summary = () => {
    const { transactions } = useTransaction()

    // const totalDeposits = transactions.reduce((accumulator, transaction) => {
    //     if (transaction.type === 'deposit') {
    //         return accumulator + transaction.amount
    //     }
    //     return accumulator
    // }, 0)

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
            //subtrair ao total
        }
        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <ArrowCircleUp size={24} weight="bold" color='#33CC95' />
                </header>
                <strong>{formatAmount(summary.deposits)}</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <ArrowCircleDown size={24} weight="bold" color='#E52E4D' />
                </header>
                <strong> - {formatAmount(summary.withdraws)}</strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <CurrencyDollar size={24} weight="bold" color='#fff' />
                </header>
                <strong>{formatAmount(summary.total)}</strong>
            </div>

        </Container>
    );
}