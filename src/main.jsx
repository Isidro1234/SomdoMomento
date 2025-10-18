import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContextProvider from './Context/AuthContextProvider.jsx'
import {Provider} from "./components/ui/provider.jsx"
import { BrowserRouter } from "react-router";
import ProgressPage from './components/custom/ProgressPage.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <ProgressPage/>
        <Provider>
            <App />          
        </Provider>
      </BrowserRouter>  
    </AuthContextProvider>
  </StrictMode>
)
