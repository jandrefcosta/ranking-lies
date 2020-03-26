import React from 'react'

function Header({ title = 'Default Name {title}' }) {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

export default Header;
