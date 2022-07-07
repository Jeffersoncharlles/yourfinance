import { createServer } from 'miragejs';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { GlobalStyle } from './styles/GlobalStyles'

createServer({
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
