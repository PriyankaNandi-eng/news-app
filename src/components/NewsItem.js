import React from 'react'
import { Link } from 'react-router-dom';

const  NewsItem  = (props)=> {


    let {title, description, UrlToImage, newsUrl, author, date} = props;
    return (
      <div className="my-3">
      <div className="card">
  <img src={!UrlToImage?"https://www.toonippo.co.jp/common/too/images/v1/common/ogp-image.png":UrlToImage} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString}</small></p>
    <Link to={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</Link>
  </div>
</div>
</div>
    )

}

export default NewsItem