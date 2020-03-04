import React, { PureComponent } from 'react';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          This code is compiling. Please come back later.
          <a
            className="App-link"
            href="https://www.xkcd.com/303/"
            target="_blank"
            rel="noopener noreferrer">
            Inspiration >>
          </a>
        </header>
        <footer className="App-footer"></footer>
      </div>
    );
  }
}

export default App;
