import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
    render() {
        const p = this.props.product
        return (
            <div className="card text-decoration-none text-dark" >
                <Link to={`/shop/${p.id}`}>
                    <img src={p.image} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                    <h3>{p.price}</h3> <button className='btn btn-secondary' onClick={() => { this.props.addToCart(p) }}>Add To Cart</button>
                </div>
            </div>
        )
    }
}


export const a = 'Shoha'