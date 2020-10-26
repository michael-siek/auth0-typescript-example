import * as React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0()
  return (
    <button
      className='btn btn-danger btn-block'
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </button>
  )
}

export default LogoutButton
