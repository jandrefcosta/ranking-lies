import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

import SideMenu from '../Components/SideMenu'


import './style.scss'

const listPagesWithoutMenu = [
  '/',
  '/login',
  '/new-user'
]

const checkRouter = (location) => {
  console.log(location)
}

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
      <SideMenu MainID={"mainContatent"} />
      <div id="mainContatent">
        <main className="container">
          {props.children}
        </main>
      </div>
    </>
  )
}

export default withRouter(Layout);