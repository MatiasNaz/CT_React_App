import React, { Component } from 'react'

export default class Cart extends Component {
    getQuantity = (cartItem, cartList) => {
        let count = 0;
        for (let item of cartList) {
            if (cartItem.id === item.id) {
                count++;
            }
        }
        return count
    };

    getUniqueCart = (cartList) => {
        let uniqueCart = [];
        let ids = new Set();
        for (let item of cartList) {
            if (!ids.has(item.id)) {
                uniqueCart.push(item);
                ids.add(item.id);
            }
        }
        return uniqueCart
    }

    render() {
        const uniqueCart = this.getUniqueCart(this.props.cart);
        return (
            uniqueCart.length > 0 ? (
                <div className='container'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {uniqueCart.map(p => (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{this.getQuantity(p, this.props.cart)}</td>
                                    <td>{p.price}</td>
                                    <td>{(this.getQuantity(p, this.props.cart) * p.price).toFixed(2)}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => { this.props.removeFromCart(p) }}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>TOTAL</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>${this.props.sumTotalCart(this.props.cart)}</td>
                                <td></td>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            ) : (
                <div className='container'>
                    <h3>You have no items in your cart</h3>
                </div>
            )
        )
    }
}
