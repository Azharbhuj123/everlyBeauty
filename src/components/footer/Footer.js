import React, { useState } from "react";
import styles from "@/styles/components/footer.module.css";
import Image from "next/image";
import facebook from "/public/assets/images/facebook.svg";
import twitter from "/public/assets/images/twitter.svg";
import instagram from "/public/assets/images/instagram.svg";
import tiktok from "/public/assets/images/tiktok.svg";
import { Facebook } from "../SVG";
import logo from "/public/assets/images/logo-white.svg";
import phone from "/public/assets/images/phone.svg";
import email from "/public/assets/images/envelope.svg";
import location from "/public/assets/images/locattion.svg";
import Link from "next/link";
const Footer = () => {
  // const [isHovered, setIsHovered] = useState('')
  // const handleIconHover = (value) => {
  //   setIsHovered(value)
  // }
  return (
    <>
      <div className={styles.footerTop}>
        <div className={styles.footerTopLeft}>
          <div className={styles.footerTopLeftContent}>
            <div className={styles.footerTopLeftLogo}>
              <Link href="/">
                <Image src={logo} width={250} height={0} alt="" />
              </Link>
            </div>
            <div className={styles.footerTopLeftContentpara}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <ul className={styles.footerTopLeftContact}>
              <li className={styles.footerTopLeftContactphone}>
                <Image src={phone} width={18} height={18} alt="" />
                <p>(905)-876-8282</p>
              </li>
              <li className={styles.footerTopLeftContactphone}>
                <Image src={email} width={18} height={18} />
                <p>info@evabeautylhr.ca</p>
              </li>
              <li className={styles.footerTopLeftContactphone}>
                <Image src={location} width={18} height={18} alt="" />
                <p>854 King St. W., Hamilton Ontario, Canada</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerTopRight}>
          <iframe
            class="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>

      <div className={styles.footerContainer}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerLeft}>
            <ul className={styles.footerNavLinks}>
              <li>
                <Image src={facebook} width={35} height={35} alt="" />
                {/* <Facebook
                  color={isHovered === 'facebook' ? '#fff' : '#E1AD9D'}
                  backgroundColor={
                    isHovered === 'facebook' ? 'E1AD9D#E1AD9D' : '#dcaa9b'
                  }
                /> */}
              </li>
              <li>
                <Image src={twitter} width={35} height={35} alt="" />
              </li>
              <li>
                <Image src={instagram} width={35} height={35} alt="" />
              </li>
              <li>
                <Image src={tiktok} width={35} height={35} alt="" />
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
  );
};

export default Footer;
