import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseRef1 from './UseRef1.jsx'
import App1 from './App1.jsx'
import AppuseEff from './AppuseEff.jsx'
import UseRef from './UseRef.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App1 /> */}
    <UseRef1 />
  </StrictMode>
)
