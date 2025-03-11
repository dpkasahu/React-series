import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FavoriteColor from './useState.jsx'
import Timer from './useEffect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <FavoriteColor />
     */}
     <Timer/>
  </StrictMode>,
)
