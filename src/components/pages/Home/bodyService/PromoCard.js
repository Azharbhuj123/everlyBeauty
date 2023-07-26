import React, { useState } from 'react'
import styles from '@/styles/components/bodyService/PromoCard.module.css'
import Image from 'next/image'
import close from '/public/assets/images/circle-xmark.png'
import Button from '../../../buttons/Button'

const PromoCard = ({ onClose }) => {
  const [OTP, setOTP] = useState('')

  const handlePromoCardClose = () => {
    onClose()
  }

  return (
    <>
      <div className={styles.promoForm}>
        <div className={styles.promoFormContent}>
          <div className={styles.promoFormContentHeading}>
            <h1>Promo Code</h1>
            <Image
              src={close}
              alt=''
              width={25}
              height={25}
              onClick={handlePromoCardClose}
            />
          </div>
          <div className={styles.promoFormContentInput}>
            <input placeholder='Enter Promo Code' type='text' />
          </div>
          <div className={styles.promoFormContentButton}>
            <Button text='Submit' onClick={() => action()} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PromoCard
