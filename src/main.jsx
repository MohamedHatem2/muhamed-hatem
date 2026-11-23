import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './context/ThemeProvider'
import InitialLoad from './components/layout/InitialLoad'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <InitialLoad>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </InitialLoad>
    </ThemeProvider>
  </StrictMode>,
)
