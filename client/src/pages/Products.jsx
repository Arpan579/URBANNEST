import { useState, useEffect } from 'react';
import useScrollToTop from '../hooks/useScrollToTop';
import { getProducts } from '../services/productService';
import ProductCard from '../components/products/ProductCard';
import SectionTitle from '../components/common/SectionTitle';
import Loader from '../components/common/Loader';
import { useLocation } from 'react-router-dom';

const Products = () => {
  useScrollToTop();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFilter = queryParams.get('category');

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const data = await getProducts();
        let fetchedProducts = data.data;
        
        if (categoryFilter) {
          fetchedProducts = fetchedProducts.filter(
            p => p.category.toLowerCase() === categoryFilter.toLowerCase()
          );
        }
        
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, [categoryFilter]);

  return (
    <div className="pt-24 pb-16">
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <SectionTitle 
          title={categoryFilter ? `${categoryFilter} Collection` : "Our Products"} 
          subtitle="Browse our complete collection of curated lifestyle products."
        />
        
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="text-center" style={{ color: 'var(--color-error)' }}>{error}</div>
        ) : products.length === 0 ? (
          <div className="text-center text-muted">No products found in this category.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
