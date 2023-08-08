import React from 'react'
import styles from '@/styles/components/dashboard/userDashboard.module.css'
import Chart from './Chart'
import Stepper from './VerticalStepper'
import VerticalStepper from './VerticalStepper'
import TestimonialForm from '../../Home/testimonals/TestimonialForm'
const UserDashboard = () => {
  return (
    <>
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardWrapper}>
          <div className={styles.dashboardSection}>
            <div className={styles.dashboardSectionLeft}>
              <div className={styles.dashboardSectionLeftContent}>
                <div className={styles.dashboardSectionLeftContentTitle}>
                  <h1>Progress Report</h1>
                </div>
                <div className={styles.dashboardSectionLeftContentGraph}>
                  <div className={styles.dashboardSectionLeftContentGraphTitle}>
                    <h2>% of hair loss</h2>
                  </div>
                  <Chart />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className={styles.dashboardSectionRight}>
              <div className={styles.dashboardSectionRightContent}>
                <div className={styles.dashboardSectionRightContentChild}>
                <div className={styles.dashboardSectionRightContentTitle}>
                  <h1>My Session</h1>
                </div>
                <div className={styles.dashboardSectionRightContentStepper}>
                  <VerticalStepper />
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
