import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import Router from './Router.jsx'
import {StrictMode} from "react";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </StrictMode>
)
