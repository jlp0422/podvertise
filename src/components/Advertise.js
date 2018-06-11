import React from 'react'
import { Link } from 'react-router-dom';

const Advertise = () => {
  return (
    <div className="adv-grid">
      <div className="adv-copy">
        <h2 className="adv-header">Advertising with Podvertise</h2>
        <h5 className="adv-subheader">Some sub heading copy</h5>
        <Link to='/podcast'>
          <button>Contact us today</button>
        </Link>
      </div>
      <div className="adv-image">
        <img className="stock-photo" src='../vendor/images/stock-photo.jpg' />
      </div>
    </div>
  )
}

export default Advertise;
