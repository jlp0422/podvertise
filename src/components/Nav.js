import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="logo-grid">
        <Link className="logo-image-grid" to='/about'><img className="logo-image" src="http://www.ccorpusa.com/wp-content/uploads/2017/07/logo.png" /></Link>
      </div>
      <div>
        <a href='/auth/google'><button className="login-btn">Login with Google</button></a>
        <a href='/auth/facebook'><button className="login-btn">Login with Facebook</button></a>
        <a href='/auth/github'><button className="login-btn">Login with Github</button></a>
      </div>
      <div className="nav-grid">
        <Link className="nav-link-1" to='/about'>About</Link>
        <Link className="nav-link-2" to='/podcast'>Podcast</Link>
        <Link className="nav-link-3" to='/advertise'>Advertise</Link>
        <Link className="nav-link-4" to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Nav;
