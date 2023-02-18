import React from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './productCard.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseurl = 'http://localhost:3000'

function ProductCard({ item }) {
    const handleClick = (product) => {
        console.log(product);
        const { id, title, price, description, image } = product
        console.log(id, price);
        axios.post(`${baseurl}/addToCart`, { id, title, price, description, image })
            .then(result => {
                console.log(result.data);
                // alert(result.data.message)
                toast.success(result.data.message, {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });

            })
    }

    return (


        <div className="shopping-list">
            <div className="shopping-item">
                <div className="shopping-item-image">
                    <img className='productImage' src={item.image} alt="Item 1" />
                </div>
                <div className="shopping-item-details ">
                    <p><b>{item.title}</b></p>
                    <p className='description'>{item.description.substring(0, 40) + "..."}</p>
                    <p>$ {item.price}</p>
                    <div><button className='button' onClick={() => handleClick(item)} >Buy Now</button></div>
                </div>
            </div>
            <ToastContainer />
        </div>


    )
}

export default ProductCard