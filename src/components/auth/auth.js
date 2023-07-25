import React, { useState } from 'react'
import styles from '@/styles/components/auth/auth.module.css'
import Image from 'next/image'
import close from '/public/assets/images/circle-xmark.png'
import facebook from '/public/assets/images/facbook.png'
import google from '/public/assets/images/google.png'
import Button from '../buttons/Button'
import { useRouter } from 'next/router'
import Link from 'next/link'
import OTPInput from 'react-otp-input'
import { createAPIEndPoint } from '@/src/config/api'
import { endPoints } from '@/src/config/endpoints'

const Auth = ({
  headingText,
  buttonText,
  isLoggedIn,
  onClose,
  mode,
  setMode,
}) => {
  const router = useRouter()
  const [OTP, setOTP] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const shouldRenderInput = mode == 'signup'
  const isForgotPassword = mode == 'forgot-password'

  // const [isForgotPassword, setIsForgotPassword] = useState(false)

  // register function
  const RegisterUser = async () => {
    const data = {
      username,
      email,
      password,
    }

    try {
      const response = await createAPIEndPoint(endPoints.regiter).create(data)
      const { jwt, user } = response.data
      setUserName('')
      setEmail('')
      setPassword('')
      localStorage.setItem('Token', jwt)
      localStorage.setItem('User', JSON.stringify(user))
      console.log(response)
      // router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  // Login finction
  const Login = async () => {
    const data = { identifier: email, password }
    try {
      const response = await createAPIEndPoint(endPoints.login).create(data)
      console.log(response, 'response in Login')
      setEmail('')
      setPassword('')
      const { jwt, user } = response.data
      localStorage.setItem('Token', jwt)
      localStorage.setItem('User', JSON.stringify(user))
      // router.push('/')
    } catch (error) {
      console.log(error, 'error in login')
    }
  }

  const ForgotPassword = async () => {
    setMode('reset-password')
    try {
      const response = await createAPIEndPoint(endPoints.forgotPassword).create(
        {}
      )
    } catch (error) {
      console.log(error, 'error in login')
    }
  }

  const ResetPassword = async () => {
    try {
      const response = await createAPIEndPoint(endPoints.resetPassword).create(
        {}
      )
    } catch (error) {
      console.log(error, 'error in login')
    }
  }

  // ModalCose-Function
  const handleModalClose = () => {
    onClose()
    setMode('login')
    // setIsForgotPassword(false)
  }

  const handleModeToggle = () => {
    switch (mode) {
      case 'login':
        setMode('signup')
        break
      case 'signup':
        setMode('login')
        break
      case 'forgot-password':
        setMode('forgot-password')
        break
      case 'reset-password':
        setMode('reset-password')
        break
      default:
        setMode('login')
        break
    }
  }
  console.log('mode', mode)

  return (
    <>
      <div className={styles.authForm}>
        <div className={styles.authFormHeading}>
          <h2>{headingText}</h2>
          <Image
            src={close}
            alt=''
            width={25}
            height={25}
            onClick={handleModalClose}
          />
        </div>
        <div className={styles.authFormInputs}>
          {mode == 'forgot-password' && (
            <input
              placeholder='Enter Registered Email'
              onChange={(e) => setEmail(e.target.value)}
              type='email'
            />
          )}
          {mode !== 'reset-password' && mode !== 'forgot-password' && (
            <>
              <input
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                type='email'
              />

              {/* inputForm */}
              {shouldRenderInput && (
                <>
                  <div className={styles.authFormSignup} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <input placeholder='First Name' type='text' />
                    <input placeholder='Last Name' type='text' />
                  </div>
                  <input
                    placeholder='Username'
                    onChange={(e) => setUserName(e.target.value)}
                    type='text'
                  />
                </>
              )}
              <input
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                type='password'
              />
            </>
          )}
        </div>

        {mode == 'reset-password' && (
          <>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <OTPInput
                value={OTP}
                onChange={(otpValue) => setOTP(otpValue)}
                numInputs={4}
                isInputNum
                renderSeparator={<span style={{ width: '15px' }}></span>}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

        {mode == 'login' && (
          <div
            className={styles.authFormForgot}
            onClick={() => setMode('forgot-password')}
          >
            <p>Forgot Password?</p>
          </div>
        )}
        <div style={{ margin: '20px 0' }}>
          {mode === 'login' && (
            <Button text={buttonText} action={Login}></Button>
          )}
          {mode == 'signup' && (
            <Button text={buttonText} action={RegisterUser}></Button>
          )}
          {mode == 'forgot-password' && (
            <Button text={buttonText} action={ForgotPassword}></Button>
          )}
          {mode == 'reset-password' && (
            <Button text={buttonText} action={ResetPassword}></Button>
          )}
        </div>

        {/* <div className={styles.authFormText}>
          <p>Or You Can Join With</p>
        </div>
        <div className={styles.authFormIcons}>
          <Link
            href={
              'https://api.everlybeauty.ca/api/' + endPoints.loginWithFaceBook
            }
          >
            <Image src={facebook} alt='' width={30} height={30} />
          </Link>

          <Link
            href={
              'https://api.everlybeauty.ca/api/' + endPoints.loginWithGoogle
            }
          >
            <Image src={google} alt='' width={30} height={30} />
          </Link>
        </div> */}
        {mode !== 'forgot-password' && mode !== 'reset-password' && (
          <>
            <div className={styles.authFormSignupText}>
              <p>
                {mode == 'signup'
                  ? 'Already have an Account '
                  : "Don't Have an Account? "}
                <span onClick={handleModeToggle}>
                  {mode == 'signup' ? 'Log In' : 'Sign Up'}
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Auth
