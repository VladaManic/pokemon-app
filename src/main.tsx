import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ColoredPokemonsContextProvider } from './context/ColoredPokemonsContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Create a client
const queryClient = new QueryClient({
    //Setting default paramethers for fetching data only once (if already fetched, data is called from cache)
    defaultOptions: {
        queries: {
            cacheTime: Infinity,
            staleTime: Infinity,
        },
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ColoredPokemonsContextProvider>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <App />
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </BrowserRouter>
        </ColoredPokemonsContextProvider>
    </React.StrictMode>
)
