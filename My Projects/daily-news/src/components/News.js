import React from 'react'
import './News.css'

function News({news}) {
  return (
    <>
    <a href={news.url} target = "_blank">
        <div className='news-card'>
                <img src={news.urlToImage} alt={news.title} />
                <h2>{news.title}</h2>
                <p>{news.description}</p>
        </div>
    </a>
    
    </>
    
  )
}

export default News