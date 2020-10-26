import * as React from 'react'
import { NavLink } from 'react-router-dom'

const MainNav: React.FC = () => (
  <div className='navbar-nav mr-auto'>
    <NavLink
      to='/profile'
      exact
      className='nav-link'
      activeClassName='router-link-exact-active'
    >
      Profile
    </NavLink>
    <NavLink
      to='/external-api'
      exact
      className='nav-link'
      activeClassName='router-link-exact-active'
    >
      External API
    </NavLink>
  </div>
)

export default MainNav
