import React from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const baseurl = 'http://localhost:3000'

function ProductCard({ item }) {

    const handleClick = (product) => {
        console.log(product);
        const { id, title, price, description, image } = product
        console.log(id, price);
        axios.post(`${baseurl}/addToCart`, { id, title, price, description, image })
            .then(result => {
                console.log(result.data);
                alert(result.data.message)
            })
    }

    return (
        <Card className='my-3 mx-2 cards'>
            <Card.Img className='p-2 img' variant="top" src={item.image} />
            <Card.Body className='text-center' >
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    <p>$ {item.price}</p>
                </Card.Text>
                <div >
                    <button onClick={() => handleClick(item)} className='btn btn-primary mb-2 mt-2'>Add to cart</button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProductCard