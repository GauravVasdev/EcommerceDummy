import React from 'react'
import './cart.scss'
import { Table } from 'antd'

const Cart = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    // <div className="cartMainOuterDiv">
    //   <table className="cart-table-element">
    //     <thead>
    //       <tr>
    //         <th></th>
    //         <th></th>
    //         <th>Product</th>
    //         <th>Price</th>
    //         <th>Quantity</th>
    //         <th>Subtotal</th>
    //       </tr>
    //     </thead>
    //     <tr>
    //       <td>Button</td>
    //       <td>Image</td>
    //       <td>Typography Teal Printed Tshirt</td>
    //       <td>₹32.00</td>
    //       <td>1</td>
    //       <td>₹32.00</td>
    //     </tr>
    //   </table>
    // </div>
    <>  
<Table dataSource={dataSource} columns={columns} />;
    </>
  )
}

export default Cart
