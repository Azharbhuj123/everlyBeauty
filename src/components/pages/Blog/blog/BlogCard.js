import React, { useEffect, useState } from 'react'
import styles from '@/styles/components/blog/blogCard.module.css'
import Image from 'next/image'
import { createAPIEndPoint } from '@/src/config/api'
import { endPoints } from '@/src/config/endpoints'

const BlogCard = () => {
  const BASE_URL = 'https://api.everlybeauty.ca/api'
  const [artileItems, setArticelItems] = useState([])
  const getArticle = async () => {
    try {
      const response = await createAPIEndPoint(
        endPoints.articles,
        true
      ).fetchAll()
      setArticelItems(response?.data.data)
      console.log(response?.data, 'blogs card')
    } catch (error) {
      console.log(error, 'error')
    }
  }

  useEffect(() => {
    getArticle()
  }, [])

  return (
    <>
      <div className={styles.blogCards}>
        {artileItems.map((item, index) => {
          console.log(`${BASE_URL}${item.attributes.image.data.attributes.url}`,"imageUrl ")
          return (
            <>
              <div key={index} className={styles.blogCard}>
                <div className={styles.blogCardImage}>
                  <Image
                    src={`${BASE_URL}${item.attributes.image.data.attributes.url}`}
                    width={200}
                    height={100}
                  />
                </div>
                <div className={styles.blogCardContent}>
                  <h1>{item.attributes.title}</h1>
                  <p>{item.attributes.content}</p>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default BlogCard
