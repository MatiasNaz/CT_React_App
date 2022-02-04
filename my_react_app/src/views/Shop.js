import React, { Component } from 'react'
import Product from '../components/Product';

export default class Shop extends Component {


    loopThroughProducts = (listOfProducts) => {
        return listOfProducts.map(product => <Product key={product.id} addToCart={this.props.addToCart} product={product} />)
    }

    render() {
        return (
            <div className='row'>
                {this.loopThroughProducts(this.props.products)}
            </div>
        )
    }
}
