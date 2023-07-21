import { ServiceReciptData, TotalReciptData } from '@/pages/api/utils'
import React from 'react'
import styles from '@/styles/components/bodyService/bodyService.module.css'
const MySession = () => {
  return (
    <>
      <div className={styles.bodyServiceContentRightHeading}>
        <h3>My Session</h3>
        <p>
          Click on body parts to know more details about them, Lorem ipsum dolor
          sit amet.
        </p>
      </div>

      {/* Recipt */}
      <div className={styles.bodyServiceContentRightTable}>
        {ServiceReciptData.map((item, index) => {
          return (
            <>
              <div className={styles.bodyServiceContentRightTableRow}>
                <div className={styles.bodyServiceContentRightTableService}>
                  <div
                    className={styles.bodyServiceContentRightTableDescription}
                  >
                    <p>{item.service}</p>
                  </div>
                </div>
                <div
                  className={styles.bodyServiceContentRightTableServiceDetail}
                >
                  <div
                    className={styles.bodyServiceContentRightTableDescription}
                  >
                    <p>{item.time}</p>
                  </div>
                  <p
                    className={
                      styles.bodyServiceContentRightTableDescriptionLine
                    }
                  >
                    |
                  </p>
                  <div
                    className={styles.bodyServiceContentRightTableDescription}
                  >
                    <p>{item.price}</p>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
      <div className={styles.bodyServiceContentRightcalc}>
        {TotalReciptData.map((item, index) => {
          return (
            <>
              <div className={styles.bodyServiceContentRightcalcRow}>
                <div className={styles.bodyServiceContentRightcalcDetail}>
                  <div
                    className={styles.bodyServiceContentRightcalcDetailService}
                  >
                    <p>{item.total}</p>
                  </div>
                </div>
                <div className={styles.bodyServiceContentRightcalcPrices}>
                  <div
                    className={styles.bodyServiceContentRightcalcDetailService}
                  >
                    <p>{item.discount}</p>
                  </div>
                  <div
                    className={styles.bodyServiceContentRightcalcDetailService}
                  >
                    <p>{item.price}</p>
                  </div>
                </div>
              </div>
            </>
          )
        })}

        <div className={styles.bodyServiceContentRightTotal}>
          <div className={styles.bodyServiceContentRightcalcRow}>
            <div className={styles.bodyServiceContentRightcalcDetail}>
              <div className={styles.bodyServiceContentRightcalcDetailService}>
                <p>Total</p>
              </div>
            </div>
            <div className={styles.bodyServiceContentRightcalcPrices}>
              <div className={styles.bodyServiceContentRightcalcDetailService}>
                <p></p>
              </div>
              <div className={styles.bodyServiceContentRightcalcDetailService}>
                <p>$308</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MySession
