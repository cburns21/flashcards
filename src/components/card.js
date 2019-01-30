import React from 'react';
import '../App.css';
import Button from './button'

const Card = (props) => {
  console.log(props)
  return (
    <div className="card text-white bg-info mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.description}</h5>
        <p className="card-text">{props.example}</p>
        
        })}
      </div>
    </div>
  )
}

export default Card;