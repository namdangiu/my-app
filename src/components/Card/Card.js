import React from 'react'
import './Card.scss'

function Card(props) {
  const { card }=props
  return (
    <div className="card-item">
      {card.cover &&
      <img
        src={card.cover}
        // eslint-disable-next-line no-trailing-spaces
        className="card-cover" 
        alt='anh cua ban'
        onMouseDown={e => e.preventDefault()}
      />
      }
      {card.title}
    </div>
  )
}
export default Card