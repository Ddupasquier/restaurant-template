import React from 'react';
import NavBar from './NavBar';

const headerStyle = {
  position: 'relative',
  height: '50vh',
  backgroundImage:
    'url(https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=1060&t=st=1659740037~exp=1659740637~hmac=7f5fb1020d97d098bb12960c2cd35e7c3c0e43ff57004074898a962cb7a0c7da)',
  backgroundSize: 'cover',
  color: '#fff',
};

function Header() {
  return (
    <header style={headerStyle}>
      <div
        className="gradient-overlay"
        style={{
          position: 'absolute',
          background:
            'radial-gradient(circle at bottom right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 20%, rgba(240, 240, 240, 1) 90%)',
          height: '100%',
          width: '100%',
        }}
      />
      <NavBar />
    </header>
  );
}

export default Header;
