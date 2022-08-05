import React from 'react';

function NavBarItem({ item }) {
  return <div className="navbar-item"><a href={item.to}>{item.name}</a></div>;
}

export default NavBarItem;
