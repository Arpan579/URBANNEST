import SectionTitle from '../common/SectionTitle';
import { FiTruck, FiShield, FiHeart, FiSmile } from 'react-icons/fi';
import './WhyChooseUs.css';

const features = [
  {
    icon: <FiTruck size={32} />,
    title: 'Free Shipping',
    description: 'On all orders over ₹999. Fast and reliable delivery to your doorstep.'
  },
  {
    icon: <FiShield size={32} />,
    title: 'Premium Quality',
    description: 'Handpicked materials and exceptional craftsmanship in every product.'
  },
  {
    icon: <FiHeart size={32} />,
    title: 'Made with Love',
    description: 'Products that add warmth, character, and beauty to your personal space.'
  },
  {
    icon: <FiSmile size={32} />,
    title: '24/7 Support',
    description: 'Our dedicated team and AI assistant are always here to help you.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section why-choose-us">
      <div className="container">
        <SectionTitle 
          title="Why Choose UrbanNest?" 
          subtitle="We are committed to bringing you the best lifestyle products with unmatched service."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
