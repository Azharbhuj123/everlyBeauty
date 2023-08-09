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
import StyledButton from '@/src/components/buttons/StyledButton'
import arrow from '/public/assets/images/arrow-up-right-pink.svg'
import arrowBlack from '/public/assets/images/arrow-up-right-black.svg'

const BodyService = ({ modalOpen = false }) => {
  const [booking, setBooking] = useContext(bookingContext)
  // const [discountPercent, setDiscountPercent] = useContext(
  //   discountPercentContext
  // );
  const [allServices, setAllServices] = useState(services)
  // const getService = async () => {
  //   try {
  //     const Response = await createAPIEndPoint(endPoints.services).fetchAll()
  //     console.log(Response, 'response for services')
  //   } catch (error) {}
  // }

  // useEffect(() => {
  //   getService()
  // }, [])

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
  useEffect(() => {}, [])
  const bookinSet = new Set(booking.map((item) => JSON.stringify(item)))

  const midIndex = Math.ceil(allServices.length / 2)
  const firstColumnLabels = allServices.slice(0, midIndex)
  const secondColumnLabels = allServices.slice(midIndex)

  console.log(firstColumnLabels, 'labels')
  return (
    <>
      <div className={styles.bodyServiceContainer}>
        <div className={styles.bodyServiceWrapper}>
          <div className={styles.bodyServiceContent}>
            <div className={styles.bodyServiceContentLeft}>
              <div className={styles.bodyServicecheckboxes}>
                <div className={styles.bodyServiceColumn}>
                  {firstColumnLabels.map((item, index) => {
                    return (
                      // <label key={item.id} className={styles.bodyServicelabels}>
                      //   <input
                      //     type="checkbox"
                      //     checked={booking.some(
                      //       (element) =>
                      //         item.id === element.id &&
                      //         item.name === element.name &&
                      //         item.price === element.price &&
                      //         item.time === element.time
                      //     )}
                      //     // onClick={() => setBooking([...booking, item])}
                      //     onChange={() => {
                      //       handleCheckBox(item);
                      //     }}
                      //   />
                      //   {item.name}
                      // </label>
                      <div className={styles.bodyServiceButtons}>
                        <StyledButton
                          cursor='pointer'
                          text={item.name}
                          image={arrow}
                          backgroundColor={item.isChecked ? '#fff' : '#ccccc'}
                          color='#dcaa9d'
                          fontWeight='600'
                          onClick={() => {
                            setBooking([...booking, item])
                            handleCheckBox(item)
                          }}
                        />
                      </div>
                    )
                  })}
                </div>
                {/* Second column of checkboxes */}
                <div className={styles.bodyServiceColumn}>
                  {secondColumnLabels.map((item) => (
                    // <label key={item.id} className={styles.bodyServicelabels}>
                    //   <input
                    //     type='checkbox'
                    //     checked={booking.some(
                    //       (element) =>
                    //         item.id === element.id &&
                    //         item.name === element.name &&
                    //         item.price === element.price &&
                    //         item.time === element.time
                    //     )}
                    //     onChange={() => {
                    //       handleCheckBox(item)
                    //     }}
                    //   />
                    //   {item.name}
                    // </label>
                    <div className={styles.bodyServiceButtons}>
                      <StyledButton
                        cursor='pointer'
                        text={item.name}
                        image={arrow}
                        backgroundColor='#fff'
                        color='#dcaa9d'
                        fontWeight='600'
                      />
                      {item.isChecked === true && (
                        <StyledButton
                          cursor='not-allowed'
                          text={item.name}
                          image={arrowBlack}
                          backgroundColor='#ccc'
                          color='#000'
                          fontWeight='600'
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className={styles.bodyServiceFemale}>
                <Image src={female} width={400} height={'auto'} alt='' />
              </div> */}
            </div>
            <div className={styles.bodyServiceContentRight}>
              <div className={styles.bodyServiceContentRightHeading}>
                {modalOpen == false && (
                  <h1>Click On Button To Select Bodypart</h1>
                )}
                <MySession />
              </div>
            </div>
          </div>
          <div className={styles.progressbarContainer}>
            <div className={styles.progressbarSection}>
              {/* <Progressbar discountPercent={discountPercent} />
              <DiscountToggle />
              <DiscountType /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BodyService
