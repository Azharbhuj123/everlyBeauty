import React from 'react'
import styles from '@/styles/auth.module.css'
import Button from '../../buttons/Button'

const ContactUsForm = () => {
  return (
    <>
      <div className={styles.contactUsFormContainer}>
        <div className={styles.contactUsForm}>
          <div className={styles.contactUsFormHeading}>
            <h1>Contact Us</h1>
          </div>
          <div className={styles.contactUsFormInputs}>
            <input placeholder='First Name' type='text' />
            <input placeholder='Last Name' type='text' />
            <input placeholder='Enter Registered Email' type='email' />
            <input placeholder='Phone Number' type='phone' />
            <textarea placeholder='Your Inquiry here...' type='text' />
          </div>
          <div className={styles.contactUsFormButton}>
            <Button text='Send'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsForm
