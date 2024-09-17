import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
   <section className='g-wrapper'>
    <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
            <span className='primaryText'>Get Started</span>
            <span className='secondaryText'>Register as a agent today and join the RealHome family</span>
            <button className="button">
                <a href="">Register as Agent</a>
            </button>
        </div>
    </div>
   </section>
  )
}

export default GetStarted