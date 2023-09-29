import {} from 'react'

import Header from './layout/Header'
import Main from './layout/Main'

import GeneralStyles from './shared/styles/GeneralStyles'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import GlobalFonts from './assets/font/fonts'

function App() {
    return (
        <div id="app-wrapper">
            <GeneralStyles />
            <GlobalFonts />
            <Header />
            <Main />
        </div>
    )
}

export default App
