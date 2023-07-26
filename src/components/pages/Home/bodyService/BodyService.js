import React, { useContext, useEffect, useState } from 'react'
import styles from '@/styles/components/bodyService/bodyService.module.css'
import Image from 'next/image'
import female from '/public/assets/images/colada-female.png'
import { services } from '@/pages/api/utils'
import Progressbar from './Progressbar'
import DiscountToggle from './DiscountToggle'
import DiscountType from './DiscountType'
import MySession from '../mySession/MySession'
import { bookingContext } from '@/store/bookingContext'
import { createAPIEndPoint } from '@/src/config/api'
import { endPoints } from '@/src/config/endpoints'
import { discountPercentContext } from '@/store/discountPercentContext'

const BodyService = () => {
  const [booking, setBooking] = useContext(bookingContext)
  const [discountPercent, setDiscountPercent] = useContext(
    discountPercentContext
  )

  const getService = async () => {
    try {
      const Response = await createAPIEndPoint(endPoints.services).fetchAll()
      console.log(Response, 'response for services')
    } catch (error) {}
  }

  useEffect(() => {
    getService()
  }, [])

  const handleCheckBox = (service) => {
    const existingService = booking.find((item) => item.id === service.id)
    console.log(existingService, 'service')
    if (existingService) {
      // Remove the service from newArray
      let updatedServices = booking.filter((item) => item.id !== service.id)
      setBooking(updatedServices)
    } else {
      // Push the service into newArray
      setBooking([...booking, service])
    }
  }

  return (
    <>
      <div className={styles.bodyServiceContainer}>
        <div className={styles.bodyServiceWrapper}>
          <div className={styles.bodyServiceContent}>
            <div className={styles.bodyServiceContentLeft}>
              <div className={styles.bodyServicecheckboxes}>
                {services.map((item, index) => {
                  return (
                    <label key={item.id} className={styles.bodyServicelabels}>
                      <input
                        type='checkbox'
                        // onClick={() => setBooking([...booking, item])}
                        onChange={() => {
                          handleCheckBox(item)
                        }}
                      />
                      {item.name}
                    </label>
                  )
                })}
              </div>
              <div className={styles.bodyServiceFemale}>
                <Image src={female} width={400} height={800} alt='' />
              </div>
            </div>
            <div className={styles.bodyServiceContentRight}>
              <div className={styles.bodyServiceContentRightHeading}>
                <h1>Click On Checkbox To Select Bodypart</h1>
                <MySession />
              </div>
            </div>
          </div>
          <div
            style={{
              justifyContent: 'center',
              display: 'flex',
              marginTop: '6em',
            }}
          >
            <div style={{ width: '75%' }}>
              <Progressbar discountPercent={discountPercent} />
              <DiscountToggle />
              <DiscountType />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BodyService
