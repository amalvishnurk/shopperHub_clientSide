import React, { useState } from 'react'
import { ProductsList } from '../actions/productListAction'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './ProductCard'
import Banner from './Banner'
import './productList.css'
import { useRef } from 'react'

function ProductList() {
  const dispatch = useDispatch()
  const men = useRef(null)
  const women = useRef(null)
  const jewelery = useRef(null)




  useEffect(() => {
    dispatch(ProductsList())
  }, [])


  const { productList } = useSelector((state) => state.prodListReducer)
  console.log(productList);

  const handleMen = () => {
    men.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleWomen = () => {
    women.current?.scrollIntoView({ behavior: 'smooth' })

  }

  const handleJewelery = () => {
    jewelery.current?.scrollIntoView({ behavior: 'smooth' })

  }


  return (
    <div className='container'>
      <Banner />
      <Row className='mt-3 mb-3'>
        <Col xl={4} lg={4} xs={12} className='column'>

          <div onClick={handleMen} className='main b1'>
            <div className='box Name'>Men</div>
            <div className='box'><img className='image' src="https://images.vexels.com/media/users/3/190572/isolated/preview/3b6b824b929e3ca4f457b300cde733ed-mens-fashion-men.png" /></div>
          </div>

        </Col>

        <Col xl={4} lg={4} xs={12} className='column'>

          <div onClick={handleWomen} className='main b2'>
            <div className='box Name'>Women</div>
            <div className='box'><img className='image' src="https://cdn.pixabay.com/photo/2020/01/10/16/10/fashion-4755610_1280.png" /></div>
          </div>

        </Col>
        <Col xl={4} lg={4} xs={12} className='column' >

          <div onClick={handleJewelery} className='main b3'>
            <div className='box Name'> Jewellery</div>
            <div className='box '><img className='image' src="https://www.freepnglogos.com/uploads/wedding-ring-png/wedding-ring-silhouette-transparent-png-svg-vector-34.png" /></div>
          </div>

        </Col>

      </Row>

      <Row>
        <div  className='mt-4 mb-2' ref={men} ><h3>Men's Fashion</h3></div >
        <div className='items' >
          {
            productList.filter(prod => prod.category == "men's clothing").slice(0, 3).map(product => (
              <ProductCard item={product} />

            ))
          }
        </div>
      </Row>
      <Row>
        <div   className='mt-5 mb-2' ref={women}><h3>Women's Fashion</h3></div>
        <div className='items'>
          {
            productList.filter(prod => prod.category == "women's clothing").slice(0, 3).map(product => (
              <ProductCard item={product} />
            ))
          }
        </div>

      </Row>
      <Row>
        <div className='mt-5 mb-2' ref={jewelery}><h3>Jewellery</h3></div>
        <div className='items'>
        {
          productList.filter(prod => prod.category == "jewelery").slice(0, 3).map(product => (
              <ProductCard item={product} />
          ))
        }
        </div>
       
      </Row>
    </div>

  )
}

export default ProductList