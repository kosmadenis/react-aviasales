import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, type ProviderProps } from 'react-redux'

import App from './components/App'
import './styles/global.scss'
import { createStore } from './state'
import AviasalesApi from './services/aviasales-api'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('No root element')
}

const root = ReactDOM.createRoot(rootElement)

const store = createStore({ api: new AviasalesApi() })

root.render(
  React.createElement(
    Provider,
    { store } as unknown as ProviderProps,
    React.createElement(App)
  )
)
