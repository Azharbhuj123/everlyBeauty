import React from 'react'
import styles from '@/styles/components/bodyService/bodyService.module.css'
import Image from 'next/image'
import female from '/public/assets/images/colada-female.png'
import { ServiceReciptData, TotalReciptData } from '@/pages/api/utils'
import Progressbar from './Progressbar'
import DiscountToggle from './DiscountToggle'
import DiscountType from './DiscountType'
const BodyService = () => {
  return (
    <>
      <div className={styles.bodyServiceContainer}>
        <div className={styles.bodyServiceWrapper}>
          <div className={styles.bodyServiceContent}>
            <div className={styles.bodyServiceContentLeft}>
              <div className={styles.bodyServicecheckboxes}>
                <label className={styles.bodyServicelabels}>
                  <input type='checkbox' />
                  Underarms
                </label>

                <label className={styles.bodyServicelabels}>
                  <input type='checkbox' />
                  Bikini
                </label>

                <label className={styles.bodyServicelabels}>
                  <input type='checkbox' />
                  Lower Leg
                </label>

                <label className={styles.bodyServicelabels}>
                  <input type='checkbox' />
                  Upper Back
                </label>
              </div>
              <div className={styles.bodyServiceFemale}>
                <Image src={female} width={400} height={800} />
              </div>
            </div>
            <div className={styles.bodyServiceContentRight}>
              <div className={styles.bodyServiceContentRightHeading}>
                <h1>Click On Checkbox To Select Bodypart</h1>
                <h3>My Session</h3>
                <p>
                  Click on body parts to know more details about them, Lorem
                  ipsum dolor sit amet.
                </p>
              </div>

              {/* Recipt */}
              <div className={styles.bodyServiceContentRightTable}>
                {ServiceReciptData.map((item, index) => {
                  return (
                    <>
                      <div className={styles.bodyServiceContentRightTableRow}>
                        <div
                          className={styles.bodyServiceContentRightTableService}
                        >
                          <div
                            className={
                              styles.bodyServiceContentRightTableDescription
                            }
                          >
                            <p>{item.service}</p>
                          </div>
                        </div>
                        <div
                          className={
                            styles.bodyServiceContentRightTableServiceDetail
                          }
                        >
                          <div
                            className={
                              styles.bodyServiceContentRightTableDescription
                            }
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
                            className={
                              styles.bodyServiceContentRightTableDescription
                            }
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
                        <div
                          className={styles.bodyServiceContentRightcalcDetail}
                        >
                          <div
                            className={
                              styles.bodyServiceContentRightcalcDetailService
                            }
                          >
                            <p>{item.total}</p>
                          </div>
                        </div>
                        <div
                          className={styles.bodyServiceContentRightcalcPrices}
                        >
                          <div
                            className={
                              styles.bodyServiceContentRightcalcDetailService
                            }
                          >
                            <p>{item.discount}</p>
                          </div>
                          <div
                            className={
                              styles.bodyServiceContentRightcalcDetailService
                            }
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
                      <div
                        className={
                          styles.bodyServiceContentRightcalcDetailService
                        }
                      >
                        <p>Total</p>
                      </div>
                    </div>
                    <div className={styles.bodyServiceContentRightcalcPrices}>
                      <div
                        className={
                          styles.bodyServiceContentRightcalcDetailService
                        }
                      >
                        <p></p>
                      </div>
                      <div
                        className={
                          styles.bodyServiceContentRightcalcDetailService
                        }
                      >
                        <p>$308</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              justifyContent: 'center',
              display: 'flex',
              marginTop: '6em',
            }}
          >
            <div style={{ width: '75%' }}>
              <Progressbar />
              <DiscountToggle/>
              <DiscountType/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BodyService
