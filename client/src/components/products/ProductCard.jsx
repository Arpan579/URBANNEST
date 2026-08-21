import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <div className="product-category-badge">{product.category}</div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
        <Link to={`/products`} className="product-link">
          View Details <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
