import React from 'react'
import {Link, NavLink} from "react-router-dom"
import './header.scss'

const header = () => {
  return (
    <nav className="navbar navbar-expand-md mainOuterNav">
      <div className="container-fluid ">
          <NavLink className="navbar-brand logoLink" to="#">
          <img src="./images/winkcart.png" alt="Avatar Logo" className="logo" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navBarOuterDiv" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">HOME</NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">ALL PRODUCTS</Link>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/shirt">SHIRT</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">ABOUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Account</Link>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/myaccount">MY ACCOUNT</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/cart">CART</NavLink></li>
                </ul>
              </li>
            </ul>
            <div className = "headerCartBtn">
              <div className="abc">
                <span>₹0.00</span>
                <i className="fa-solid fa-cart-plus"></i>
              </div>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default header
