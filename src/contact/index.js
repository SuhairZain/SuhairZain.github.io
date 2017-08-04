import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {},
};

const Contact = ({ prop }) => <div style={styles.root}>CONTACT</div>;

Contact.propTypes = {
  prop: PropTypes.string.isRequired,
};

export default Contact;
