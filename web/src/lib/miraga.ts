import { createServer } from 'miragejs';

export const mokeServer = createServer({
    routes() {
        this.namespace = "api";

        this.get('/transactions', () => {
            return [
                {
                    id: 1,
                    title: 'Transaction 1',
                    amount: 300,
                    type: 'deposit',
                    category: 'Food',
                    createdAt: new Date()
                }
            ]
        })
    }
})