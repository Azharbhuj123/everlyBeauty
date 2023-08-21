import React, { useEffect, useRef, useState, useContext } from "react";
import { ProgressBar } from "primereact/progressbar";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { promoCodeDiscountContext } from "@/store/promoDiscountContext";
import { StudentDiscountContext } from "@/store/studentDiscountContext";

const Progressbar = ({ discountPercent }) => {
  const [value, setValue] = useState(0);
  const toast = useRef(null);
  const interval = useRef(null);
  const [studentDiscount, setStudentDiscount] = useContext(
    StudentDiscountContext
  );
  const [promoCodeDiscount, setpromoCodeDiscount] = useContext(
    promoCodeDiscountContext
  );

  useEffect(() => {
    let progressValue =
      promoCodeDiscount && studentDiscount
        ? (discountPercent + 20) * 2
        : promoCodeDiscount
        ? (discountPercent + 10) * 2
        : studentDiscount
        ? (discountPercent + 10) * 2
        : discountPercent * 2;
    if (progressValue > 100) {
      progressValue = 100; // Ensure progressValue does not exceed 100%
    }
    setValue(progressValue);
  }, [discountPercent, studentDiscount, promoCodeDiscount]);
  console.log(value, "value");
  return (
    <>
      <Toast ref={toast}></Toast>
      <ProgressBar
        value={value}
        displayValueTemplate={() =>
          `${
            promoCodeDiscount && studentDiscount
              ? discountPercent + 20
              : promoCodeDiscount || studentDiscount
              ? discountPercent + 10
              : discountPercent
          }%`
        }
      ></ProgressBar>
    </>
  );
};

export default Progressbar;
