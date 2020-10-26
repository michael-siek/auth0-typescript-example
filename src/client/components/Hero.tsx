import * as React from 'react'

const Hero = () => {
  const logo = 'https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.png'
  return (
    <div className='text-center hero'>
      <img className='mb-3 app-logo' src={logo} alt='React logo' width='120' />
      <h1 className='mb-4'>React Project</h1>
      <p className='lead'></p>
    </div>
  )
}

export default Hero
