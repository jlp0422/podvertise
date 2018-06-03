import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-grid">
      <h1 className="about-headline">Title Goes Here</h1>
      <h3 className="about-sub">Subheading goes here</h3>
      <Link to="/podcast">
        <button className="btn btn-primary about-button">Apply Today</button>
      </Link>
    </div>
  )
}

export default About;
