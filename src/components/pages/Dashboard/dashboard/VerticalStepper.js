import React, { useState } from 'react'
import { Stepper, Step, StepLabel, Button, Typography } from '@mui/material'
import arrow from '/public/assets/images/arrow-up-right-white.svg'
import StyledButton from '../../../buttons/StyledButton'
import styles from '@/styles/components/dashboard/verticalStepper.module.css'
const steps = [
  { label: 'Session 1', dot: ':', date: 'Jun 2023' },
  { label: 'Session 2', dot: ':', date: 'Jul 2023' },
  { label: 'Session 3', dot: ':', date: 'Aug 2023' },
  { label: 'Session 4', dot: ':', date: 'Sept 2023' },
  { label: 'Session 5', dot: ':', date: 'Oct 2023' },
  { label: 'Session 6' },
]

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  const isLastStep = activeStep === steps.length - 1

  return (
    <div>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map(({ label, date, dot }, index) => (
          <Step key={label} onClick={() => setActiveStep(index)}>
            <StepLabel>
              <Typography>{label}</Typography>
              <div
                style={{
                  display: 'flex',
                  width: '50%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h2>{dot}</h2>
                <Typography variant='caption'>{date}</Typography>
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
        {isLastStep ? null : (
          <div className={styles.stepperButton}>
            <StyledButton
              color='#fff'
              backgroundColor='#E1AD9D'
              text='Book Now'
              image={arrow}
            />
          </div>
        )}
      </div>
      {/* {activeStep !== steps.length && (
        <div>
          <div>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button
                variant='contained'
                color='primary'
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
              >
                {activeStep === steps.length - 1 ? 'Complete' : 'Next'}
              </Button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  )
}

export default VerticalStepper
