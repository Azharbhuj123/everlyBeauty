import React from 'react'
import styles from '@/styles/components/button.module.css'
const Button = ({ text, action, color = '#fff', backgroundColor = '#000' }) => {
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
    margin: '20px 0',
    cursor: 'pointer',
    border: 'none',
    padding: '0px 25px',
  }
  return (
    <>
      <button style={simpleButton} onClick={() => action()}>
        {text}
      </button>
    </>
  )
}

export default Button
