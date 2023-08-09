import UserDashboard from '@/src/components/pages/Dashboard/dashboard/UserDashboard'
import React, { useState, useEffect } from 'react'

const Dashboard = () => {
  const [tokenState, setTokenState] = useState(null)
  const [myToken, setMyToken] = useState(null)
  useEffect(() => {
    let Token = localStorage.getItem('Token')
    if (Token) {
      setMyToken(Token)
      let value = Math.random()
      setTokenState(value)
    }
  }, [myToken])
  return (
    <>
      <UserDashboard key={tokenState} Token={myToken} />
    </>
  )
}

export default Dashboard
