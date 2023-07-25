import React, { useContext, useEffect, useState } from "react";
import styles from "@/styles/components/bodyService/bodyService.module.css";
import { ServiceReciptData, TotalReciptData } from "@/pages/api/utils";
import { bookingContext } from "@/store/bookingContext";
import MySessioninvoice from "./MySessioninvoice";

const MySession = () => {
  const [discount, setDiscount] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [booking] = useContext(bookingContext);

  let totalPrice = booking.reduce((acc, service) => {
    // Convert the price string to a number using parseInt or parseFloat
    const price = parseFloat(service.price);
    return acc + price;
  }, 0);

  const getDiscount = (totalPrice) => {
    if (totalPrice >= 150 && totalPrice < 300) {
      const discountPercent = (totalPrice / 100) * 10;
      setDiscount(discountPercent);
      setDiscountPercent(10);
    } else if (totalPrice >= 300 && totalPrice < 450) {
      const discountPercent = (totalPrice / 100) * 30;
      setDiscount(discountPercent);
      setDiscountPercent(30);
    } else if (totalPrice >= 450) {
      const discountPercent = (totalPrice / 100) * 50;
      setDiscount(discountPercent);
      setDiscount(50);
    }
  };

  useEffect(() => {
    getDiscount(totalPrice);
  }, []);

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
      <div className={styles.bodyServiceContentRightTable}>
        {booking?.map((item, index) => {
          return (
            <>
              <div className={styles.bodyServiceContentRightTableRow}>
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
                    <p>{item.time}</p>
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
                    <p>{item.price}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className={styles.bodyServiceContentRightcalc}>
        <MySessioninvoice heading={"Subtotal"} amount={totalPrice} />
        <MySessioninvoice heading={"Total"} amount={totalPrice} />
      </div>
    </>
  );
};

export default MySession;
