import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div >
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='banner'>
          <img
            className="d-block w-100"
            src="https://www.shutterstock.com/image-vector/vector-illustration-happy-diwali-sale-260nw-2201570495.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className='banner'>
          <img
            className="d-block w-100"
            src="https://www.shutterstock.com/image-vector/vector-illustration-durga-puja-sale-260nw-2204406069.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item className='banner'>
          <img
            className="d-block w-100 center"
            src="https://www.shutterstock.com/image-vector/vector-illustration-happy-diwali-sale-260nw-2201161947.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner