import React from 'react'
import styles from '@/styles/button.module.css'
const Button = ({
  text,
  color = '#fff',
  backgroundColor = '#000',
  action = () => {},
}) => {
  const simpleButton = {
    backgroundColor: backgroundColor,
    width: '100%',
    textAlign: 'center',
    color: color,
    borderRadius: 40,
    height: '50px',
    fontFamily: 'Gilroy',
    fontSize: '16px',
    border: '1px solid #000',
    cursor: 'pointer',
    border: 'none',
    padding: '0px 25px',
  }

  return (
    <>
      <button
        className={styles['button-animate']}
        style={simpleButton}
        onClick={() => action()}
      >
        {text}
      </button>
    </>
  )
}

export default Button
