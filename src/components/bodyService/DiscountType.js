import React from 'react'
import styles from '@/styles/components/bodyService/discountType.module.css'
import Image from 'next/image'

const DiscountType = () => {
  return (
    <>
      <div className={styles.discountTypeContainer}>
        <div className={styles.discountTypeWrapper}>
          <div className={styles.discountTypeLeft}>
            <div className={styles.discountTypeLeftBox}>
              <div className={styles.discountTypeLeftBoxContent}>
                <h2>Student?</h2>
                <p>
                  Get $30 Off Every Session!
                </p>
              </div>
            </div>
          </div>
          <div className={styles.discountTypeRight}>
          <div className={styles.discountTypeRightContent}>
            <h1>Got Friends ?</h1>
            <p>Get <span>$50</span> Credit Per Referral!</p>
          </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default DiscountType
