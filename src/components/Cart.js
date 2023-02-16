import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { CartList } from '../actions/productListAction'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid'


function Cart() {

  const [userName, setName] = useState('')
  const [email, setmail] = useState('')
  const [mobile, setMob] = useState(0)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
  const baseurl = 'http://localhost:3000'
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(CartList())

  }, [])

  const { cartList } = useSelector((state) => state.cartReducer)
  const { totalPrice } = useSelector((state) => state.cartReducer)

  // console.log(cartList);
  // console.log('totalPrice', totalPrice);

  const handleRemove = (id) => {
    console.log(id);
    axios.post(`${baseurl}/deleteProduct`, { id })
      .then(result => {
        alert(result.data.message)
        dispatch(CartList())
      })

  }

  const placeOrder = (event) => {
    // generate uuid
    const id = uuid()
    let orderId = id.slice(0, 8)

    axios.post(`${baseurl}/orderDetails`, { orderId, userName, email, mobile, totalPrice, cartList })
      .then(result => {
        alert(result.data.message)
        navigate('/')
      })
    axios.delete(`${baseurl}/emptyCart`)
  }

  const navigateHome = () => {
    navigate('/')
  }

  return (
    <div>
      {cartList.length > 0 ?
        <>
          <h4 className='text-center mt-3'>My Shopping Cart </h4>
          <Table sx={{ minWidth: 500 }} className='container text-center mt-5' striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((product, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{product.title}</td>
                  <td>
                    <img className='cartImg' src={product.image} alt="BigCo Inc. logo" />
                  </td>
                  <td>{product.description}</td>
                  <td>${product.price}</td>
                  <td> <button onClick={() => { handleRemove(product.id) }} className='btn btn-danger'>
                    Remove</button></td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className='main mb-3 container'>
            <div >
              Grand Total :&nbsp; $ {totalPrice}
            </div>
            <div><button onClick={handleShow} className='btn btn-primary '> CheckOut</button></div>
          </div>
        </>
        :
        <>
          <h1 className='text-center mt-5 mb-5'>Your cart is empty !!</h1>
          <div className='text-center'>
            <button onClick={navigateHome} className='btn btn-warning'>Shop Now</button>
          </div>
        </>
      }

      {/* checkout model */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm order </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control onChange={(event) => setName(event.target.value)} type="name" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={(event) => setmail(event.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMob">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control onChange={(event) => setMob(event.target.value)} type="number" placeholder="Enter Contact Number" />
            </Form.Group>
            <div className='mb-3'>Total Amount : $ {totalPrice}</div>

            <Button onClick={(event) => placeOrder(event)} variant="primary">
              Place Order
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Continue shopping
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Cart