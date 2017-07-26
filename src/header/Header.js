import React from 'react';

import HeaderItem from './HeaderItem';

const Header = () =>
  <div className="header">
    {links.map((link, i) => <HeaderItem key={i} index={i} {...link} />)}
  </div>;

const links = [
  { text: 'About'},
  { text: 'Projects'},
  { text: 'Contact' },
];

export default Header;
