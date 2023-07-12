import React from 'react'
import people from '../../assets/people.png'
import AI from '../../assets/ai.png'
import './header.css'
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Lets Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem corporis ex recusandae exercitationem incidunt similique expedita dolores odio magnam assumenda voluptate quaerat ut at ipsum, error neque eius nulla! Dicta.</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'> Gets Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      <div className='gpt3__header-image'>
        <img  className="" src={AI} alt="AI" />
      </div>

    </div>
  )
}
export default Header;