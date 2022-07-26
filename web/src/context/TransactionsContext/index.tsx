import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../lib/api";

interface ITransaction {
    id: number
    title: string
    amount: number
    category: string
    type: 'deposit' | 'withdraw'
    created_At: string
}


type ITransactionInput = Omit<ITransaction, 'id' | 'created_At'>
//esse type tem o mesmo do ITransaction sem o id e created_At


interface ITransactionContext {
    showTransactions: () => void
    transactions: ITransaction[]
    createNewTransaction: (transaction: ITransactionInput) => Promise<void>
}



const TransactionsContext = createContext({} as ITransactionContext)


export const TransactionsProvider = ({ children }: { children: React.ReactNode }) => {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    const showTransactions = () => {
        api.get('transactions').then(response => setTransactions(response.data.transactions))
    }

    const createNewTransaction = async (transaction: ITransactionInput) => {
        const { data } = await api.post('/transactions', {
            ...transaction,
            created_At: new Date()
        })

        if (data) {
            setTransactions(state => [...state, data.transaction])
        }
    }

    useEffect(() => {
        showTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{ showTransactions, transactions, createNewTransaction }}>
            {children}
        </TransactionsContext.Provider>

    )
}


export const useTransaction = () => {
    const context = useContext(TransactionsContext)
    return context
}