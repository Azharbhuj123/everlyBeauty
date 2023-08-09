import React, { useContext, useState, useEffect } from "react";
import styles from "@/styles/components/bodyService/bodyService.module.css";
import { bookingContext } from "@/store/bookingContext";
import MySessionInvoice from "./MySessionInvoice";
import MySessionDiscount from "./MySessionDiscount";
import { discountPercentContext } from "@/store/discountPercentContext";
import { payableAmountContext } from "@/store/payableAmountContext";

const MySession = () => {
  const [booking] = useContext(bookingContext);
  const [discount, setDiscount] = useState(0);
  const [discountPercent, setDiscountPercent] = useContext(
    discountPercentContext
  );
  const [discountAmount, setDiscountAmount] = useState(null);
  const [payable, setPayable] = useContext(payableAmountContext);
  console.log(payable, "pppp");

  let totalPrice = booking.reduce((acc, service) => {
    // Convert the price string to a number using parseFloat
    const price = parseFloat(service.time * 8);
    return acc + price;
  }, 0);
  let totalTime = booking.reduce((acc, service) => {
    // Convert the price string to a number using parseFloat
    const time = parseFloat(service.time);
    return acc + time;
  }, 0);

  const getDiscount = (totalPrice) => {
    var discountAmount = booking.length ? 36.3 * Math.sqrt(totalTime) - 41 : 0;
    setDiscountAmount(discountAmount);
    let Discount = totalPrice - discountAmount;

    console.log(Discount, "discount check");
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

    const roudedDiscountAmount = Math.ceil(Discount);
    const percentage = Math.ceil((roudedDiscountAmount / totalAmount) * 100);

    setDiscount(() => roudedDiscountAmount);
    setDiscountPercent(() => percentage);
  };

  useEffect(() => {
    getDiscount(totalPrice);
  }, [totalPrice, totalTime]);

  const totalAmount = totalPrice - discount;
  const roundedTotalAmount = Math.floor(totalAmount);
  setPayable(roundedTotalAmount);

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
                      <p>{`${item.time}${" min"}`}</p>
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
            );
          })}
        </div>
        <div className={styles.bodyServiceContentRightcalc}>
          {console.log(discountPercent, "pppppppppp")}
          <MySessionInvoice heading={"Subtotal"} amount={totalPrice} />
          <MySessionDiscount
            heading={"Discount"}
            discount={
              typeof discountPercent == "undefined" ? 0 : discountPercent
            }
            amount={discount}
          />
          <MySessionInvoice heading={"Total"} amount={roundedTotalAmount} />
        </div>
      </div>
    </>
  );
};

export default MySession;
