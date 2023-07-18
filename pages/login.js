import Auth from '@/src/components/auth/auth'
import React from 'react'
const isLoggedIn = true
const Login = () => {
  return (
    <>
      <Auth
        buttonText='Log In'
        headingText='Log In'
        isLoggedIn={isLoggedIn}
      />
    </>
  )
}

export default Login
