import { createRoot } from 'react-dom/client'
import './index.css'
import './login.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
