import Inferno from 'inferno'
import { Provider } from 'inferno-redux'

import { getStore } from './store/store'

import App from './App.jsx'

import '../css/styles.css'

Inferno.render(
    <Provider store={getStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
