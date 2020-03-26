import React from 'react'

import './style.scss';

function Header({ title = 'Ranking Lies' }) {
  return (
    <header>
      <h2>{title}</h2>
    </header>
  )
}

export default Header;
