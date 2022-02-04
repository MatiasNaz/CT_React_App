import React, { Component } from 'react';
import './NewsArticle.css';

export default class NewsArticle extends Component {
    render() {
        const a = this.props.article
        return (

            <div className="card">
                <img src={a.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{a.title}</h5>
                    <p className="card-text">{a.description}</p>
                    <p className="card-text">{a.author}</p>
                    <a href={a.url} className="btn btn-primary">Go to Article</a>
                </div>
            </div>

        )
    }
}
