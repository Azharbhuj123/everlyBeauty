'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/components/header.module.css'
import Image from 'next/image'
import headerLogo from '/public/assets/images/logo.svg'
import arrow from '/public/assets/images/arrow-up-right.svg'
import StyledButton from '../buttons/StyledButton'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Auth from '../auth/auth'
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '../buttons/Button'
import logout from '/public/assets/images/logoutGray.svg'

const Header = ({ Token, key }) => {
  const router = useRouter()
  const [mode, setMode] = useState('login')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isToken, setIsToken] = useState(null)
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  useEffect(() => {
    const authToken = localStorage.getItem('Token')
    if (authToken) {
      setIsToken(authToken)
    }
  }, [Token, key])
  console.log(isToken, 'auth token check')

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    // setMode("login");
  }

  const handleLogout = () => {
    // Remove the token and user from localStorage
    localStorage.removeItem('Token')
    localStorage.removeItem('User')
    setIsToken(null)
    router.push('/')
  }

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.headerLogo}>
              <Link href='/'>
                <Image src={headerLogo} alt='' width={100} height={50} />
              </Link>
            </div>
            <div className={styles.headerNavbar}>
              <Link href='/'>
                <li
                  className={`${styles.headerNavbarLink} ${
                    router.pathname === '/' ? styles.active : ''
                  }`}
                >
                  Home
                </li>
              </Link>

              <Link href='/blog'>
                <div
                  className={`${styles.headerNavbarLink} ${
                    router.pathname === '/blog' ? styles.active : ''
                  }`}
                >
                  Blog
                </div>
              </Link>
              <Link href='/contact-us'>
                <div
                  className={`${styles.headerNavbarLink} ${
                    router.pathname === '/contact-us' ? styles.active : ''
                  }`}
                >
                  Contact Us
                </div>
              </Link>
              <Link href='/dashboard'>
                <div
                  className={`${styles.headerNavbarLink} ${
                    router.pathname === '/dashboard' ? styles.active : ''
                  }`}
                  style={{ display: isToken == null ? 'none' : 'block' }}
                >
                  Dashboard
                </div>
              </Link>
              {/* {isToken && (
                <div className={styles.headerNavbarLink} onClick={handleLogout}>
                  Logout
                  <Image src={logout} alt='' width={20} height={20} />
                </div>
              )}
            </div> */}
            </div>
            <div className={styles.headerButton}>
              <StyledButton
                backgroundColor='#fff'
                color='#000'
                text='Book Now'
                fontWeight= '600'
                image={arrow}
                cursor = 'pointer'
                onClick={() => {
                  isToken === null
                    ? handleModalOpen()
                    : router.push('/book-now')
                }}
              />
            </div>

            {/* Drawer */}
            <div className={styles.headerDrawer}>
              <IconButton onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>

              <Drawer anchor='left' open={open} onClose={toggleDrawer}>
                <List>
                  <ListItem button>
                    <ListItemText
                      primary={
                        <Image
                          src={headerLogo}
                          alt=''
                          width={200}
                          height={'auto'}
                        />
                      }
                    />
                  </ListItem>

                  <Link href='/' style={{ textDecoration: 'none' }}>
                    <ListItem button>
                      <ListItemText
                        className={`${styles.headerNavbarLink} ${
                          router.pathname === '/' ? styles.active : ''
                        }`}
                        primary='Home'
                      />
                    </ListItem>
                  </Link>

                  <Link href='/blog' style={{ textDecoration: 'none' }}>
                    <ListItem button>
                      <ListItemText
                        primary='Blog'
                        className={`${styles.headerNavbarLink} ${
                          router.pathname === '/blog' ? styles.active : ''
                        }`}
                      />
                    </ListItem>
                  </Link>

                  <Link href='/contact-us' style={{ textDecoration: 'none' }}>
                    <ListItem button>
                      <ListItemText
                        primary='Contact Us'
                        className={`${styles.headerNavbarLink} ${
                          router.pathname === '/contact-us' ? styles.active : ''
                        }`}
                      />
                    </ListItem>
                  </Link>

                  <Link href='/dashboard' style={{ textDecoration: 'none' }}>
                    <ListItem button>
                      <ListItemText
                        primary='Dashboard'
                        className={`${styles.headerNavbarLink} ${
                          router.pathname === '/dashboard' ? styles.active : ''
                        }`}
                        style={{ display: isToken == null ? 'none' : 'block' }}
                      />
                    </ListItem>
                  </Link>
                  <ListItem button>
                    <ListItemText
                      primary={
                        <div
                          className={styles.headerNavbarLink}
                          onClick={handleLogout}
                        >
                          Logout
                          <Image src={logout} alt='' width={20} height={20} />
                        </div>
                      }
                    />
                  </ListItem>
                  <ListItem button>
                    <ListItemText
                      primary={
                        <div style={{ width: '11em' }}>
                          <StyledButton
                            backgroundColor='#fff'
                            color='#000'
                            text='Book Now'
                            fontWeight= '600'
                            image={arrow}
                            cursor= 'pointer'
                            onClick={() => {
                              isToken === null
                                ? handleModalOpen()
                                : router.push('/book-now')
                            }}
                          />
                        </div>
                      }
                    />
                  </ListItem>
                </List>
              </Drawer>
            </div>
          </div>
          {isModalOpen && (
            <div className={styles.modalOverlay}>
              <div className={styles.modalContent}>
                <Auth
                  mode={mode}
                  setMode={setMode}
                  headingText={
                    mode == 'login'
                      ? 'Log in'
                      : mode == 'signup'
                      ? 'Sign Up'
                      : mode == 'forgot-password'
                      ? 'Forgot Password'
                      : 'Reset-Password'
                  }
                  buttonText={
                    mode == 'login'
                      ? 'Log in'
                      : mode == 'signup'
                      ? 'Sign Up'
                      : mode == 'forgot-password'
                      ? 'Forgot Password'
                      : 'Reset-Password'
                  }
                  onClick={handleModalClose}
                />
              </div>
            </div>
          )}
        </div>
        {/* {isToken && (
          <div className={styles.logoutButton} onClick={handleLogout}>
            <Button backgroundColor='#000' color='#fff' text='Logout' />
          </div>
        )} */}
      </div>
    </>
  )
}

export default Header
