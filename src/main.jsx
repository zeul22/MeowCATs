import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ColorModeScript,ChakraProvider, theme} from '@chakra-ui/react'
ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    </StrictMode>
)
