import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let { title, desciption, imageUrl, newsUrl, author, date,source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title ">{title}<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                           {source}
                            <span class="visually-hidden">unread messages</span>
                        </span></h5>
                        <p className="card-text">{desciption}</p>
                        <p className="card-text"><small class="text-body-secondary">By {author ? "Unknown" : author} on {new Date(date).toGMTstring}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More!</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems










