import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Contact from './views/Contact';
import News from './views/News';
import Home from './views/Home';
import Shop from './views/Shop';
import SingleProduct from './views/SingleProduct';
import Cart from './views/Cart';
import Login from './views/Login';
import Register from './views/Register';
import Blog from './views/Blog';

export default class Elephant extends Component {
  constructor() {
    super();
    console.log("I was created")
    this.state = {
      isLoggedIn: false,
      currentUser: null,
      products: [],
      cart: []
    }
  }

  logMeIn = (user) => {
    this.setState({
      isLoggedIn: true,
      currentUser: user
    })
  }

  addToCart = (product) => {
    this.setState({
      cart: this.state.cart.concat(product)
    })
  }
  removeFromCart = (product) => {
    let newCart = [...this.state.cart];
    for (let i = newCart.length - 1; i >= 0; i--) {
      if (product.id === newCart[i].id) {
        newCart.splice(i, 1);
        break
      }
    }
    this.setState({ cart: newCart });
  }
  sumTotalCart = (cart) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price
    }
    return total.toFixed(2)
  };

// fetches data from flask app
  getProducts = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/shop/products");
    const data = await res.json();
    console.log(data)
    this.setState({
      products: data
    }
    )
  }

  addToCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  componentDidMount() {
    console.log('i have mounted')
    this.getProducts()
  }

  render() {
    console.log("I rendered");
    return (
      <div>
        <Navbar isLoggedIn={this.state.isLoggedIn} currentUser={this.state.currentUser} cart={this.state.cart} sumTotalCart={this.sumTotalCart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop products={this.state.products} addToCart={this.addToCart} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />} />
          <Route path='/cart' element={<Cart cart={this.state.cart} sumTotalCart={this.sumTotalCart} removeFromCart={this.removeFromCart} />} />
          <Route path='/shop/:productId' element={<SingleProduct addToCart={this.addToCart} />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<Login logMeIn={this.logMeIn} />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    )
  }
}
