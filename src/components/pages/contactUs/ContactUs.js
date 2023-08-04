import React, { useState } from 'react'
import styles from '@/styles/auth.module.css'
import Button from '../../buttons/Button'
import { createAPIEndPoint } from '@/src/config/api'
import { endPoints } from '@/src/config/endpoints'

const ContactUsForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')

  const handleFormSubmit = async () => {
    try {
      let data = {
        name,
        email,
        phoneNumber,
        message,
      }
      const response = await createAPIEndPoint(endPoints.contactUs).create(data)
      if (response.status === 200) {
        setSuccess(true)
        setName('')
        setEmail('')
        setPhoneNumber('')
        setMessage('')
      } else {
        setError('Failed to submit the form.')
      }
    } catch (error) {}
  }

  return (
    <>
      <div className={styles.contactUsFormContainer}>
        <div className={styles.contactUsForm}>
          <div className={styles.contactUsFormHeading}>
            <h1>Contact Us</h1>
          </div>
          <div className={styles.contactUsFormInputs}>
            <input
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
            />

            <input
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
            />
            <input
              placeholder='Phone Number'
              type='phone'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <textarea
              placeholder='Your Inquiry here...'
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className={styles.contactUsFormButton}>
            <Button text='Send' action={() => handleFormSubmit()} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsForm
