import arrow from '/public/assets/images/arrow-up-right-white.svg'
import React, { useState, useEffect } from 'react'
import { Stepper, Step, StepLabel, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { createAPIEndPoint } from '@/src/config/api'
import { endPoints } from '@/src/config/endpoints'
import styles from '@/styles/components/dashboard/verticalStepper.module.css'
import StyledButton from '@/src/components/buttons/StyledButton'

const VerticalStepper = ({ fetchedDates }) => {
  const [activeStep, setActiveStep] = useState(0)

  const router = useRouter()

  return (
    <div>
      <Stepper orientation='vertical'>
        {fetchedDates.map((item, index) => (
          <Step key={index}>
            <StepLabel
              StepIconProps={{
                completed: true,
              }}
            >
              <Typography>{`Session ${index + 1}`}</Typography>
              <div
                style={{
                  display: 'flex',
                  width: '50%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h2>:</h2>
                <Typography variant='caption'>{item.date}</Typography>
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignSelf: 'end',
          justifyContent: 'flex-end',
        }}
      >
        {/* {isLastStep && (
          <div className={styles.stepperButton}>
            <StyledButton
              color='#fff'
              backgroundColor='#E1AD9D'
              text={`Book Now for Session ${activeStep + 1}`}
              image={arrow}
              onClick={() => router.push('/')}
            />
          </div>
        )} */}
      </div>

      <div className={styles.stepperButton}>
        <StyledButton
          cursor='pointer'
          color='#fff'
          backgroundColor='#E1AD9D'
          text='Book Now'
          fontWeight='600'
          image={arrow}
          onClick={() => router.push('/book-now')}
        />
      </div>
    </div>
  )
}

export default VerticalStepper
