import React, { useContext, useEffect, useState } from 'react'
import styles from '@/styles/components/bodyService/bodyService.module.css'
import { ServiceReciptData, TotalReciptData } from '@/pages/api/utils'
import { bookingContext } from '@/store/bookingContext'
import MySessionInvoice from './MySessionInvoice'
// import { discountContext } from '@/store/discountContext'
// import { discountPercentContext } from '@/store/discountPercentContext'

const MySession = () => {
  const [discount, setDiscount] = useState(0)
  const [discountPercent, setDiscountPercent] = useState(0)
  // const [discount, setDiscount] = useContext(discountContext)
  // const [discountPercent, setDiscountPercent] = useContext(discountPercentContext)

  // console.log(discountContext, 'context check');
  const [booking] = useContext(bookingContext)

  let totalPrice = booking.reduce((acc, service) => {
    // Convert the price string to a number using parseFloat
    const price = parseFloat(service.price)
    return acc + price
  }, 0)

  const getDiscount = (totalPrice) => {
    let discountPercent = 0
    if (totalPrice >= 150 && totalPrice < 300) {
      discountPercent = 10
    } else if (totalPrice >= 300 && totalPrice < 450) {
      discountPercent = 30
    } else if (totalPrice >= 450) {
      discountPercent = 50
    }
    setDiscountPercent(discountPercent)
    // Calculate the discount amount using the discount percentage
    const discountAmount = (totalPrice / 100) * discountPercent
    setDiscount(discountAmount)
  }

  useEffect(() => {
    getDiscount(totalPrice)
  }, [totalPrice])

  // Calculate the total amount after applying the discount
  const totalAmount = totalPrice - discount

  return (
    <>
      <div className={styles.bodyServiceContentRightHeading}>
        <h3>My Session</h3>
        <p>
          Click on body parts to know more details about them, Lorem ipsum dolor
          sit amet.
        </p>
      </div>

      {/* Recipt */}
      <div>
        <div className={styles.bodyServiceContentRightTable}>
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
          <MySessionInvoice
            heading={'Discount'}
            discount={discountPercent}
            amount={discount}
          />
          <MySessionInvoice heading={'Subtotal'} amount={totalPrice} />
          <MySessionInvoice heading={'Total'} amount={totalAmount} />
        </div>
      </div>
    </>
  )
}

export default MySession
