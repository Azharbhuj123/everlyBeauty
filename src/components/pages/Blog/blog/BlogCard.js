import React, { useEffect, useState } from 'react'
import styles from '@/styles/components/blog/blogCard.module.css'
import Image from 'next/image'
import { createAPIEndPoint } from '@/src/config/api'
import { endPoints } from '@/src/config/endpoints'
import Search from '/public/assets/images/search.svg'
import Faq from './Faq'
import Link from 'next/link'

const BlogCard = () => {
  const BASE_URL = 'https://api.everlybeauty.ca/api'
  const [artileItems, setArticelItems] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredArticles, setFilteredArticles] = useState([])

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

  useEffect(() => {
    const filtered = artileItems.filter((item) =>
      item.attributes.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredArticles(filtered)
  }, [searchQuery, artileItems])

  return (
    <>
    {/* BlogCover */}
      <div className={styles.blogsContainer}>
        <div className={styles.backgroundImage}>
          <div className={styles.blogsWrapper}>
            <div className={styles.blogsContent}>
              <h1>Blog</h1>
              <h3>
                <Link href='/'> Home |</Link>{' '}
                <span>
                  <Link href='/blog'>Blog</Link>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* end */}

      {/* searchbar */}
      <div className={styles.blogsContainer}>
        <div className={styles.blogsContentWrapper}>
          <div className={styles.searchBar}>
            <input
              type='text'
              className={styles.searchInput}
              placeholder='Type your question here …'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button className={styles.searchIcon}>
              <Image src={Search} alt='Search' width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
      {/* end */}

      {/* blogCard */}
      <div className={styles.blogsContainer}>
        <div className={styles.blogsContentWrapper}>
          <div className={styles.blogCards}>
            {filteredArticles.map((item, index) => {
              console.log(
                `${BASE_URL}${item.attributes.image.data.attributes.url}`,
                'imageUrl '
              )
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
        </div>
      </div>
      {/* end */}
      
      <div className={styles.blogsContainer}>
        <div className={styles.blogsContentWrapper}>
          <Faq />
        </div>
      </div>
    </>
  )
}

export default BlogCard
