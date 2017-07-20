import React from 'react';

const headerLinkStyle = {
  fontWeight: 100,
  marginBottom: 0,
  marginTop: 48,
};

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
  links: {
    display: 'flex',
  },
  about: {
    ...headerLinkStyle,
    marginRight: 64,
  },
  projects: {
    ...headerLinkStyle,
    marginRight: 64,
  },
  contact: {
    ...headerLinkStyle,
    marginRight: 48,
  },
};

const App = () =>
  <div style={styles.root}>
    <h1 style={styles.name}>Suhair Zain</h1>
    <div style={styles.links}>
      <h3 style={styles.about}>About</h3>
      <h3 style={styles.projects}>Projects</h3>
      <h3 style={styles.contact}>Contact</h3>
    </div>
  </div>;

export default App;
