import React, { useState, useEffect, useContext } from "react";
import styles from "@/styles/components/bodyService/PromoCard.module.css";
import Image from "next/image";
import close from "/public/assets/images/circle-xmark.png";
import Button from "@/src/components/buttons/Button";
import { createAPIEndPoint } from "@/src/config/api";
import { endPoints } from "@/src/config/endpoints";
import { promoCodeDiscountContext } from "@/store/promoDiscountContext";
import { StudentDiscountContext } from "@/store/studentDiscountContext";
import { Close } from "@mui/icons-material";
import toast from "react-hot-toast";

const PromoCard = ({ onClose, handleChecked }) => {
  const [promoCodeText, setPromoCodeText] = useState("");
  const [promoCode, setpromoCode] = useContext(promoCodeDiscountContext);
  const [StudentDiscount, setStudentDiscount] = useContext(
    StudentDiscountContext
  );
  const handlePromoCardClose = () => {
    onClose();
  };
  // useEffect(() => {
  //   getDiscount();
  // }, []);

  const getDiscount = async () => {
    try {
      const { data } = await createAPIEndPoint(
        endPoints.discounts,
        true
      ).fetchAllWithToken();

      const unUsedCodes = data.data.filter((item) => !item.attributes.isUsed);
      console.log(unUsedCodes, "unUsed");
      const discountVerified = unUsedCodes.find(
        (obj) => obj.attributes.promoCode === promoCodeText
      );

      if (discountVerified) {
        let data = {
          isUsed: true,
          isReferred: true,
          ...discountVerified.attributes,
        };
        console.log(data, "data");
        await createAPIEndPoint(endPoints.discounts).delete(
          discountVerified?.id
        );
        setpromoCode(true);
        setStudentDiscount(false);
        onClose();
      }
    } catch (error) {
      console.log(error, "error in discounts");
      onClose();
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
              value={promoCodeText}
              onChange={(e) => {
                setPromoCodeText(e.target.value);
              }}
              placeholder="Enter Promo Code"
              type="text"
            />
          </div>
          <div className={styles.promoFormContentButton}>
            <Button
              text="Submit"
              action={() => {
                promoCodeText.length > 6
                  ? getDiscount()
                  : toast.error("Enter a valid promo code");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoCard;
