import React from 'react'
import styles from '@/styles/components/promise/promise.module.css'
import Image from 'next/image'
import { promiseCardData } from '@/pages/api/utils'

const PromiseCard = () => {
  return (
    <>
      <div className={styles.promiseCardContainer}>
        <div className={styles.promiseCards}>
          {promiseCardData.map((item, index) => {
            return (
              <>
                <div key={index} className={styles.promiseCard}>
                  <div className={styles.promiseCardContent}>
                    <div className={styles.promiseCardContentImage}>
                      <Image src={item.img} width={80} height={80} alt='' />
                    </div>
                    <div className={styles.promiseCardContentText}>
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                    </div>
                    <div className={styles.promiseCardContentArrow}>
                      <Image src={item.arrow} width={30} height={30} />
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PromiseCard
