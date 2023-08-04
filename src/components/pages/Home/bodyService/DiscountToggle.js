import React, { useEffect, useState } from "react";
import styles from "@/styles/components/bodyService/discountToggle.module.css";
import Switch from "react-switch";
import arrow from "/public/assets/images/arrow-up-right-white.svg";
import PromoCard from "./PromoCard";
import { useRouter } from "next/router";
import StyledButton from "@/src/components/buttons/StyledButton";
import Auth from "@/src/components/auth/auth";
import StudentForm from "./StudentForm";

const DiscountToggle = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPromoCardModalOpen, setIsPromoCardModalOpen] = useState(false);
  const [isStudentCardModalOpen, setIsStudentCardModalOpen] = useState(false);
  const [mode, setMode] = useState("login");
  const [isToken, isSetToken] = useState(null);

  useEffect(() => {
    const authToken = localStorage.getItem("Token");
    isSetToken(authToken);
  }, []);
  console.log(isToken, "auth token checking");

  const handleSwitchChange = (checked) => {
    setIsChecked(checked);
    if (checked) {
      setIsPromoCardModalOpen(true);
    }
  };
  const handleChecked = () => {
    setIsChecked(true);
  };

  const handleSwitchChangeTwo = (checkedTwo) => {
    setIsCheckedTwo(checkedTwo);
    if (checkedTwo) {
      setIsStudentCardModalOpen(true);
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    // setMode('login')
  };

  const handlePromoCardModalClose = () => {
    setIsPromoCardModalOpen(false);
    setIsStudentCardModalOpen(false);
  };

  return (
    <>
      <div className={styles.discountToggleContainer}>
        <div className={styles.discountToggleWrapper}>
          <div className={styles.discountToggles}>
            <div className={styles.discountToggleLeft}>
              <Switch
                onChange={handleSwitchChange}
                checked={isChecked}
                onColor="#E1AD9D"
                offColor="#ccc"
                checkedIcon={false}
                uncheckedIcon={false}
                height={24}
                width={48}
                handleDiameter={24}
              />
              <span className={styles.discountToggleLeftText}>
                10% Promo Code Discount
              </span>
            </div>
            <p className={styles.discountTogglesCenterLine}>|</p>
            <div className={styles.discountToggleLeft}>
              <Switch
                onChange={handleSwitchChangeTwo}
                checked={isCheckedTwo}
                onColor="#E1AD9D"
                offColor="#ccc"
                checkedIcon={false}
                uncheckedIcon={false}
                height={24}
                width={48}
                handleDiameter={24}
              />
              <span className={styles.discountToggleLeftText}>
                10% Student Discount
              </span>
            </div>
          </div>
          <div className={styles.bookNow}>
            <StyledButton
              color="#fff"
              backgroundColor="#E1AD9D"
              text="Book Now"
              image={arrow}
              onClick={() => {
                isToken !== null ? router.push("/book-now") : handleModalOpen();
              }}
            />
          </div>

          {isModalOpen && (
            <div className={styles.modalOverlay}>
              <div className={styles.modalContent}>
                <Auth
                  mode={mode}
                  setMode={setMode}
                  headingText={
                    mode == "login"
                      ? "Log in"
                      : mode == "signup"
                      ? "Sign Up"
                      : mode == "forgot-password"
                      ? "Forgot Password"
                      : "Reset-Password"
                  }
                  buttonText={
                    mode == "login"
                      ? "Log in"
                      : mode == "signup"
                      ? "Sign Up"
                      : mode == "forgot-password"
                      ? "Forgot Password"
                      : "Reset-Password"
                  }
                  onClick={handleModalClose}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {isPromoCardModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <PromoCard
              onClose={handlePromoCardModalClose}
              handleChecked={handleChecked}
            />
          </div>
        </div>
      )}
      {isStudentCardModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <StudentForm onClose={handlePromoCardModalClose} />
          </div>
        </div>
      )}
    </>
  );
};

export default DiscountToggle;
