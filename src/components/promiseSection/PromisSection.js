import React from 'react'
import styles from '@/styles/components/promise.module.css'
import PromiseCard from './PromiseCard'

const PromisSection = () => {
  return (
    <>
      <div className={styles.promiseContainer}>
        <div className={styles.promiseWrapper}>
          <div className={styles.promiseContent}>
            <div className={styles.promiseContentText}>
              <h1>Our Promise To You</h1>
              <p>
                At <span>Everly Beauty</span> we care about you, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo
              </p>
            </div>
          </div>
          <PromiseCard/>
        </div>
      </div>
    </>
  )
}

export default PromisSection
