import React from 'react'
import './cart.scss'

const Cart = () => {
  return (
    <div className="cartMainOuterDiv">
      <table className="cart-table-element">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tr>
          <td>Button</td>
          <td>Image</td>
          <td>Typography Teal Printed Tshirt</td>
          <td>₹32.00</td>
          <td>1</td>
          <td>₹32.00</td>
        </tr>
      </table>
    </div>
  )
}

export default Cart
