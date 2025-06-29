import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./assets/fonts/fonts.css"
import { BrowserRouter as Router } from "react-router-dom";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Router>
        <App />
      </Router>
  </StrictMode>,
)
