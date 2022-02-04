import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            name: "random"
        }
    }

    render() {
        return (

            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/shop">Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/news">News</Link>
                                </li>

                                {
                                    this.props.isLoggedIn ? (
                                        <>
                                            <li className="nav-item">
                                                <button className="nav-link" >Log Out</button>
                                            </li>
                                            <li className="nav-item">
                                                <p className="nav-link" >Hello, {this.props.currentUser.username}</p>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/login">Login</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/register">Register</Link>
                                            </li>
                                        </>

                                    )
                                }

                                <li className="nav-item">
                                    <Link to='/cart' className="nav-link"><i className="fas fa-cart-plus"></i>{this.props.cart.length}|{this.props.sumTotalCart(this.props.cart)}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
