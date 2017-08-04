import React from 'react';
import PropTypes from 'prop-types';

import ItemsWithMotion from '../ItemsWithMotion';

const styles = {
  root: {},
};

const Contact = ({ prop }) =>
  <ItemsWithMotion>
    <div style={styles.root}>CONTACT</div>
    <div style={styles.root}>CONTACT</div>
    <div style={styles.root}>CONTACT</div>
    <div style={styles.root}>CONTACT</div>
    <div style={styles.root}>CONTACT</div>
    <div style={styles.root}>CONTACT</div>
    <div style={styles.root}>CONTACT</div>
    <div style={styles.root}>CONTACT</div>
  </ItemsWithMotion>;

Contact.propTypes = {
  prop: PropTypes.string.isRequired,
};

export default Contact;
