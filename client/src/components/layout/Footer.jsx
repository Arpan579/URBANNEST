import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiFacebook, FiHeart } from 'react-icons/fi';
import { STORE_NAME } from '../../utils/constants';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">{STORE_NAME}</h3>
            <p className="footer-tagline">Little Things. Beautiful Living.</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram"><FiInstagram size={20} /></a>
              <a href="#" aria-label="Twitter"><FiTwitter size={20} /></a>
              <a href="#" aria-label="Facebook"><FiFacebook size={20} /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/products?category=Home Decor">Home Decor</Link></li>
              <li><Link to="/products?category=Lighting">Lighting</Link></li>
              <li><Link to="/products?category=Fragrance">Fragrance</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest products and updates.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {STORE_NAME}. All rights reserved.</p>
          <p className="made-with">
            Made with <FiHeart size={14} className="heart-icon" /> for beautiful homes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
