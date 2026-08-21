import useScrollToTop from '../hooks/useScrollToTop';
import SectionTitle from '../components/common/SectionTitle';
import QueryForm from '../components/query/QueryForm';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
  useScrollToTop();

  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <SectionTitle 
        title="Get In Touch" 
        subtitle="We'd love to hear from you. Here's how you can reach us."
      />

      <div className="grid md:grid-cols-3 gap-8" style={{ marginTop: '3rem', marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
          <FiMapPin size={40} style={{ color: 'var(--color-accent)', marginBottom: '1rem' }} />
          <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Our Location</h4>
          <p className="text-muted">123 Lifestyle Avenue<br/>Design District, Bangalore 560001</p>
        </div>
        
        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
          <FiPhone size={40} style={{ color: 'var(--color-accent)', marginBottom: '1rem' }} />
          <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Phone Number</h4>
          <p className="text-muted">+91 98765 43210<br/>Mon - Fri, 9am - 6pm</p>
        </div>

        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
          <FiMail size={40} style={{ color: 'var(--color-accent)', marginBottom: '1rem' }} />
          <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Email Address</h4>
          <p className="text-muted">hello@urbannest.com<br/>support@urbannest.com</p>
        </div>
      </div>

      <div style={{ backgroundColor: 'var(--color-bg)', padding: '4rem 1rem', borderRadius: 'var(--radius-xl)' }}>
        <SectionTitle title="Send a Message" subtitle="Fill out the form below and we'll get back to you." />
        <QueryForm />
      </div>
    </div>
  );
};

export default Contact;
