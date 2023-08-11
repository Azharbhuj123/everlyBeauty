import React, { useState } from 'react'
import styles from '@/styles/components/dashboard/testimonialForm.module.css'
import Button from '@/src/components/buttons/Button'
import close from '/public/assets/images/circle-xmark.png'
import Image from 'next/image'
import Profile from '/public/assets/images/profile.svg'
import ReactStars from 'react-stars'
import { createAPIEndPoint } from '@/src/config/api'
import { endPoints } from '@/src/config/endpoints'
import { toast } from 'react-hot-toast'

const TestimonialForm = ({ onClose }) => {
  const [profileImage, setProfileImage] = useState(null)
  const [review, setReview] = useState('')
  const [rating, setRating] = useState(0)

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0]
    setProfileImage(file)
  }

  const userString = localStorage.getItem('User')
  const user = JSON.parse(userString)
  const username = user && user.username ? user.username : ''

  console.log(username, 'user name')
  const handleSubmit = async () => {
    try {
      const response = createAPIEndPoint(endPoints.rateReview)
      const reviewData = {
        userName: username,
        rating,
        review,
        userImage: profileImage,
      }
      onClose()
      toast.success('Thanks for your review', {
        duration: 3000,
        position: 'top-right',
        // Change colors of success/error/loading icon
        iconTheme: {
          // primary: '#0a0',
          // secondary: '#fff',
        },
        // styling
        style: {
          padding: '5px 10px',
          color: '#713200',
          // minWidth: '300px'
        },
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      })
      await response.createWithToken({ data: reviewData })
      onClose()
    } catch (error) {
      toast.error(error.message, {
        duration: 3000,
        position: 'top-right',
        // Change colors of success/error/loading icon
        iconTheme: {
          // primary: '#0a0',
          // secondary: '#fff',
        },
        // styling
        style: {
          padding: '5px 10px',
          color: '#713200',
          // minWidth: '300px'
        },
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      })
      console.error('Error submitting review:', error)
    }
  }

  return (
    <>
      <div className={styles.testimonialForm}>
        <div className={styles.testimonialFormHeading}>
          {/* <h1>Review</h1> */}
          <Image src={close} alt='' width={25} height={25} onClick={onClose} />
        </div>
        {/* <div className={styles.testimonialFormSubheading}>
          <h2>Id</h2>
          <p>22 June 2023</p>
        </div> */}
        <div className={styles.testimonialFormInputs}>
          <div class={styles.testimonialFormProfile}>
            <h2>Profile Photo</h2>
            <label
              htmlFor='profileImageInput'
              className={styles.testimonialFormProfileImage}
            >
              {profileImage ? (
                <Image
                  src={URL.createObjectURL(profileImage)}
                  width={140}
                  height={140}
                  alt=''
                />
              ) : (
                <Image src={Profile} width={120} height={120} alt='' />
              )}
              <input
                type='file'
                id='profileImageInput'
                accept='image/*'
                onChange={handleProfileImageChange}
                style={{ display: 'none' }}
              />
            </label>
          </div>
          <div className={styles.testimonialFormRating}>
            <h2>Rating</h2>
            <ReactStars
              count={5}
              edit={true}
              // value={5}
              size={45}
              color2={'#ffd700'}
              value={rating}
              onChange={(newRating) => setRating(newRating)}
            />
          </div>
          <div className={styles.testimonialFormComment}>
            <h2>Comment</h2>
            <textarea
              placeholder='Your Comment here...'
              type='text'
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.testimonialFormButton}>
          <Button text='Submit' action={handleSubmit} />
        </div>
      </div>
    </>
  )
}

export default TestimonialForm
