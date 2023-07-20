import React, { useState } from 'react'
import styles from '@/styles/components/footer.module.css'
import Image from 'next/image'
import facebook from '/public/assets/images/facebook.svg'
import twitter from '/public/assets/images/twitter.svg'
import instagram from '/public/assets/images/instagram.svg'
import tiktok from '/public/assets/images/tiktok.svg'
import { Facebook } from '../SVG'

const Footer = () => {
  // const [isHovered, setIsHovered] = useState('')
  // const handleIconHover = (value) => {
  //   setIsHovered(value)
  // }
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerLeft}>
            <ul className={styles.footerNavLinks}>
              <li>
                <Image src={facebook} width={35} height={35} alt='' />
                {/* <Facebook
                  color={isHovered === 'facebook' ? '#fff' : '#E1AD9D'}
                  backgroundColor={
                    isHovered === 'facebook' ? 'E1AD9D#E1AD9D' : '#dcaa9b'
                  }
                /> */}
              </li>
              <li>
                <Image src={twitter} width={35} height={35} alt='' />
              </li>
              <li>
                <Image src={instagram} width={35} height={35} alt='' />
              </li>
              <li>
                <Image src={tiktok} width={35} height={35} alt='' />
              </li>
            </ul>
          </div>
          <div className={styles.footerRight}>
            <p>
              Copyright © 2023 <span>Everly Beauty.</span> All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
