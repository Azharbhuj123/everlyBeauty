import React from 'react'
import styles from '@/styles/button.module.css'
const Button = ({ children }) => {
  return (
    <>
      <button className={styles.button}>{children}</button>
    </>
  )
}

export default Button
