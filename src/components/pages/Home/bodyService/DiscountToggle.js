import React, { useEffect, useState, useContext } from "react";
import styles from "@/styles/components/bodyService/discountToggle.module.css";
import Switch from "react-switch";
import arrow from "/public/assets/images/arrow-up-right-white.svg";
import PromoCard from "./PromoCard";
import { useRouter } from "next/router";
import StyledButton from "@/src/components/buttons/StyledButton";
import Auth from "@/src/components/auth/auth";
import StudentForm from "./StudentForm";
import { userContext } from "@/store/userContext";
import { promoCodeDiscountContext } from "@/store/promoDiscountContext";
import { StudentDiscountContext } from "@/store/studentDiscountContext";
import { createAPIEndPoint } from "@/src/config/api";
import { endPoints } from "@/src/config/endpoints";
const DiscountToggle = () => {
  const router = useRouter();
  const [user, setUser] = useContext(userContext);
  console.log(user, "user check");
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPromoCardModalOpen, setIsPromoCardModalOpen] = useState(false);
  const [isStudentCardModalOpen, setIsStudentCardModalOpen] = useState(false);
  const [mode, setMode] = useState("login");
  const [isToken, isSetToken] = useState(null);
  const [promoCode, setpromoCode] = useContext(promoCodeDiscountContext);
  const [studentDiscount, setStudentDiscount] = useContext(
    StudentDiscountContext
  );

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

  const handleSwitchChangeTwo = async () => {
    // setIsCheckedTwo(checkedTwo);
    if (user.studentCodeUsed < 2) {
      let data = {
        ...user,
        studentCodeUsed: Number(user.studentCodeUsed) + 1,
      };
      console.log(data, "dddd");
      try {
        await createAPIEndPoint(endPoints.updateMyData).update(user.id, {
          data: data,
        });
        // await console.log(response);
        setIsCheckedTwo(true);
        setpromoCode(false);
        setStudentDiscount(true);
      } catch (error) {
        console.log(error);
        setStudentDiscount(false);
      }

      // setIsStudentCardModalOpen(true);
    } else {
      alert("you already availed student discount");
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
              cursor="pointer"
              color="#fff"
              backgroundColor="#E1AD9D"
              text="Book Now"
              fontWeight="600"
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
