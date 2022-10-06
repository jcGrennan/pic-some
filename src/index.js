import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"

import './styles.css';
import App from './App';
import {ContextProvider} from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ContextProvider>
)