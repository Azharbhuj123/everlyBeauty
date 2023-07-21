import React from 'react'
import styles from '@/styles/components/bodyService/bodyService.module.css'
import Image from 'next/image'
import female from '/public/assets/images/colada-female.png'
import { ServiceReciptData, TotalReciptData } from '@/pages/api/utils'
import Progressbar from './Progressbar'
import DiscountToggle from './DiscountToggle'
import DiscountType from './DiscountType'
import MySession from '../mySession/MySession'
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
                <MySession/>
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
