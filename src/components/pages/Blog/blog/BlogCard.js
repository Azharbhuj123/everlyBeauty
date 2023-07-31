import React from 'react'
import styles from '@/styles/components/blog/blogCard.module.css'
import Image from 'next/image'

const BlogCard = ({ blogCardData }) => {
  return (
    <>
      <div className={styles.blogCards}>
        {blogCardData.map((item, index) => (
          <div key={index} className={styles.blogCard}>
            <div className={styles.blogCardImage}>
              <Image src={item.image} width={200} height={100} />
            </div>
            <div className={styles.blogCardContent}>
              <h1>{item.question}</h1>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default BlogCard
