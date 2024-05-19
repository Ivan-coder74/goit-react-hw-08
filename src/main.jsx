// import { PersistGate } from 'redux-persist/integration/react'
import React from 'react'
import  App  from './app.jsx'
import {persistor, store} from './redux/store.js'
import ReactDom from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'


ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Provider store={store}>
        <PersistGate persistor={persistor}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
        </PersistGate>
    </Provider>
    </React.StrictMode>
);
