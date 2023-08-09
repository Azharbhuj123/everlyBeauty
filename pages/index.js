import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Banner from '@/src/components/pages/Home/bannerSeection/bannerSection'
import Testimonals from '@/src/components/pages/Home/testimonals/Testimonals'
import PromiseSection from '@/src/components/pages/Home/promise/PromiseSection'
import BodyService from '@/src/components/pages/Home/bodyService/BodyService'
import { useContext } from 'react'
import { discountPercentContext } from '@/store/discountPercentContext'
import Progressbar from '@/src/components/pages/Home/bodyService/Progressbar'
import DiscountToggle from '@/src/components/pages/Home/bodyService/DiscountToggle'
import DiscountType from '@/src/components/pages/Home/bodyService/DiscountType'
import styles from '@/styles/components/bodyService/bodyService.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [discountPercent, setDiscountPercent] = useContext(
    discountPercentContext
  )
  return (
    <>
      <Head>
        <title>Everly Beauty</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner />
      <PromiseSection />
      <BodyService />
      <div className={styles.bodyServiceContainer}>
        <div className={styles.bodyServiceWrapper}>
          <div className={styles.progressbarContainer}>
            <div className={styles.progressbarSection}>
              <Progressbar discountPercent={discountPercent} />
              <DiscountToggle />
              <DiscountType />
            </div>
          </div>
        </div>
      </div>
      <Testimonals />
    </>
  )
}
