import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className="paddings innerWidth flexCenter f-container">
            {/* left */}
            <div className="flexColStart f-left">
                <img src="./RealHome-logo.png" alt="" width={120}/>
                <span className='secondaryText'>
                    We aim to make everyone happy <br />
                    with the place they call home.
                </span>
            </div>
                {/* right side */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>55 Random street, Bloemfontein</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
