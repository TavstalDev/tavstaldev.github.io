import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './assets/tailwind.css'
import App from './App.jsx'
import {StrictMode} from "react";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
)
