import React, { Component } from 'react';
import { withParams } from '../hocs';

class SingleProduct extends Component {
    constructor() {
        super();
        this.state = {
            product: {}
        }
    }

    getSingleProduct = async () => {
        const id = this.props.params.productId;
        const res = await fetch(`http://127.0.0.1:5000/api/shop/${id}`);
        const data = await res.json();
        this.setState({
            product: data
        })
    }

    componentDidMount() {
        this.getSingleProduct()
        console.log(this.props.params)
    }

    render() {
        const p = this.state.product
        return (
            <div class="instagram-rip-off">
                <div class="card ">
                    <img src={p.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{p.name}</h5>
                        <p class="card-text">{p.description}</p>
                        <h3>{p.price}</h3> <button class='btn btn-secondary' onClick={() => this.props.addToCart(p)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default withParams(SingleProduct);
