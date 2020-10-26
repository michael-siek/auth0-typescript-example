import * as React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import { withRouter } from 'react-router-dom'
import history from '../utils/history'
import { domain, clientId, audience } from '../utils/env'

const AuthProvider: React.FC = ({ children }) => {
  const onRedirectCB = (appState: any) => {
    history.push(
      appState && appState.returnTo
        ? appState.returnTo
        : window.location.pathname
    )
  }
  return (
    <Auth0Provider
      domain={domain as string}
      clientId={clientId as string}
      audience={audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCB}
      cacheLocation='localstorage'
      useRefreshTokens={true}
    >
      {children}
    </Auth0Provider>
  )
}

export default withRouter(AuthProvider)
