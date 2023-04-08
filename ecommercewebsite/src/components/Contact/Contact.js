import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <div className="container-fluid contactMainOuterDiv ">
      <div className="row">
      <div className="contactLeftDiv col-sm-6">
        <h1 className="contactHeading">Say Hello.</h1>
        <p className="contactParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className="element-divider"></div>
        <div className="element-icon-list">
          <div className="element-icon">
            <i className="fas fa-map"></i>
            <span>212 7th St SE, Washington, DC 20003, USA</span>
          </div>
          <div className="element-icon">
            <i className="fas fa-envelope "></i>
            <span>info@example.com</span>
          </div>
          <div className="element-icon">
            <i className="fas fa-phone "></i>
            <span>123-456-7890/91</span>
          </div>
        </div>
      </div>
      <div className="rightQueryDiv col-sm-6">
        <div class="formOuterElement">
          <form className='queryform'>
              <h3>Ask Your Queries</h3>
              <input type="text" placeholder='Your Email'/>
              <input type="text" placeholder='Subject'/>
              <textarea placeholder='Message'></textarea>
              <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
      </div>
    </div> 
  )
}

export default Contact
