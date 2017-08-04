import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Header from './header/Header';

import About from './about';
import Contact from './contact';
import Projects from './projects';

const getPageForIndex = (index) => {
  switch (index) {
    case 0:
      return <About />;
    case 1:
      return <Projects />;
    default:
      return <Contact />;
  }
};

const App = ({ selectedPage }) =>
  <div style={styles.root}>
    <div>
      <h1 className="name">Suhair Zain</h1>
      <Header />
    </div>
    <div className="content">
      {getPageForIndex(selectedPage)}
    </div>
  </div>;

App.propTypes = {
  selectedPage: PropTypes.number.isRequired,
};

const styles = {
  root: {
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    width: '100%',
  },
  content: {
    flex: 1,
  },
};

const mapStateToProps = ({ ui: { selectedPage } }) => ({
  selectedPage,
});

export default connect(mapStateToProps)(App);
