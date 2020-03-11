import React from 'react'

import SideMenu from '../Components/SideMenu'

import './style.scss'

function Layout({ children }) {

  return (
    <>
      <SideMenu MainID={"mainContatent"} />
      <main id="mainContatent" >
        {children}
      </main>
    </>
  )
}

export default Layout;