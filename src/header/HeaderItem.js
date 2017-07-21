import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import classNames from 'classnames';

import { createChangePage } from '../redux/ui';

const HeaderItem = ({ index, isSelected, text, style, onSelect }) =>
  <h3
    className={classNames('header-item', {
      'header-item-selected': isSelected,
    })}
    style={style}
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

const mapStateToProps = ({ ui }, { index }) => ({
  isSelected: ui.selectedPage === index,
});

const mapDispatchToProps = (dispatch) => ({
  onSelect: (index) => {
    dispatch(createChangePage(index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderItem);
