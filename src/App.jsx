import React from 'react';

import Header from './header/Header';

const App = () =>
  <div style={styles.root}>
    <h1 style={styles.name}>Suhair Zain</h1>
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
  name: {
    fontWeight: 400,
    marginLeft: 48,
    padding: 0,
    marginTop: 48,
  },
};

export default App;
