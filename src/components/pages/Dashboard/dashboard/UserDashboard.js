import React, { useEffect } from 'react'
import styles from '@/styles/components/dashboard/userDashboard.module.css'
import Chart from './Chart'
import Stepper from './VerticalStepper'
import VerticalStepper from './VerticalStepper'
import { createAPIEndPoint } from '@/src/config/api'
import { endPoints } from '@/src/config/endpoints'
import { useState } from 'react'

const UserDashboard = () => {
  const [fetchedDates, setFetchedDates] = useState([])
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
  useEffect(()=>{
    getMyData()
  },[])

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
                  <Chart fetchedDates={fetchedDates||[]} getMyData={getMyData} />
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
                    <VerticalStepper
                    
                      fetchedDates={fetchedDates||[]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <TestimonialForm /> */}
        </div>
      </div>
    </>
  )
}

export default UserDashboard
