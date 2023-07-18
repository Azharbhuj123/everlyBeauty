import Auth from '@/src/components/auth/auth'
import React from 'react'

const isLoggedIn = false

const Signup = () => {
  return (
    <>
      <Auth
        buttonText='Create Account'
        headingText='Sign Up'
        isLoggedIn={isLoggedIn}
      />
    </>
  )
}

export default Signup
