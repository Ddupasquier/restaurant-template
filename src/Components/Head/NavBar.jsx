import React from 'react';
import Logo from './Logo';
import NavBarItem from './NavBarItem';

const navStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  position: 'relative',
  height: 'fit-content',
  width: '50%',
  color: '#000',
};

const navContainer = {
  display: 'flex',
  position: 'relative',
};

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/' },
  { name: 'Contact', to: '/' },
];

function NavBar() {
  return (
    <div style={navContainer}>
      <Logo />
      <nav style={navStyle}>
        {navItems.map((item, index) => (
          <NavBarItem item={item} key={index} />
        ))}
      </nav>
    </div>
  );
}

export default NavBar;
