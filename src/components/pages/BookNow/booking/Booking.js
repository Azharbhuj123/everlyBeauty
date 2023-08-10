import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BookTime from './BookTime'
import BookSession from './BookSession'
import BookingRemarks from './BookingRemarks'
import Link from 'next/link'
import { useState, useRef } from 'react'
import styles from '@/styles/components/booking/booking.module.css'
import StyledButton from '@/src/components/buttons/StyledButton'
import Button from '@/src/components/buttons/Button'
import arrow from '/public/assets/images/arrow-up-right-white.svg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import EditSessionModal from './editSessionModal'

const Booking_ = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const getButtonText = () => {
    switch (currentSlide) {
      case 1:
        return 'Continue'
      case 2:
        return 'Dashboard'
      default:
        return 'Continue'
    }
  }

  const handleContinueClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext() // Move to the next slide
    }
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: null,
    nextArrow: null,
    beforeChange: (current, next) => {
      setCurrentSlide(next)
    },
    afterChange: (current) => {
      setCurrentSlide(current)
    },
  }

  return (
    <>
      <div className={styles.bookingContainer}>
        <div className={styles.bookingWrapper}>
          <Link
            href='/dashboard'
            style={{
              textDecoration: 'none',
              justifyContent: 'end',
              display: 'flex',
            }}
          >
            <div className={styles.bookingButton}>
              {currentSlide == 2 ? null : (
                <StyledButton
                  cursor='pointer'
                  color='#fff'
                  fontWeight='600'
                  backgroundColor='#E1AD9D'
                  text='Dashboard'
                  image={arrow}
                />
              )}
            </div>
          </Link>
          <Slider {...settings} ref={sliderRef}>
            <div>
              <BookTime />
            </div>
            <div>
              <BookSession />
            </div>
            <div>
              <BookingRemarks />
            </div>
          </Slider>
          <div className={styles.bookingButtons}>
            <div className={styles.bookingButtonLeft}>
              {currentSlide == 0 && (
                <Button
                  color='#000'
                  backgroundColor='#D9D9D6'
                  text='Edit Session'
                  action={handleModalOpen}
                />
              )}
            </div>
            <div className={styles.bookingButtonRight}>
              {currentSlide == 2 ? (
                <Link href='/dashboard'>
                  <StyledButton
                    color='#fff'
                    backgroundColor='#E1AD9D'
                    fontWeight='600'
                    text='Dashboard'
                    image={arrow}
                    cursor='pointer'
                  />
                </Link>
              ) : (
                <StyledButton
                  color='#fff'
                  backgroundColor='#E1AD9D'
                  text={getButtonText()}
                  onClick={handleContinueClick}
                  image={arrow}
                  fontWeight='600'
                  cursor='pointer'
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        // <div className={styles.modalOverlay}>
        <EditSessionModal onClose={handleModalClose} modalOpen={modalOpen} />
        // </div>
      )}
    </>
  )
}

export default Booking_
