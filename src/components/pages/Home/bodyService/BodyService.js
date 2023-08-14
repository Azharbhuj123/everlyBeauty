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
import Auth from '@/src/components/auth/auth'

const BodyService = ({ modalOpen = false }) => {
  const [booking, setBooking] = useContext(bookingContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isToken, isSetToken] = useState(null)
  const [mode, setMode] = useState('login')
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

  useEffect(() => {
    const authToken = localStorage.getItem('Token')
    isSetToken(authToken)
  }, [])
  console.log(isToken, 'auth token checking')

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    // setMode('login')
  }

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
                      <div className={styles.bodyServiceButtons}>
                        <StyledButton
                          cursor='pointer'
                          text={item.name}
                          image={
                            booking.some(
                              (element) =>
                                item.id === element.id &&
                                item.name === element.name &&
                                item.price === element.price &&
                                item.time === element.time
                            )
                              ? arrowBlack
                              : arrow
                          }
                          backgroundColor={
                            booking.some(
                              (element) =>
                                item.id === element.id &&
                                item.name === element.name &&
                                item.price === element.price &&
                                item.time === element.time
                            )
                              ? '#cccc'
                              : '#fff'
                          }
                          color={
                            booking.some(
                              (element) =>
                                item.id === element.id &&
                                item.name === element.name &&
                                item.price === element.price &&
                                item.time === element.time
                            )
                              ? '#000'
                              : '#dcaa9d'
                          }
                          fontWeight='600'
                          onClick={() => {
                            {
                              setBooking([...booking, item])
                              handleCheckBox(item)
                            }
                            {
                              isToken !== null ? null : handleModalOpen()
                            }
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
                        image={
                          booking.some(
                            (element) =>
                              item.id === element.id &&
                              item.name === element.name &&
                              item.price === element.price &&
                              item.time === element.time
                          )
                            ? arrowBlack
                            : arrow
                        }
                        backgroundColor={
                          booking.some(
                            (element) =>
                              item.id === element.id &&
                              item.name === element.name &&
                              item.price === element.price &&
                              item.time === element.time
                          )
                            ? '#cccc'
                            : '#fff'
                        }
                        color={
                          booking.some(
                            (element) =>
                              item.id === element.id &&
                              item.name === element.name &&
                              item.price === element.price &&
                              item.time === element.time
                          )
                            ? '#000'
                            : '#dcaa9d'
                        }
                        fontWeight='600'
                        onClick={() => {
                          {
                            setBooking([...booking, item])
                            handleCheckBox(item)
                          }
                          {
                            isToken !== null ? null : handleModalOpen()
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className={styles.bodyServiceFemale}>
                <Image src={female} width={400} height={'auto'} alt='' />
              </div> */}
            </div>
            <div className={styles.modalbodyServiceContentRight}>
              <div className={styles.bodyServiceContentRightHeading}>
                {modalOpen === false && (
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
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <Auth
              mode={mode}
              setMode={setMode}
              headingText={
                mode == 'login'
                  ? 'Log in'
                  : mode == 'signup'
                  ? 'Sign Up'
                  : mode == 'forgot-password'
                  ? 'Forgot Password'
                  : 'Reset-Password'
              }
              buttonText={
                mode == 'login'
                  ? 'Log in'
                  : mode == 'signup'
                  ? 'Sign Up'
                  : mode == 'forgot-password'
                  ? 'Forgot Password'
                  : 'Reset-Password'
              }
              onClick={handleModalClose}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default BodyService
