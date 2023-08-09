import React from 'react'
import Modal from '@mui/material/Modal'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import close from '/public/assets/images/circle-xmark.png'
import Image from 'next/image'

const ServicesModal = ({ services, onClose }) => {
  return (
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
            maxWidth: '600px',
            borderRadius: '30px',
            backgroundImage: 'linear-gradient(to bottom, #ffe4dc, #e1ad9d)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
            }}
            onClick={onClose}
          >
            {/* <h1>Review</h1> */}
            <Image
              src={close}
              alt=''
              width={25}
              height={25}
              onClick={onClose}
            />
          </div>
          <Typography variant='h5' id='services-modal-title'>
            Services
          </Typography>
          <ol
            style={{
              fontFamily: 'Poppins',
              fontSize: '16px',
              margin: '1em 0 1em 1em',
            }}
          >
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ol>
          {/* <Button variant='contained' color='primary' onClick={onClose}>
            Close
          </Button> */}
        </Paper>
      </div>
    </Modal>
  )
}

export default ServicesModal
