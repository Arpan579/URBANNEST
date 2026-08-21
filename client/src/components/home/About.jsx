import { Link } from 'react-router-dom';
import Button from '../common/Button';
import './About.css';

const About = () => {
  return (
    <section className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-container">
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop" 
              alt="Cozy interior space" 
              className="about-image"
              loading="lazy"
            />
            <div className="experience-badge">
              <span>Premium</span>
              <span>Quality</span>
            </div>
          </div>
          
          <div className="about-content">
            <h4 className="about-subtitle">Our Story</h4>
            <h2 className="h2 about-title">Curating beauty for your everyday life</h2>
            <p className="about-text">
              At UrbanNest, we believe that your home should be a reflection of who you are. 
              We curate a collection of premium home décor, everyday essentials, and accessories 
              that blend functionality with stunning aesthetics.
            </p>
            <p className="about-text">
              Our mission is to provide you with affordable yet luxurious lifestyle products 
              that elevate your space. From our handcrafted ceramic vases to our relaxing 
              aroma candles, every item is selected with care and intention.
            </p>
            <Link to="/about">
              <Button variant="accent">Read More About Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
