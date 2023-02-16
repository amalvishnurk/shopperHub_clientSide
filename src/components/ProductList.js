import React from 'react'
import { ProductsList } from '../actions/productListAction'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './ProductCard'
import Banner from './Banner'

function ProductList() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(ProductsList())
  }, [])

  const { productList } = useSelector((state) => state.prodListReducer)
  console.log(productList);

  return (
    <div>
      <Banner/>
      <Row>
      {
        productList.map(product => (
          <Col xl={3} lg={4} md={6} >
            <ProductCard item={product} />
          </Col>
        ))
      }
    </Row>
    </div>
    
  )
}

export default ProductList