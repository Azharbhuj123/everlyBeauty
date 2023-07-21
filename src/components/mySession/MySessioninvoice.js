import React from "react";
import styles from "@/styles/components/bodyService/bodyService.module.css";

const MySessioninvoice = ({ heading, amount }) => {
  return (
    <>
      <div className={styles.bodyServiceContentRightcalcRow}>
        <div className={styles.bodyServiceContentRightcalcDetail}>
          <div className={styles.bodyServiceContentRightcalcDetailService}>
            <p>{heading}</p>
          </div>
        </div>
        <div className={styles.bodyServiceContentRightcalcPrices}>
          <div className={styles.bodyServiceContentRightcalcDetailService}>
            <p></p>
          </div>
          <div className={styles.bodyServiceContentRightcalcDetailService}>
            <p>${amount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySessioninvoice;
