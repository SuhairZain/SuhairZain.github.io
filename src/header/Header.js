import React from 'react';

import HeaderItem from './HeaderItem';

const Header = () =>
  <div className="header">
    {links.map((link, i) => <HeaderItem key={i} index={i} {...link} />)}
  </div>;

const styles = {
  about: {
    marginRight: 64,
  },
  projects: {
    marginRight: 64,
  },
};

const links = [
  { text: 'About', style: styles.about },
  { text: 'Projects', style: styles.projects },
  { text: 'Contact' },
];

export default Header;
