import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store.js'
import './index.css'
import axios from 'axios'

const url= import.meta.env.VITE_URL;
const url2= import.meta.env.VITE_URL;

axios.defaults.baseURL=url

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>,
)
