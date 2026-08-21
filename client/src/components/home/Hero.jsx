import { Link } from 'react-router-dom';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern living room with aesthetic decor" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text-box animate-fade-in">
          <h2 className="hero-tagline">Little Things. Beautiful Living.</h2>
          <h1 className="hero-title">UrbanNest Lifestyle Store</h1>
          <p className="hero-description">
            Discover thoughtfully selected lifestyle essentials, home décor, accessories, 
            and everyday products designed to make your space and life more beautiful.
          </p>
          <div className="hero-actions">
            <Link to="/products">
              <Button variant="primary">Explore Products</Button>
            </Link>
            <a href="https://lakshya404.app.n8n.cloud/form/db070596-7835-41a0-86a1-7921a35d6058" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="glass-btn">Ask Us a Question</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
