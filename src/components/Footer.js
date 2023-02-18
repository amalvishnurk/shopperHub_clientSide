import React from 'react'
import './footer.css'
import { Element } from 'react-scroll';

function Footer() {



  return (
    <div className='footerDiv'>
      <Element id="myDiv">
      <footer className='mt-4 container'>
        <div className='footer'>
          <div >
            <div className='mains'><b>LET'S STAY IN TOUCH</b></div>
            <div>Get updates on sales specials and more</div>
            <div><input placeholder='Enter your email' className='input_footer'></input></div>
            <div> <button className='footer_button mt-2'>Send</button></div>
          </div>
          </div >
      </footer>
      </Element>
    </div >
  )
}

export default Footer