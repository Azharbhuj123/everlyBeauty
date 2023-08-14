import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import styles from '@/styles/components/testimonials/testimonials.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { testimonalsCrdData } from '@/pages/api/utils'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import SwiperCore from 'swiper'
import { BASE_URL, createAPIEndPoint } from '@/src/config/api'
import { endPoints } from '@/src/config/endpoints'
import avatar from '/public/assets/images/avatar1.svg'

const Testimonals = () => {
  const [reviews, setReviews] = useState([])

  const fetchReviews = async () => {
    try {
      const response = await createAPIEndPoint(
        endPoints.rateReview,
        true
      ).fetchAll()
      setReviews(response.data.data)
      console.log(response.data.data, 'reviews')
    } catch (error) {
      console.error('Error fetching reviews:', error)
    }
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  SwiperCore.use([Autoplay])
  return (
    <>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsWrapper}>
          <div className={styles.testimonialsHeading}>
            <h1>Testimonials</h1>
          </div>
          <div className={styles.testimonialsCards}>
            <Swiper
              style={{ width: '100%', height: '400px' }}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              breakpoints={{
                769: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                501: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                500: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
            >
              {reviews.map((item, index) => {
                console.log(reviews, 'review check')
                return (
                  <>
                    {/* {console.log(
                      {`${BASE_URL}${item.attributes?.userImage?.data?.attributes?.url}`},
                      'image'
                    )} */}
                    <SwiperSlide>
                      <div className={styles.testimonialsCard}>
                        <ReactStars
                          count={item.rating}
                          edit={false}
                          value={item.attributes.rating}
                          size={28}
                          color2={'#ffd700'}
                        />
                        <div className={styles.testimonialsCardAvatar}>
                          <Image
                            src={avatar}
                            //                             {`${BASE_URL}${item.attributes?.userImage?.data?.attributes?.url}
                            // `}
                            width={100}
                            height={100}
                            alt=''
                          />
                        </div>
                        <div className={styles.testimonialsCardContent}>
                          <h4>{item.attributes.userName}</h4>
                          <p>{item.attributes.review}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonals
