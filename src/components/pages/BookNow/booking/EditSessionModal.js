import React, { useState } from 'react'
import BodyService from '../../Home/bodyService/BodyService'
import Modal from '@mui/material/Modal'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import close from '/public/assets/images/circle-xmark.png'
import Image from 'next/image'
import styles from '@/styles/components/booking/booking.module.css'

const EditSessionModal = ({ onClose, modalOpen }) => {
  return (
    <>
      <Modal
        open={true}
        onClose={onClose}
        aria-labelledby='services-modal-title'
        aria-describedby='services-modal-description'
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            cursor: 'pointer',
          }}
        >
          <Paper
            style={{
              padding: '20px',
              width: '90%',
              maxWidth: '900px',
              borderRadius: '30px',
              backgroundImage: 'linear-gradient(to bottom, #ffe4dc, #e1ad9d)',
            }}
          >
            <div className={styles.editSessionModalContent}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: '100%',
                  paddingRight: '10px',
                }}
                onClick={onClose}
              >
                {/* <h1>Review</h1> */}
                <Image
                  src={close}
                  alt=''
                  width={25}
                  height={25}
                  // onClick={onClose}
                />
              </div>
              <Typography variant='h5' id='services-modal-title'>
                <BodyService modalOpen={modalOpen} />
              </Typography>
            </div>
          </Paper>
        </div>
      </Modal>
    </>
  )
}

export default EditSessionModal
