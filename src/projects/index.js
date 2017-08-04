import React from 'react';
import PropTypes from 'prop-types';

import ItemsWithMotion from '../ItemsWithMotion';

const styles = {
  root: {},
};

const Projects = ({ prop }) =>
  <ItemsWithMotion>
    <div style={styles.root}>PROJECTS</div>
    <div style={styles.root}>PROJECTS</div>
    <div style={styles.root}>PROJECTS</div>
    <div style={styles.root}>PROJECTS</div>
  </ItemsWithMotion>;

Projects.propTypes = {
  prop: PropTypes.string.isRequired,
};

export default Projects;
