import React from 'react'
import './talkpoint.css'

const TalkPoint = ({ title, description, url, urlToImage}) => {
  return (
    <div className='news-app'>
      <div className='news-item'>
        <div>
          <img className='news-img' src={urlToImage} alt={title} />
        </div>
        <h3><a href={url}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default TalkPoint