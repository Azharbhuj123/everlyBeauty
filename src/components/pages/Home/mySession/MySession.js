import React, { useContext, useState, useEffect } from 'react'
import styles from '@/styles/components/bodyService/bodyService.module.css'
import { bookingContext } from '@/store/bookingContext'
import MySessionInvoice from './MySessionInvoice'
import MySessionDiscount from './MySessionDiscount'
import { discountPercentContext } from '@/store/discountPercentContext'
import { payableAmountContext } from '@/store/payableAmountContext'
import StudentDiscount from './StudentDiscount'
import { consultationContext } from '@/store/consultationContext'

const MySession = () => {
  const [booking] = useContext(bookingContext)
  const [discount, setDiscount] = useState(0)
  const [discountPercent, setDiscountPercent] = useContext(
    discountPercentContext
  )
  const [discountAmount, setDiscountAmount] = useState(null)
  const [payable, setPayable] = useContext(payableAmountContext)
  const [consultation, setConsultation] = useContext(consultationContext)

  console.log(consultation, 'consultation')

  let totalPrice = booking.reduce((acc, service) => {
    // Convert the price string to a number using parseFloat
    const price = parseFloat(service.time * 8)
    return acc + price
  }, 0)
  let totalTime = booking.reduce((acc, service) => {
    // Convert the price string to a number using parseFloat
    const time = parseFloat(service.time)
    return acc + time
  }, 0)

  const getDiscount = (totalPrice, totalTime) => {
    // let discountPercent = 0;
    // if (totalPrice >= 150 && totalPrice < 300) {
    //   discountPercent = 10;
    // } else if (totalPrice >= 300 && totalPrice < 450) {
    //   discountPercent = 30;
    // } else if (totalPrice >= 450) {
    //   discountPercent = 50;
    // }
    // const percentage = (part / whole) * 100;
    // setDiscountPercent(discountPercent);
    // const discountAmount = (totalPrice / 100) * discountPercent;
    let discountAmount = booking.length ? 36.3 * Math.sqrt(totalTime) - 41 : 0
    console.log(discountAmount, 'discount amount')
    setDiscountAmount(discountAmount)
    let Discount = totalPrice - discountAmount
    const roudedDiscountAmount = Math.ceil(Discount)
    const percentage = Math.round((roudedDiscountAmount / totalPrice) * 100)

    setDiscount(() => roudedDiscountAmount)
    setDiscountPercent(percentage)
  }

  useEffect(() => {
    getDiscount(totalPrice, totalTime)
  }, [totalPrice, totalTime])

  const totalAmount = totalPrice - discount
  const roundedTotalAmount = Math.floor(totalAmount)
  setPayable(roundedTotalAmount)

  return (
    <>
      <div className={styles.bodyServiceContentRightHeading}>
        <h3>My Session</h3>
        <p>
          Click on buttons to know more details about servises, Lorem ipsum
          dolor sit amet.
        </p>
      </div>

      <div className={styles.bodyServiceContentRightTable}>
        {consultation && (
          <div className={styles.bodyServiceContentRightTableRow}>
            <div className={styles.bodyServiceContentRightTableService}>
              <div className={styles.bodyServiceContentRightTableDescription}>
                <p>Consultation Time</p>
              </div>
            </div>
            <div className={styles.bodyServiceContentRightTableServiceDetail}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                  alignItems: 'center',
                }}
              >
                <p
                  style={{
                    color: '#000',
                    fontFamily: 'Gilroy',
                    fontSize: '16px',
                  }}
                >
                  30min
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Recipt */}
        {booking?.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className={styles.bodyServiceContentRightTableRow}
              >
                <div className={styles.bodyServiceContentRightTableService}>
                  <div
                    className={styles.bodyServiceContentRightTableDescription}
                  >
                    <p>{item.name}</p>
                  </div>
                </div>
                <div
                  className={styles.bodyServiceContentRightTableServiceDetail}
                >
                  <div
                    className={styles.bodyServiceContentRightTableDescription}
                  >
                    <p>{`${item.time}${' min'}`}</p>
                  </div>
                  <p
                    className={
                      styles.bodyServiceContentRightTableDescriptionLine
                    }
                  >
                    |
                  </p>
                  <div
                    className={styles.bodyServiceContentRightTableDescription}
                  >
                    <p>${item.price}</p>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
      <div className={styles.bodyServiceContentRightcalc}>
        <MySessionInvoice heading={'Subtotal'} amount={totalPrice} />
        <MySessionDiscount
          heading={'Discount'}
          discount={isNaN(discountPercent) ? 0 : discountPercent}
          amount={discount}
        />
        {
          <StudentDiscount
            heading={'Student Discount'}
            discount={isNaN(discountPercent) ? "0%" : `${discountPercent}%`}
            amount={discount}
          />
        }
        {
          <StudentDiscount
            heading={'Promo Discount'}
            discount={isNaN(discountPercent) ? '0%' : `${discountPercent}%`}
            amount={discount}
          />
        }

        <MySessionInvoice heading={'Total'} amount={roundedTotalAmount} />
      </div>
    </>
  )
}

export default MySession
