// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hello, I'm [Your Name]</h1>
        <p>A passionate Web Developer</p>
        <img src="[Your-Photo-URL]" alt="Your Name" className="home-photo" />
      </div>
    </section>
  );
};

export default Home;
