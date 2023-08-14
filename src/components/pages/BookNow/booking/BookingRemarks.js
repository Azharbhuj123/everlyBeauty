import React, { useContext, useEffect, useState } from "react";
import styles from "@/styles/components/booking/bookingRemarks.module.css";
import Image from "next/image";
import moment from "moment";
import spa from "/public/assets/images/spa.svg";
import { slotTimeContext } from "@/store/slotTimeContext";
const BookingRemarks = () => {
  const [slotTime, setSlotTime] = useContext(slotTimeContext);
  const [fomattedSlot, setFormattedSlot] = useState();
  let formattedSlot = moment(slotTime, "YY-MM-DDTHH:mm:ss").format(
    "dddd, MMM Do, YYYY, h:mm A"
  );
  return (
    <>
      <div className={styles.bookingRemarksSection}>
        <div className={styles.bookingRemarkContent}>
          <div className={styles.bookingRemarkContentImage}>
            <Image src={spa} width={400} height={250} alt="" loading="lazy"/>
          </div>
          <div className={styles.bookingRemarkContentThank}>
            <h1>Thank You For Your Trust.</h1>
            <p>
              We will do our best to make you leave satisfied with our service.
            </p>
          </div>
          <div className={styles.bookingRemarkContentRegards}>
            <p>See You On you slot date and time</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingRemarks;
