import arrow from '/public/assets/images/arrow-up-right-white.svg';
import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CheckIcon from '@mui/icons-material/Check';
import StyledButton from '../../../buttons/StyledButton';
import styles from '@/styles/components/dashboard/verticalStepper.module.css';
import { useRouter } from 'next/router';
import { createAPIEndPoint } from '@/src/config/api';
import { endPoints } from '@/src/config/endpoints';

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [fetchedDates, setFetchedDates] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const response = await createAPIEndPoint(
          endPoints.userSlot
        ).fetchAllWithToken();
        const dates = response.data.data.map((item) => item.attributes.date);
        setFetchedDates(dates);
        console.log(response.data.data, 'slots date');
      } catch (error) {
        console.error('Error fetching date:', error);
      }
    };
    fetchDate();
  }, []);

  const steps = fetchedDates.map((date, index) => ({
    label: `Session ${index + 1}`,
    dot: ':',
    date: date,
    color:
      index === activeStep ? 'blue' : index < activeStep ? 'green' : 'gray',
  }));

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const isLastStep = activeStep === steps.length - 1;

  const handleBookNow = () => {
    // Add your logic to handle booking here
    // For example, you can perform any action or navigate to a new page
    router.push('/');
  };

  return (
    <div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map(({ label, date, dot, color }, index) => (
          <Step key={date}>
            <StepLabel
              StepIconProps={{
                completed: true,
              }}
            >
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
                <Typography variant="caption">
                  {fetchedDates[index]}
                </Typography>
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
        {isLastStep && (
          <div className={styles.stepperButton}>
            <StyledButton
              color="#fff"
              backgroundColor="#E1AD9D"
              text={`Book Now for Session ${activeStep + 1}`}
              image={arrow}
              onClick={handleBookNow}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalStepper;
