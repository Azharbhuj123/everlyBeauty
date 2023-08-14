import React, { useState, useEffect, useContext } from "react";
import styles from "@/styles/components/bodyService/PromoCard.module.css";
import Image from "next/image";
import close from "/public/assets/images/circle-xmark.png";
import Button from "@/src/components/buttons/Button";
import { createAPIEndPoint } from "@/src/config/api";
import { endPoints } from "@/src/config/endpoints";
import { promoCodeDiscountContext } from "@/store/promoDiscountContext";

const PromoCard = ({ onClose, handleChecked }) => {
  const [promoCode, setPromoCode] = useState("");
  const handlePromoCardClose = () => {
    onClose();
  };
  useEffect(() => {
    getDiscount();
  }, []);

  const getDiscount = async () => {
    try {
      const { data } = await createAPIEndPoint(
        endPoints.discounts,
        true
      ).fetchAllWithToken();
      console.log(data, "discount");
      const unUsedCodes = data.data.filter((item) => !item.attributes.isUsed);
      console.log(unUsedCodes, "unUsed");
      const discountVerified = unUsedCodes.find(
        (obj) => obj.attributes.promoCode === promoCode
      );
      if (discountVerified) {
        let data = {
          isUsed: true,
          isReferred: true,
          ...discountVerified.attributes,
        };
        console.log(data, "data");
        // createAPIEndPoint(endPoints.discounts).update(data);
      }
    } catch (error) {
      console.log(error, "error in discounts");
    }
  };

  return (
    <>
      <div className={styles.promoForm}>
        <div className={styles.promoFormContent}>
          <div className={styles.promoFormContentHeading}>
            <h1>Promo Code</h1>
            <Image
              style={{ cursor: "pointer" }}
              src={close}
              alt=""
              width={25}
              height={25}
              onClick={handlePromoCardClose}
            />
          </div>
          <div className={styles.promoFormContentInput}>
            <input
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter Promo Code"
              type="text"
            />
          </div>
          <div className={styles.promoFormContentButton}>
            <Button
              text="Submit"
              onClick={() => {
                action();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoCard;
