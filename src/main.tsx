import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { LoadingContextProvider } from './context/LoadingContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <LoadingContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </LoadingContextProvider>
)
