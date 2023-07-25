import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/src/components/Layout/Layout'
import Banner from '@/src/components/pages/Home/bannerSeection/bannerSection'
import PromisSection from '@/src/components/pages/Home/promiseSection/PromisSection'
import BodyService from '@/src/components/pages/Home/bodyService/BodyService'
import Testimonals from '@/src/components/pages/Home/testimonals/Testimonals'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Everly Beauty</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Banner />
        <PromisSection />
        <BodyService />
        <Testimonals />
      </Layout>
    </>
  )
}
