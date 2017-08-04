import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {},
};

const Projects = ({ prop }) => <div style={styles.root}>PROJECTS</div>;

Projects.propTypes = {
  prop: PropTypes.string.isRequired,
};

export default Projects;
