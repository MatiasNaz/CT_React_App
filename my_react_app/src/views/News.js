import React, { Component } from 'react'
import NewsArticle from '../components/NewsArticle';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }


    getNews = async () => {
        const res = await fetch("https://newsapi.org/v2/everything?q=coding&apiKey=ace489dd71b74e8f9cf8aeedf4c0a864");
        const data = await res.json();
        console.log(data)
        this.setState({
            articles: data.articles
        }
        )
    }

    loopThroughArticles = (listOfArticles) => {
        return listOfArticles.map((article, index) => <NewsArticle key={index} article={article} />)
    }

    componentDidMount() {
        this.getNews()
    }

    render() {
        return (
            <div>
                <h2>This is the News Page</h2>
                <div className='container'>
                    <div className='row'>
                        {this.loopThroughArticles(this.state.articles)}
                    </div>
                </div>
            </div>
        )
    }
}
