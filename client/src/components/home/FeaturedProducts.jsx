import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../services/productService';
import ProductCard from '../products/ProductCard';
import SectionTitle from '../common/SectionTitle';
import Loader from '../common/Loader';
import Button from '../common/Button';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const data = await getProducts();
        // Just take the first 4 for featured in this demo, or filter by featured flag
        const featured = data.data.filter(p => p.featured).slice(0, 4);
        setProducts(featured.length > 0 ? featured : data.data.slice(0, 4));
        setLoading(false);
      } catch (err) {
        setError('Failed to load featured products.');
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <section className="section featured-section bg-light">
      <div className="container">
        <SectionTitle 
          title="Featured Collection" 
          subtitle="Explore our most popular and hand-picked lifestyle essentials."
        />
        
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="text-center text-error">{error}</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {products.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            <div className="view-all-container">
              <Link to="/products">
                <Button variant="outline">View All Products</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
