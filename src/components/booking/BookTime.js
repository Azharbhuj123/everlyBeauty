import React from "react";
import StyledButton from "../buttons/StyledButton";
import arrow from "/public/assets/images/arrow-up-right-white.svg";
import styles from "@/styles/components/booking/bookTime.module.css";
import MySession from "../mySession/MySession";
import Button from "../buttons/Button";
import MyCalender from "../MyCalender";
const BookTime = () => {
  return (
    <>
      <div className={styles.bookTimeContainer}>
        <div className={styles.bookTimeWrapper}>
          <div className={styles.bookTimeButton}>
            <StyledButton
              color="#fff"
              backgroundColor="#E1AD9D"
              text="Dashboard"
              image={arrow}
            />
          </div>
          <div className={styles.bookTimeSection}>
            <div className={styles.bookTimeSectionLeft}>
              <MySession />
            </div>
            <div className={styles.bookTimeSectionRight}>
              <div className={styles.bookTimeSectionRightContent}>
                <h1>Book a Time</h1>
              </div>
              {/* Calendar */}
              <MyCalender />
            </div>
          </div>

          <div className={styles.bookTimeButtons}>
            <div className={styles.bookTimeButtonLeft}>
              <Button
                color="#000"
                backgroundColor="#D9D9D6"
                text="Edit Session"
              />
            </div>
            <div className={styles.bookTimeButtonRight}>
              <StyledButton
                color="#fff"
                backgroundColor="#E1AD9D"
                text="Confirm"
                image={arrow}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTime;
