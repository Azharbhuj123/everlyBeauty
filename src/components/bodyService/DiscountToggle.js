import React, { useState } from 'react'
import styles from '@/styles/components/bodyService/discountToggle.module.css'
import Switch from 'react-switch'
import StyledButton from '../buttons/StyledButton'
import arrow from '/public/assets/images/arrow-up-right-white.svg'
const DiscountToggle = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [isCheckedTwo, setIsCheckedTwo] = useState(false)

  const handleSwitchChange = (checked) => {
    setIsChecked(checked)
  }

  const handleSwitchChangeTwo = (checkedTwo) => {
    setIsCheckedTwo(checkedTwo)
  }

  return (
    <>
      <div className={styles.discountToggleContainer}>
        <div className={styles.discountToggleWrapper}>
          <div className={styles.discountToggles}>
            <div className={styles.discountToggleLeft}>
              <Switch
                onChange={handleSwitchChange}
                checked={isChecked}
                onColor='#E1AD9D' // Replace with your desired color when the switch is on
                offColor='#ccc' // Replace with your desired color when the switch is off
                checkedIcon={false}
                uncheckedIcon={false}
                height={24}
                width={48}
                handleDiameter={24}
              />
              <span className={styles.discountToggleLeftText}>
                10% Referral Discount
              </span>
            </div>
            <p className={styles.discountTogglesCenterLine}>|</p>
            <div className={styles.discountToggleLeft}>
              <Switch
                onChange={handleSwitchChangeTwo}
                checked={isCheckedTwo}
                onColor='#E1AD9D' // Replace with your desired color when the switch is on
                offColor='#ccc' // Replace with your desired color when the switch is off
                checkedIcon={false}
                uncheckedIcon={false}
                height={24}
                width={48}
                handleDiameter={24}
              />
              <span className={styles.discountToggleLeftText}>
                10% Student Discount
              </span>
            </div>
          </div>
          <div className={styles.bookNow}>
            <StyledButton
              color='#fff'
              backgroundColor='#E1AD9D'
              text='Book Now'
              image={arrow}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default DiscountToggle
