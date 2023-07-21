import React from 'react'
import StyledButton from '../buttons/StyledButton'
import arrow from '/public/assets/images/arrow-up-right-white.svg'
import styles from '@/styles/components/booking/booking.module.css'
import Button from '../buttons/Button'
import BookTime from './BookTime'
import BookSession from './BookSession'
import BookingRemarks from './bookingRemarks'

const Booking = () => {
  return (
    <>
      <div className={styles.bookingContainer}>
        <div className={styles.bookingWrapper}>
          <div className={styles.bookingButton}>
            <StyledButton
              color='#fff'
              backgroundColor='#E1AD9D'
              text='Dashboard'
              image={arrow}
            />
          </div>
          {/* <BookTime /> */}
          {/* <BookSession /> */}
          <BookingRemarks/>
          <div className={styles.bookingButtons}>
            <div className={styles.bookingButtonLeft}>
              <Button
                color='#000'
                backgroundColor='#D9D9D6'
                text='Edit Session'
              />
            </div>
            <div className={styles.bookingButtonRight}>
              <StyledButton
                color='#fff'
                backgroundColor='#E1AD9D'
                text='Confirm'
                image={arrow}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking
