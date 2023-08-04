import React from 'react'
import styles from '@/styles/auth.module.css'
import Button from '../../buttons/Button'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { createAPIEndPoint } from '@/src/config/api'

const ContactUsForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    console.log(state, 'state')
    const { name, email, phoneNumber, message } = state
    if (name !== '' && email !== '' && phoneNumber !== '' && message !== '') {
      postContact()
      toast.success('Thanks for contacting us')
    } else {
      toast.error('Kindly fill all the required fields')
    }
  }

  const postContact = async () => {
    try {
      const response = await createAPIEndPoint('contact-uses').create({
        data: state,
      })
      console.log(response, 'contact us response')
      if (response.status == 200) {
        setState({ name: '', email: '', phoneNumber: '', message: '' })
        window.reload
      }
    } catch (error) {
      toast.error(error?.response?.data?.error?.message)
      // console.log(error, 'contact us error')
    }
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
              placeholder='Name'
              type='text'
              name='name'
              onChange={handleInputChange}
            />
            <input placeholder='Last Name' type='text' />
            <input
              placeholder='Enter Register Email'
              name='email'
              type='email'
              onChange={handleInputChange}
            />
            <input
              placeholder='Phone Number'
              type='phone'
              name='phoneNumber'
              onChange={handleInputChange}
            />
            <textarea
              placeholder='Your Inquiry here...'
              type='text'
              name='message'
              maxLength='300'
              onChange={handleInputChange}
              // onClick={() => alert('sassa')}
            />
          </div>
          <div className={styles.contactUsFormButton}>
            <Button text='Send' action={() => handleSubmit()} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsForm
