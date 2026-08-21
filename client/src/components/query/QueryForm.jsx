import { useState } from 'react';
import { submitQuery } from '../../services/queryService';
import Button from '../common/Button';
import './QueryForm.css';

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await submitQuery(formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="query-form-container">
      {status === 'success' ? (
        <div className="query-success">
          <div className="success-icon">✓</div>
          <h3>Thank You!</h3>
          <p>Your query has been submitted successfully. Our team will get back to you soon.</p>
          <Button onClick={() => setStatus('idle')} variant="outline">Send Another Query</Button>
        </div>
      ) : (
        <form className="query-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 9876543210"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Product Inquiry"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="How can we help you?"
            ></textarea>
          </div>

          {status === 'error' && <p className="form-error">{errorMessage}</p>}

          <Button type="submit" disabled={status === 'loading'} className="submit-btn">
            {status === 'loading' ? 'Submitting...' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default QueryForm;
