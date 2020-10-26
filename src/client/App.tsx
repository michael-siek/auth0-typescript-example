import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import PrivateRoute from './auth/PrivateRoute'
import NavBar from './components/NavBar'
import Loading from './components/Loading'
import Home from './views/Home'
import Profile from './views/Profile'
import ExternalApi from './views/ExternalApi'

import './app.css'

const App: React.FC = () => {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <Loading />
  }

  return (
    <div id='app' className='d-flex flex-column h-100'>
      <NavBar />
      <div className='container flex-grow-1'>
        <div className='mt-5'>
          <Switch>
            <Route path='/' exact component={Home} />
            <PrivateRoute path='/profile' component={Profile} />
            <PrivateRoute path='/external-api' component={ExternalApi} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App
