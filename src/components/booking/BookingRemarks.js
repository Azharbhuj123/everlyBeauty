import React from 'react'
import styles from '@/styles/components/booking/bookingRemarks.module.css'
import Image from 'next/image'
import spa from '/public/assets/images/spa.svg'


const BookingRemarks = () => {
  return (
    <>
      <div className={styles.bookingRemarksSection}>
      <div className={styles.bookingRemarkContent}>
       <div className={styles.bookingRemarkContentImage}>
       <Image src={spa} width={400} height={250}/>
       </div>
       <div className={styles.bookingRemarkContentThank}>
       <h1>Thank You For Your Trust.</h1>
       <p>We will do our best to make you leave satisfied with our service. </p>
       </div>
       <div className={styles.bookingRemarkContentRegards}>
       <p>See You On Wednesday, Dec 7Th, 2023, At 10:00 Am.</p>
       </div>
      </div>
      </div>
    </>
  )
}

export default BookingRemarks
