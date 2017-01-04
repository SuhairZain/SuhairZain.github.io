import {
    combineReducers,
    createStore
} from 'redux'

import {
    uiState
} from './ui-state'

let store = null;

export const getStore = () => {
    if (store === null) {
        store = createStore(
            combineReducers({
                uiState
            })
        );
    }
    return store;
}