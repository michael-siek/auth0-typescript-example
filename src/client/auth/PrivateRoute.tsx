import * as React from 'react'
import { Route } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'

interface IPrivateRoute {
  component: any
  path: string
}

const PrivateRoute = ({ component: Component, ...args }: IPrivateRoute) => (
  <Route
    {...args}
    component={withAuthenticationRequired(Component, {
      onRedirecting: () => <React.Fragment>Loading...</React.Fragment>
    })}
  />
)

export default PrivateRoute
