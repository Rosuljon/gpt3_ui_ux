import React from 'react'
import './article.css'
const Article = ({image}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={image} alt="blog_img" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
        <p>Sep 26, 2021</p>
        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article