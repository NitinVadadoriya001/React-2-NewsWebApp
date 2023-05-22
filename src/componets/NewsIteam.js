import React, { Component } from 'react'

export default class NewsIteam extends Component {

  render() {

    let { title, description, imageurl, newsurl, author, date, source } = this.props;

    return (
      <div className='my-3'>
        <div className="card text-white bg-dark mb-3" >

          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <b><h6 className="card-title" style={{ fontSize: "22px" }}>{title}...</h6></b>
            <p className="card-text" style={{ fontSize: "15px" }}>{description}...</p>
            <p className="card-text" style={{ fontSize: "12px" }}>By : {author ? author : "Unknown"} At : {new Date(date).toGMTString()}</p>
           
            <div className="d-flex justify-content-between mt-4 ">

            <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary ">Read more</a>
            <span className="badge text-bg-success">
              {source}
            </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

