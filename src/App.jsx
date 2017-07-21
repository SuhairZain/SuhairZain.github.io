import React from 'react';

import Header from './header/Header';

const App = () =>
  <div style={styles.root}>
    <h1 className="name">Suhair Zain</h1>
    <Header />
  </div>;

const styles = {
  root: {
    backgroundSize: 'cover',
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    width: '100%',
  },
};

export default App;
