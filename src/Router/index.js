import React, { lazy, Suspense } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Layout from '../Layout'
import Loading from '../Pages/Loading'

const NewUser = lazy(() => import('../Pages/NewUser'))
const Login = lazy(() => import('../Pages/Login'))

const NewLie = lazy(() => import('../Pages/NewLie'))
const ListLies = lazy(() => import('../Pages/ListLies'))
const Page404 = lazy(() => import('../Pages/Page404'))

function Router() {

  return (
    <HashRouter>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/new-lie" component={NewLie} />
            <Route exact path="/list-lies" component={ListLies} />
            <Route exact path="/new-user" component={NewUser} />
            <Route path='*' component={Page404} />
          </Switch>
        </Suspense>
      </Layout>
    </HashRouter>
  )
}

export default Router;