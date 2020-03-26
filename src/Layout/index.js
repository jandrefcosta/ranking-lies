import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

import SideMenu from '../Components/SideMenu'

import './style.scss'
import Header from '../Components/Header'

const listPagesWithoutMenu = [
  '/',
  '/login',
  '/new-user'
]

function Layout(props) {

  const [page, setPage] = useState()

  useEffect(() => {
    setPage(props.location.pathname)
  }, [props.location.pathname])

  if (listPagesWithoutMenu.includes(page)) {
    return (<>{props.children}</>)
  }

  return (
    <>
      <SideMenu MainID={"mainContent"} />
      <div id="mainContent">
        <Header />
        <main className="container">
          {props.children}
        </main>
      </div>
    </>
  )
}

export default withRouter(Layout);