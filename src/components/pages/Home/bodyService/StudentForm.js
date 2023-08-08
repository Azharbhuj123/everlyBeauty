import React, { useEffect } from "react";
import styles from "@/styles/components/bodyService/PromoCard.module.css";
import Image from "next/image";
import close from "/public/assets/images/circle-xmark.png";
import { useState } from "react";
import camera from "/public/assets/images/camera.png";
import Button from "@/src/components/buttons/Button";
import { createAPIEndPoint } from "@/src/config/api";
import { endPoints } from "@/src/config/endpoints";
const StudentForm = ({ onClose }) => {
  const [profileImage, setProfileImage] = useState(null);

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const handlePromoCardClose = () => {
    onClose();
  };
  const getUser = async () => {
    try {
      const userData = await createAPIEndPoint(
        endPoints.myData,
        true
      ).fetchAllWithToken();
      console.log(userData.data);
      return;
    } catch (error) {
      console.log(error, "error in user data");
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <div className={styles.promoForm}>
        <div className={styles.promoFormContent}>
          <div className={styles.promoFormContentHeading}>
            <h1>Student Details</h1>
            <Image
              style={{ cursor: "pointer" }}
              src={close}
              alt=""
              width={25}
              height={25}
              onClick={handlePromoCardClose}
            />
          </div>
          <div className={styles.studentFormInputs}>
            <div class={styles.studentFormProfile}>
              <h2>Student ID Card</h2>
              <label
                htmlFor="profileImageInput"
                className={styles.studentFormProfileImage}
              >
                {profileImage ? (
                  <Image
                    src={URL.createObjectURL(profileImage)}
                    width={400}
                    height={193}
                    alt=""
                  />
                ) : (
                  <Image src={camera} width={50} height={"auto"} alt="" />
                )}
                <input
                  type="file"
                  id="profileImageInput"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                  style={{ display: "none" }}
                />
              </label>
              <div className={styles.studentFormButton}>
                <Button text="Submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentForm;
