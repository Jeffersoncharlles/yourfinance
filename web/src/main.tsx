import { createServer, Model } from 'miragejs';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { GlobalStyle } from './styles/GlobalStyles'

createServer({
  models: {
    transaction: Model,
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
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
