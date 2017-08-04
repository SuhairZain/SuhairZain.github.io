import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {},
};

const About = ({ prop }) => <div style={styles.root}>ABOUT</div>;

About.propTypes = {
  prop: PropTypes.string.isRequired,
};

export default About;
