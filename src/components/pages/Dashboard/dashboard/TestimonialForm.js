import React, { useState } from 'react'
import styles from '@/styles/components/dashboard/testimonialForm.module.css'
import Button from '@/src/components/buttons/Button'
import close from '/public/assets/images/circle-xmark.png'
import Image from 'next/image'
import Profile from '/public/assets/images/profile.svg'
import ReactStars from 'react-stars'

const TestimonialForm = ({ onClose }) => {
  const [profileImage, setProfileImage] = useState(null)

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0]
    setProfileImage(file)
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
              value={5}
              size={45}
              color2={'#ffd700'}
            />
          </div>
          <div className={styles.testimonialFormComment}>
            <h2>Comment</h2>
            <textarea placeholder='Your Comment here...' type='text' />
          </div>
        </div>
        <div className={styles.testimonialFormButton}>
          <Button text='Submit' />
        </div>
      </div>
    </>
  )
}

export default TestimonialForm
