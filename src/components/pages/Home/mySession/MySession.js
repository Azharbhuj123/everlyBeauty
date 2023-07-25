import React, { useContext } from "react";
import styles from "@/styles/components/bodyService/bodyService.module.css";
import { ServiceReciptData, TotalReciptData } from "@/pages/api/utils";
import { bookingContext } from "@/store/bookingContext";
import MySessioninvoice from "./MySessioninvoice";

const MySession = () => {
  const [booking] = useContext(bookingContext);
  console.log(booking, "pppp");

  let totalPrice = booking.reduce((acc, service) => {
    // Convert the price string to a number using parseInt or parseFloat
    const price = parseFloat(service.price);
    return acc + price;
  }, 0);

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
        {booking.map((item, index) => {
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
                    <p>{`${item.time}${'min'}`}</p>
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
