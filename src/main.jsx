import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import {AuthProvier} from './store/auth.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvier >
  <StrictMode>
    <App />
    <ToastContainer />
  </StrictMode>
  </AuthProvier>
)
