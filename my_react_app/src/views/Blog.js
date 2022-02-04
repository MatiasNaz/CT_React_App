import React, { Component } from 'react'
import Post from '../components/Post';

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }


    getPosts = async () => {
        const res = await fetch('http://127.0.0.1:5000/api/posts')
        const data = await res.json()
        console.log(data)
        this.setState({
            posts: data
        })
    }

    componentDidMount() {
        this.getPosts();
    }

    loopThroughPosts = (listOfPosts) => {
        return listOfPosts.map(post => <Post key={post.id} post={post} />)
    }

    render() {
        return (
            <div className='column'>
                {this.loopThroughPosts(this.state.posts)}
            </div>
        )
    }
}
