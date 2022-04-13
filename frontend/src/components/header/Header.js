import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div class="topnav">

    <a class="active" href="/">Home</a>
    <a href="/login">Login</a>
    <a href="/products">Products</a>
    <a href="/orders">Orders</a>
    <a href="/cart">Cart</a>
     

  </div>
  )
}

export default Header