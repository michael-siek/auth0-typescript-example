import * as React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Loading from './Loading'

const AuthButton: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <Loading />
  }
  return isAuthenticated ? <LogoutButton /> : <LoginButton />
}

export default AuthButton
