import React from 'react';

import HeaderItem from './HeaderItem';

const Header = () =>
  <div style={styles.links}>
    {links.map((link, i) =>
      <HeaderItem key={i} index={i} {...link} />
    )}
  </div>;

const styles = {
  links: {
    display: 'flex',
  },
  about: {
    marginRight: 64,
  },
  projects: {
    marginRight: 64,
  },
  contact: {
    marginRight: 48,
  },
};

const links = [
  { text: 'About', style: styles.about },
  { text: 'Projects', style: styles.projects },
  { text: 'Contact', style: styles.contact },
];

export default (Header);
