import React, { Children } from 'react';
import PropTypes from 'prop-types';

import { StaggeredMotion, spring } from 'react-motion';

const styles = {
  root: {},
};

const ItemsWithMotion = ({ children }) =>
  <div style={styles.root}>
    <StaggeredMotion
      defaultStyles={Array(Children.count(children))
        .fill(0)
        .map((_, i) => ({ h: i * 100 }))}
      styles={(prevInterpolatedStyles) =>
        prevInterpolatedStyles.map((_, i) => {
          return i === 0
            ? { h: spring(0) }
            : { h: spring(prevInterpolatedStyles[i - 1].h) };
        })}
    >
      {(interpolatingStyles) =>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {interpolatingStyles.map((style, i) =>
            <div key={i} style={{ marginBottom: style.h }}>
              {children[i]}
            </div>
          )}
        </div>}
    </StaggeredMotion>
  </div>;

ItemsWithMotion.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemsWithMotion;
