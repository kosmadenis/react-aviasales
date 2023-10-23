import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, type ProviderProps } from 'react-redux'

import App from './components/App'
import './styles/global.scss'
import store from './state'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('No root element')
}

const root = ReactDOM.createRoot(rootElement)

root.render(
  React.createElement(
    Provider,
    { store } as unknown as ProviderProps,
    React.createElement(App)
  )
)
