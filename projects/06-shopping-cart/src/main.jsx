import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FiltersProviders } from './context/filters'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProviders>
    <App />
  </FiltersProviders>
)
