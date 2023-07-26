import React from 'react'
import StyledButton from '../../../buttons/StyledButton'
import arrow from '/public/assets/images/arrow-up-right-white.svg'
import styles from '@/styles/components/booking/bookTime.module.css'
import MySession from '../../Home/mySession/MySession'
import Button from '@/src/components/buttons/Button'
import MyCalender from '../calendar/MyCalender'
import MyCalendar2 from '@/src/components/MyCalendar2'
const BookTime = () => {
  return (
    <>
      <div className={styles.bookTimeContainer}>
        <div className={styles.bookTimeWrapper}>
          <div className={styles.bookTimeSection}>
            <div className={styles.bookTimeSectionLeft}>
              <MySession />
            </div>
            <div className={styles.bookTimeSectionRight}>
              <div className={styles.bookTimeSectionRightContent}>
                <h1>Book a Time</h1>
              </div>
              {/* Calendar */}
              <MyCalender />
              {/* <MyCalendar2 /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookTime
