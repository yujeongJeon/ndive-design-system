import {StrictMode} from 'react'

import {createRoot} from 'react-dom/client'

import App from './App'

import '@ndive/design-components/styles'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
)
