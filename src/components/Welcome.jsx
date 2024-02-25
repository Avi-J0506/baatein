import React from 'react'
import baatein from '../images/baatein.jpg'

function Welcome() {
  return (
      <div className="welcome-container">
        <img src={baatein} alt="Logo" className='welcome-logo'/>
        <p>A chatting application developed by someone who chats a lot</p>
      </div>
  )
}

export default Welcome