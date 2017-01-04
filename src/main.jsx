import Inferno from 'inferno'
import { Provider } from 'inferno-redux'

import { getStore } from './store/store'

import App from './App.jsx'

Inferno.render(
    <Provider store={getStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
