import React from 'react'
import styles from '@/styles/components/booking/bookTime.module.css'
import MySession from '../mySession/MySession'

const BookTime = () => {
  return (
    <>
      <div className={styles.bookTimeSection}>
        <div className={styles.bookTimeSectionLeft}>
          <MySession />
        </div>
        <div className={styles.bookTimeSectionRight}>
          <div className={styles.bookTimeSectionRightContent}>
            <h1>Book a Time</h1>
          </div>
          {/* Calendar */}
        </div>
      </div>
    </>
  )
}

export default BookTime
