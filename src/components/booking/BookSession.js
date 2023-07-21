import React from 'react'
import styles from '@/styles/components/booking/bookSession.module.css'
import Image from 'next/image'
import { bookSessionCardData } from '@/pages/api/utils'

const BookSession = () => {
  return (
    <>
          <div className={styles.bookSessionSection}>
            <h1>Preparing for the Session:</h1>
            <div className={styles.bookSessionCards}>
              {bookSessionCardData.map((item, index) => {
                return (
                  <>
                    <div className={styles.bookSessionCard}>
                      <div className={styles.bookSessionCardTitle}>
                        <Image src={item.image} width={50} height={50} />
                        <h2>{item.item}</h2>
                      </div>
                      <div className={styles.bookSessionCardPara}>
                        <p>
                          {item.text}
                        </p>
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

export default BookSession
