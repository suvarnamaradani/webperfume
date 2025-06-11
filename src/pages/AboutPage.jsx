import React from 'react';
import './AboutPage.css';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <h1>About Perfume Paradise</h1>
        
        <section className="about-intro">
          <h2>Our Story</h2>
          <p>
            Founded in 2023, Perfume Paradise has been dedicated to bringing the finest fragrances
            to our discerning customers. Our passion for perfumery drives us to source the most
            exquisite scents from around the world.
          </p>
        </section>

        <section className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality</h3>
              <p>We source only the finest ingredients and partner with renowned perfumers.</p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>Our packaging is eco-friendly, and we support sustainable sourcing practices.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We constantly explore new scent combinations and perfume technologies.</p>
            </div>
          </div>
        </section>

        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            To help everyone discover their signature scent while maintaining the highest
            standards of quality and customer service. We believe that the right fragrance
            can transform your day and enhance your presence.
          </p>
        </section>

        <section className="about-team">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <h3>Sarah Johnson</h3>
              <p className="title">Master Perfumer</p>
              <p>With 15 years of experience in crafting unique fragrances.</p>
            </div>
            <div className="team-member">
              <h3>Michael Chen</h3>
              <p className="title">Creative Director</p>
              <p>Leading our creative vision and product development.</p>
            </div>
            <div className="team-member">
              <h3>Emma Williams</h3>
              <p className="title">Customer Experience</p>
              <p>Ensuring every customer finds their perfect scent.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage; 