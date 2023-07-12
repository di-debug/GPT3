import React from 'react'
import './possibilty.css'
import possibilityimg from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className='gpt3__possibility section-padding' id='possibillity'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityimg} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility