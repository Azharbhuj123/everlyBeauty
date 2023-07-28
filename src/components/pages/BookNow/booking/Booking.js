import React, { useState } from 'react'
import StyledButton from '../../../buttons/StyledButton'
import arrow from '/public/assets/images/arrow-up-right-white.svg'
import styles from '@/styles/components/booking/booking.module.css'
import Button from '../../../buttons/Button'
import BookTime from './BookTime'
import BookSession from './BookSession'
import BookingRemarks from './BookingRemarks'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'

const Booking = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex)
  }

  const getButtonText = () => {
    switch (activeSlideIndex) {
      case 1:
        return 'Download Instructions'
      case 2:
        return 'Back to Dashboard'
      default:
        return 'Confirm'
    }
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
              {activeSlideIndex === 2 ? null : (
                <StyledButton
                  color='#fff'
                  backgroundColor='#E1AD9D'
                  text='Dashboard'
                  image={arrow}
                />
              )}
            </div>
          </Link>
          <Swiper
            style={{ width: '100%', height: '850px' }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => console.log(swiper)}
            speed={1500}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <BookTime />
            </SwiperSlide>
            <SwiperSlide>
              <BookSession />
            </SwiperSlide>
            <SwiperSlide>
              <BookingRemarks />
            </SwiperSlide>
          </Swiper>
          <div className={styles.bookingButtons}>
            <div className={styles.bookingButtonLeft}>
              {!activeSlideIndex === 0 ? (
                <Button
                  color='#000'
                  backgroundColor='#D9D9D6'
                  text='Edit Session'
                />
              ) : null}
            </div>
            <Link
              href='/dashboard'
              style={{
                textDecoration: 'none',
                justifyContent: 'end',
                display: 'flex',
              }}
            >
              <div className={styles.bookingButtonRight}>
                {activeSlideIndex === 2 ? (
                  <StyledButton
                    color='#fff'
                    backgroundColor='#E1AD9D'
                    text={getButtonText()}
                    image={arrow}
                  />
                ) : null}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking
