import React from 'react'
import styles from '@/styles/components/bodyService.module.css'
import Image from 'next/image'
import female from '/public/assets/images/colada-female.png'
const BodyService = () => {
  return (
    <>
      <div className={styles.bodyServiceContainer}>
        <div className={styles.bodyServiceWrapper}>
          <div className={styles.bodyServiceContent}>
            <div className={styles.bodyServiceContentLeft}>
              <div className={styles.bodyServicecheckboxes}>
                <label className={styles.bodyServicelabels}>
                  <input type='checkbox' checked='checked' />
                  {/* <span class="checkmark"></span> */}
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
                <h1>Click On Body Part To Select</h1>
                <h3>My Session</h3>
                <p>
                  Click on body parts to know more details about them, Lorem
                  ipsum dolor sit amet.
                </p>
              </div>

              {/* Recipt */}
              <div className={styles.bodyServiceContentRightTable}>
                <div className={styles.bodyServiceContentRightTableRow}>
                  <div className={styles.bodyServiceContentRightTableService}>
                    <div
                      className={styles.bodyServiceContentRightTableDescription}
                    >
                      <p>Underarms</p>
                    </div>
                  </div>
                  <div className={styles.bodyServiceContentRightTableServiceDetail}>
                    <div
                      className={styles.bodyServiceContentRightTableDescription}
                    >
                      <p>15 min</p>
                    </div>
                    <p className={styles.bodyServiceContentRightTableDescriptionLine}>|</p>
                    <div
                      className={styles.bodyServiceContentRightTableDescription}
                    >
                      <p>$75</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BodyService
