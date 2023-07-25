import React from "react";
import styles from "@/styles/components/blog/blogCard.module.css";
import Image from "next/image";
import Blog1 from "../../../public/assets/images/blog1.svg";
const BlogCard = () => {
  return (
    <>
      <div className={styles.blogCards}>
        <div className={styles.blogCard}>
          <div className={styles.blogCardImage}>
            <Image src={Blog1} width={100} height={100} alt="" />
            {/* <img src='' alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
