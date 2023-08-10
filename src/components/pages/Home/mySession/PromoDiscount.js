import React from 'react'
import styles from '@/styles/components/bodyService/bodyService.module.css'

const PromoDiscount = ({ heading, amount, discount }) => {
  return (
    <>
      <div className={styles.bodyServiceContentRightcalcRow}>
        <div className={styles.bodyServiceContentRightcalcDetail}>
          <div className={styles.bodyServiceContentRightcalcDetailService}>
            <p>{heading}</p>
          </div>
        </div>
        <div className={styles.bodyServiceContentRightcalcPrices}>
          <div className={styles.bodyServiceContentRightcalcDetailServicePrice}>
            <p>{discount}</p>
          </div>
          <div className={styles.bodyServiceContentRightcalcDetailServicePrice}>
            <p>${amount}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PromoDiscount
