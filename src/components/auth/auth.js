import React, { useEffect, useState } from 'react'
import styles from '@/styles/auth.module.css'
import Image from 'next/image'
import close from '/public/assets/images/circle-xmark.png'
import Button from '../buttons/Button'
import { useRouter } from 'next/router'
import OTPInput from 'react-otp-input'
import { createAPIEndPoint } from '@/src/config/api'
import { endPoints } from '@/src/config/endpoints'
import toast from 'react-hot-toast'
import hide from '/public/assets/images/hide.png'
import eye from '/public/assets/images/eye.png'

const Auth = ({ headingText, buttonText, onClick, mode, setMode }) => {
  const router = useRouter()
  const [OTP, setOTP] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  //Show Password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const shouldRenderInput = mode == 'signup'

  // register function
  const RegisterUser = async () => {
    const data = {
      username,
      email,
      password,
      firstName,
      lastName,
    }

    try {
      const response = await createAPIEndPoint(endPoints.regiter).create(data)
      const { jwt, user } = response.data
      setUserName('')
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
      // localStorage.setItem('Token', jwt)
      // localStorage.setItem('User', JSON.stringify(user))
      console.log(response)
      // Toast notification for successfully signup
      toast.success('You have successfully signup!')
      setMode('login')
    } catch (error) {
      console.log(error, 'signup')
      toast.error(error?.response?.data?.error?.message)
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
      handleModalClose()
      // Toast notification for successful login
      toast.success('Login Successfully')
      router.push('/book-now')
    } catch (error) {
      const errorMessage = error.response
        ? error?.response?.data?.error?.message
        : 'An error occurred. Please try again.'
      // Toast notification for login error
      console.log(error, 'api error messsage')
      toast.error(errorMessage)
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
    onClick()
    // setMode("login");
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
          {console.log(mode, 'mode check')}
        </div>

        {/* inputForm */}
        <div className={styles.authFormInputs}>
          {shouldRenderInput && (
            <>
              <input
                placeholder='First Name'
                type='text'
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                placeholder='Last Name'
                type='text'
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                placeholder='Username'
                onChange={(e) => setUserName(e.target.value)}
                type='text'
              />
            </>
          )}
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
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <input
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                />
                <div
                  type='button'
                  onClick={togglePasswordVisibility}
                  style={{
                    border: 'none',
                    color: 'transparent',
                    width: '20px',
                    position: 'absolute',
                    right: '25px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {showPassword ? (
                    <Image src={hide} alt='' width={20} height={20} />
                  ) : (
                    <Image src={eye} alt='' width={20} height={20} />
                  )}
                </div>
              </div>
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
                  // border: '1px solid transparent',
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
                  border: 'none',
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
                type={showPassword ? 'text' : 'password'}
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
