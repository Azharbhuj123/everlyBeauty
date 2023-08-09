import React, { useEffect } from 'react'
import styles from '@/styles/components/dashboard/userDashboard.module.css'
import Chart from './Chart'
import Stepper from './VerticalStepper'
import VerticalStepper from './VerticalStepper'
import { createAPIEndPoint } from '@/src/config/api'
import { endPoints } from '@/src/config/endpoints'
import { useState } from 'react'
import Button from '@/src/components/buttons/Button'
import { useRouter } from 'next/router'
import logout from '/public/assets/images/logout.svg'
import StyledButton from '@/src/components/buttons/StyledButton'
const UserDashboard = ({ Token, key }) => {
  const [fetchedDates, setFetchedDates] = useState([])
  const [isToken, setIsToken] = useState(null)
  const router = useRouter()

  const getMyData = async () => {
    try {
      const response = await createAPIEndPoint(
        endPoints.myData,
        true,
        'user_slots'
      ).fetchAllWithToken()

      setFetchedDates(response.data.user_slots)
      console.log(response.data.user_slots, 'pppp')
    } catch (error) {
      console.log(error, 'error')
    }
  }
  useEffect(() => {
    getMyData()
  }, [])

  useEffect(() => {
    const authToken = localStorage.getItem('Token')
    if (authToken) {
      setIsToken(authToken)
    }
  }, [Token, key])
  console.log(isToken, 'auth token check')

  const handleLogout = () => {
    // Remove the token and user from localStorage
    localStorage.removeItem('Token')
    localStorage.removeItem('User')
    setIsToken(null)
    router.push('/')
  }

  return (
    <>
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardWrapper}>
          <div className={styles.dashboardSection}>
            <div className={styles.dashboardSectionLeft}>
              <div className={styles.dashboardSectionLeftContent}>
                <div className={styles.dashboardSectionLeftContentTitle}>
                  <h1>Sessions Detail</h1>
                </div>
                <div className={styles.dashboardSectionLeftContentGraph}>
                  {/* <div className={styles.dashboardSectionLeftContentGraphTitle}>
                    <h2>% of hair loss</h2>
                  </div> */}
                  <Chart
                    fetchedDates={fetchedDates || []}
                    getMyData={getMyData}
                  />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className={styles.dashboardSectionRight}>
              <div className={styles.dashboardSectionRightContent}>
                <div className={styles.dashboardSectionRightContentChild}>
                  <div className={styles.dashboardSectionRightContentTitle}>
                    <h1>My Sessions</h1>
                  </div>
                  <div className={styles.dashboardSectionRightContentStepper}>
                    <VerticalStepper fetchedDates={fetchedDates || []} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isToken && (
            <div
              style={{
                width: '10em',
                display: 'flex',
                alignSelf: 'end',
              }}
            >
              <StyledButton
                cursor='pointer'
                backgroundColor='#000'
                color='#fff'
                text='Log out'
                fontWeight=''
                image={logout}
                onClick={() => {
                  handleLogout
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default UserDashboard
