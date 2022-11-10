// importing ReactDOM for rendering, and BrowserRouter to Route pages from App Routes.
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"

// importing stylesheet, App, and the Context Provider in order to pass state only to where its needed.
import './styles.css';
import App from './App';
import {ContextProvider} from './Context';

/* rendering the App wrapped in the Context Provider so it can pass data anywhere in the app,
and the Browser Router so the user can route between pages.*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ContextProvider>
)