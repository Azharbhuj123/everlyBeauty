import React from "react";
import styles from "@/styles/components/bodyService/bodyService.module.css";

const MySessionDiscount = ({ heading, amount, discount }) => {
  return (
    <>
      <div className={styles.bodyServiceContentRightcalcRow}>
        <div className={styles.bodyServiceContentRightcalcDetail}>
          <div className={styles.bodyServiceContentRightcalcDetailService}>
            <p>{heading}</p>
          </div>
        </div>
        <div className={styles.bodyServiceContentRightcalcPrices}>
          <div className={styles.bodyServiceContentRightcalcDetailServicePrice}>
            <p>{`${typeof discount == "undefined" ? 0 : discount}%`}</p>
          </div>
          <div className={styles.bodyServiceContentRightcalcDetailServicePrice}>
            <p>${amount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySessionDiscount;
