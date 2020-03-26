import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { push as Menu } from 'react-burger-menu'
import { Button } from '@material-ui/core';

import './style.scss'

function SideMenu({ MainID }) {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const onStateChange = (e) => {
    setMenuIsOpen(e.isOpen)
  }

  const openMenu = (e) => {
    setMenuIsOpen(!menuIsOpen)
  }

  const HandlerClick = (e) => {
    setMenuIsOpen(false)
  }

  return (
    <Menu
      pageWrapId={MainID}
      onStateChange={onStateChange}
      isOpen={menuIsOpen}
      customBurgerIcon={false}
      customCrossIcon={false}
      bodyClassName="menuIsOpened"
    >
      <Link to="/ranking" onClick={HandlerClick}>Ranking</Link>
      <Link to="/new-lie" onClick={HandlerClick}>Nova Mentira</Link>

      <Button className="button-menu" onClick={openMenu}>
        <i className="material-icons">menu</i>
      </Button>

      <Button className="button-menu-close" onClick={openMenu}>
        <i className="material-icons">close</i>
      </Button>
    </Menu>
  )
}


export default SideMenu
