import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import MainNav from './MainNav'
import AuthNav from './AuthNav'

const NavBar: React.FC = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <div className='nav-container mb-3'>
      <nav className='navbar navbar-expand-md navbar-light bg-light'>
        <div className='container'>
          <NavLink to='/' exact>
            <div className='navbar-brand logo' />
          </NavLink>
          {isAuthenticated && (
            <React.Fragment>
              <MainNav />
            </React.Fragment>
          )}
          <AuthNav />
        </div>
      </nav>
    </div>
  )
}

export default NavBar
