import { createServer, Model } from 'miragejs';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { TransactionsProvider } from './context/TransactionsContext';
import { GlobalStyle } from './styles/GlobalStyles'


createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        { id: 1, title: 'Freelance de website', type: 'deposit', category: 'Dev', amount: 4500, created_At: new Date('2022-07-12 11:09:00') },
        { id: 2, title: 'Aluguel', type: 'withdraw', category: 'Casa', amount: 850, created_At: new Date('2022-07-12 11:09:00') },
      ]
    })
  },

  routes() {
    this.namespace = "api";



    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, req) => {
      const data = JSON.parse(req.requestBody)

      return schema.create('transaction', data)
      //schema e para poder criar os dados no db interno
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TransactionsProvider>
      <GlobalStyle />
      <App />
    </TransactionsProvider>
  </React.StrictMode>
)
