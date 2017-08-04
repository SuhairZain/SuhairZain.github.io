import React from 'react';
import PropTypes from 'prop-types';

import ItemsWithMotion from '../ItemsWithMotion';

const styles = {
  root: {},
};

const About = ({ prop }) =>
  <ItemsWithMotion>
    <div style={styles.root}>ABOUT</div>
    <div style={styles.root}>ABOUT</div>
    <div style={styles.root}>ABOUT</div>
    <div style={styles.root}>ABOUT</div>
  </ItemsWithMotion>;

About.propTypes = {
  prop: PropTypes.string.isRequired,
};

export default About;
