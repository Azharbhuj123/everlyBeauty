import React from 'react'
import styles from '@/styles/components/banner/banner.module.css'
import Image from 'next/image'
import StyledButton from '../../../buttons/StyledButton'
import arrow from '/public/assets/images/arrow-up-right-white.svg'
import colada from '/public/assets/images/colada.png'
const Banner = () => {
  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerWrapper}>
          <div className={styles.bannerContent}>
            <div className={styles.bannerContentLeftParent}>
              <div className={styles.bannerContentLeft}>
                <div className={styles.bannerContentLeftHeading}>
                  <h1>Get The Smooth Look You Want</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et
                  </p>
                </div>
                <div className={styles.bannerContentLeftButton}>
                  <StyledButton
                    backgroundColor='#DCAA9B'
                    color='#fff'
                    text='Consultation'
                    image={arrow}
                  />
                </div>
              </div>
            </div>
            <div className={styles.bannerContentRight}>
              <div className={styles.bannerContentRightImage}>
                {/* <Image src={colada} width={800} height={'auto'} alt='' /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
