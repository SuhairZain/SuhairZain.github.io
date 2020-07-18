import React, { PureComponent } from 'react';
import './App.css';

import HomePage from './components/HomePage';

class App extends PureComponent {
    render() {
        return (
            <div className="App">
                <HomePage />
            </div>
        );
    }
}

export default App;
