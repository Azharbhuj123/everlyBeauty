import React from 'react'
import styles from '@/styles/components/booking/bookingRemarks.module.css'
import Image from 'next/image'
import thankYou from '/public/assets/images/thankYou.svg'
const BookingRemarks = () => {
  return (
    <>
      <div className={styles.bookingRemarksSection}>
      <div className={styles.bookingRemarkContent}>
       <div className={styles.bookingRemarkContentImage}>
       {/* <Image src={thankYou} width={1} height={1}/> */}
       </div>
      </div>
      </div>
    </>
  )
}

export default BookingRemarks
