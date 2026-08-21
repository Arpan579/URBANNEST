import useScrollToTop from '../hooks/useScrollToTop';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import FeaturedProducts from '../components/home/FeaturedProducts';
import WhyChooseUs from '../components/home/WhyChooseUs';
import QueryForm from '../components/query/QueryForm';
import SectionTitle from '../components/common/SectionTitle';

const Home = () => {
  useScrollToTop();

  return (
    <>
      <Hero />
      <About />
      <FeaturedProducts />
      <WhyChooseUs />
      
      <section className="section bg-light" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <SectionTitle 
            title="Have a Question?" 
            subtitle="Drop us a message and our team will get back to you as soon as possible."
          />
          <QueryForm />
        </div>
      </section>
    </>
  );
};

export default Home;
