import React, { useState } from "react";
import styles from "@/styles/components/auth/auth.module.css";
import Image from "next/image";
import close from "/public/assets/images/circle-xmark.png";
import facebook from "/public/assets/images/facbook.png";
import google from "/public/assets/images/google.png";
import Button from "../buttons/Button";
import { useRouter } from "next/router";
import Link from "next/link";
import OTPInput from "react-otp-input";
import { createAPIEndPoint } from "@/src/config/api";
import { endPoints } from "@/src/config/endpoints";

const Auth = ({ headingText, buttonText, isLoggedIn }) => {
  const [OTP, setOTP] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const { pathname } = router;
  const shouldRenderInput = pathname === "/signup";
  const isForgotPassword = pathname === "/forgot-password";

  console.log(pathname, "ppppp");

  // register function
  const RegisterUser = async () => {
    const data = {
      username,
      email,
      password,
    };
    try {
      const response = await createAPIEndPoint(endPoints.regiter).create(data);
      setUserName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  // Login finction
  const Login = async () => {
    const data = { identifier: email, password };
    try {
      const response = await createAPIEndPoint(endPoints.login).create(data);
      console.log(response, "response");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error, "error in login");
    }
  };

  const ForgotPassword = async () => {
    try {
      const response = await createAPIEndPoint(endPoints.forgotPassword).create(
        {}
      );
    } catch (error) {
      console.log(error, "error in login");
    }
  };

  const ResetPassword = async () => {
    try {
      const response = await createAPIEndPoint(endPoints.resetPassword).create(
        {}
      );
    } catch (error) {
      console.log(error, "error in login");
    }
  };

  return (
    <>
      <div className={styles.authForm}>
        <div className={styles.authFormHeading}>
          <h2>{headingText}</h2>
          <Image src={close} alt="" width={25} height={25} />
        </div>
        <div className={styles.authFormInputs}>
          {!isForgotPassword && !(pathname === "/reset-password") && (
            <>
              <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              {shouldRenderInput && (
                <input
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                />
              )}
              <input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </>
          )}

          {isForgotPassword && (
            <input
              placeholder="Enter Registered Email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          )}
        </div>

        {pathname === "/reset-password" && (
          <>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <OTPInput
                value={OTP}
                onChange={(otpValue) => setOTP(otpValue)}
                numInputs={4}
                isInputNum
                renderSeparator={<span style={{ width: "15px" }}></span>}
                renderInput={(props) => <input {...props} />}
                shouldAutoFocus={true}
                inputStyle={{
                  border: "1px solid transparent",
                  borderRadius: "8px",
                  width: "45px",
                  height: "45px",
                  fontSize: "16px",
                  color: "#000",
                  fontWeight: "400",
                  caretColor: "blue",
                  fontFamily: "Gilroy",
                }}
                focusStyle={{
                  border: "1px solid #CFD3DB",
                  outline: "none",
                }}
              />
            </div>
            <div className={styles.authFormInputs}>
              <input
                placeholder="New Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                placeholder="Confirm New Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </>
        )}
        {!shouldRenderInput &&
          !isForgotPassword &&
          !(pathname === "/reset-password") && (
            <div className={styles.authFormForgot}>
              <p>Forgot Password?</p>
            </div>
          )}
          <div style={{margin: '20px 0'}}>
        <Button
          text={buttonText}
          action={
            pathname == "/signup"
              ? RegisterUser
              : pathname == "/login"
              ? Login
              : pathname == "/forgot-password"
              ? ForgotPassword
              : ResetPassword
          }
        ></Button>
        </div>
        <div className={styles.authFormText}>
          <p>Or You Can Join With</p>
        </div>
        <div className={styles.authFormIcons}>
          <Link
            href={
              "https://api.everlybeauty.ca/api/" + endPoints.loginWithFaceBook
            }
          >
            <Image src={facebook} alt="" width={30} height={30} />
          </Link>

          <Link
            href={
              "https://api.everlybeauty.ca/api/" + endPoints.loginWithGoogle
            }
          >
            <Image src={google} alt="" width={30} height={30} />
          </Link>
        </div>
        {!isForgotPassword && !(pathname === "/reset-password") && (
          <>
            <div className={styles.authFormSignupText}>
              <p>
                {isLoggedIn
                  ? "Don't Have an Account? "
                  : "Already have an Account "}
                <Link href={isLoggedIn ? "/signup" : "/login"}>
                  <span>{isLoggedIn ? "Sign Up" : "Log In"}</span>
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Auth;
