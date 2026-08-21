import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import useScrollToTop from '../hooks/useScrollToTop';

const NotFound = () => {
  useScrollToTop();

  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '8rem', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 className="h1" style={{ fontSize: '6rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>404</h1>
      <h2 className="h2" style={{ marginBottom: '1.5rem', color: 'var(--color-primary-light)' }}>Page Not Found</h2>
      <p className="text-muted" style={{ fontSize: '1.125rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
        We couldn't find the page you were looking for. It might have been moved or doesn't exist.
      </p>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
