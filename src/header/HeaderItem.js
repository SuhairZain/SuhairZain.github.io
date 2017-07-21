import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { createChangePage } from '../redux/ui';

import { Black, DarkGray } from '../utils/colors';

const HeaderItem = ({ index, isSelected, text, style, onSelect }) =>
  <h3
    style={{
      ...styles.text,
      ...(isSelected ? styles.selectedText : {}),
      ...style,
    }}
    onClick={() => onSelect(index)}
  >
    {text}
  </h3>;

HeaderItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
};

const styles = {
  text: {
    color: DarkGray,
    fontWeight: 100,
    marginBottom: 0,
    marginTop: 48,
  },
  selectedText: {
    color: Black,
  },
};

const mapStateToProps = ({ ui }, { index }) => ({
  isSelected: ui.selectedPage === index,
});

const mapDispatchToProps = (dispatch) => ({
  onSelect: (index) => {
    dispatch(createChangePage(index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderItem);
