import React from 'react'
import './index.css'

function ContactCard(props) {
  return (
    <div className='card-style'>
      <img src={props.contact.imgUrl}></img>
      <h1>{props.contact.name}</h1>
      <p>Phone: {props.contact.phone}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  )
}

export default ContactCard
