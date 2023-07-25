import React, { useContext } from 'react'
import styles from '@/styles/components/bodyService/bodyService.module.css'
import Image from 'next/image'
import female from '/public/assets/images/colada-female.png'
import { ServiceReciptData, TotalReciptData } from '@/pages/api/utils'
import Progressbar from './Progressbar'
import DiscountToggle from './DiscountToggle'
import DiscountType from './DiscountType'
import MySession from '../mySession/MySession'
import { bookingContext } from '@/store/bookingContext'

const BodyService = () => {
  const [booking, setBooking] = useContext(bookingContext)
  console.log(booking, 'store check')
  const services = [
    {
      id: 1,
      name: 'Underarms',
      price: '75',
      time: '15',
    },
    {
      id: 2,
      name: 'Bikini',
      price: '100',
      time: 20,
    },
    {
      id: 3,
      name: 'Lower Leg',
      price: '120',
      time: '25',
    },
    {
      id: 4,
      name: 'Upper Back',
      price: '90',
      time: '15',
    },
  ]

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
                    <label className={styles.bodyServicelabels}>
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

                {/* <label className={styles.bodyServicelabels}>
                  <input type="checkbox" />
                  Bikini
                </label>

                <label className={styles.bodyServicelabels}>
                  <input type="checkbox" />
                  Lower Leg
                </label>

                <label className={styles.bodyServicelabels}>
                  <input type="checkbox" />
                  Upper Back
                </label> */}
              </div>
              <div className={styles.bodyServiceFemale}>
                <Image src={female} width={400} height={800} />
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
              <Progressbar />
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
