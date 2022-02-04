import React, { Component, useState } from 'react';
import axios from 'axios';

export default class Post extends Component {
    render() {
        const p = this.props.post
        return (
            <div className="instagram-rip-off">
                <a className="card text-decoration-none text-dark">
                    <img src={p.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{p.title}</h5>
                        <p className="card-text">{p.content}</p>
                    </div>
                </a>
            </div>
        )
    }
}


// Connect React with Flask backend for access to posts & login credentials endpoint. - HW

function App() {

    const [postData, setPostData] = useState(null)

    function getData() {
        axios({
            method: "GET",
            url: "/login",
        })
            .then((response) => {
                const res = response.data
                setPostData(({
                    post_name: res.name,
                    post_desc: res.desc
                }))
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            
    })}

    return (
        <div className="Create-Post">
            <header className="Post-header">
                
                <p>To generate new post: </p><button onClick={getData}>Click me!</button>
                {postData && <div>
                    <p>Post Name: {postData.post_name}</p>
                    <p>Post Description: {postData.post_desc}</p>
                </div>
                }
                
            </header>
        </div>
    );
}

export default App;