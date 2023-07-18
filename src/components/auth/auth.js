import React, { useState } from 'react'
import styles from '@/styles/auth/auth.module.css'
import Image from 'next/image'
import close from '../../../src/assets/images/circle-xmark.png'
import facebook from '../../../src/assets/images/facbook.png'
import google from '../../../src/assets/images/google.png'
import Button from '../buttons/Button'
import { useRouter } from 'next/router'
import Link from 'next/link'
import OTPInput from 'react-otp-input'

const Auth = ({ headingText, buttonText, isLoggedIn }) => {
  const [OTP, setOTP] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()
  const { pathname } = router
  const shouldRenderInput = pathname === '/signup'
  const isForgotPassword = pathname === '/forgot-password'
  console.log(shouldRenderInput, 'route')
  console.log(isLoggedIn, 'log check')

  return (
    <>
      <div className={styles.authForm}>
        <div className={styles.authFormHeading}>
          <h2>{headingText}</h2>
          <Image src={close} alt='' width={25} height={25} />
        </div>
        <div className={styles.authFormInputs}>
          {!isForgotPassword && !(pathname === '/reset-password') && (
            <>
              <input placeholder='Email' type='email' />
              <input placeholder='Username' type='text' />
            </>
          )}
          {shouldRenderInput && (
            <input placeholder='Password' type='password' />
          )}
          {isForgotPassword && (
            <input placeholder='Enter Registered Email' type='email' />
          )}
        </div>

        {pathname === '/reset-password' && (
          <>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <OTPInput
                value={OTP}
                onChange={(otpValue) => setOTP(otpValue)}
                numInputs={6}
                isInputNum
                renderSeparator={<span style={{ width: '10px' }}></span>}
                renderInput={(props) => <input {...props} />}
                shouldAutoFocus={true}
                inputStyle={{
                  border: '1px solid transparent',
                  borderRadius: '8px',
                  width: '45px',
                  height: '45px',
                  fontSize: '16px',
                  color: '#000',
                  fontWeight: '400',
                  caretColor: 'blue',
                  fontFamily: 'Gilroy',
                }}
                focusStyle={{
                  border: '1px solid #CFD3DB',
                  outline: 'none',
                }}
              />
            </div>
            <div className={styles.authFormInputs}>
              <input
                placeholder='New Password'
                type='password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                placeholder='Confirm New Password'
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </>
        )}
        {!shouldRenderInput &&
          !isForgotPassword &&
          !(pathname === '/reset-password') && (
            <div className={styles.authFormForgot}>
              <p>Forgot Password?</p>
            </div>
          )}
        <Button>{buttonText}</Button>
        <div className={styles.authFormText}>
          <p>Or You Can Join With</p>
        </div>
        <div className={styles.authFormIcons}>
          <Image src={facebook} alt='' width={30} height={30} />
          <Image src={google} alt='' width={30} height={30} />
        </div>
        {!isForgotPassword && !(pathname === '/reset-password') && (
          <>
            <div className={styles.authFormSignupText}>
              <p>
                {isLoggedIn
                  ? "Don't Have an Account? "
                  : 'Already have an Account '}
                <Link href={isLoggedIn ? '/signup' : '/login'}>
                  <span>{isLoggedIn ? 'Sign Up' : 'Log In'}</span>
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Auth
