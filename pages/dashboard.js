import Layout from '@/src/components/Layout/Layout'
import UserDashboard from '@/src/components/dashboard/UserDashboard'
import React from 'react'

const Dashboard = () => {
  return (
    <>
      <Layout>
        <UserDashboard />
      </Layout>
    </>
  )
}

export default Dashboard
