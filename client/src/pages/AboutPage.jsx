import useScrollToTop from '../hooks/useScrollToTop';
import SectionTitle from '../components/common/SectionTitle';

const AboutPage = () => {
  useScrollToTop();

  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <SectionTitle 
        title="About UrbanNest" 
        subtitle="Discover our passion for beautiful living."
      />
      
      <div className="grid md:grid-cols-2 gap-8 items-center" style={{ marginTop: '3rem' }}>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000&auto=format&fit=crop" 
            alt="Beautifully designed room" 
            style={{ borderRadius: 'var(--radius-xl)', width: '100%', height: 'auto' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 className="h3" style={{ color: 'var(--color-primary)' }}>Our Mission</h3>
          <p className="text-muted" style={{ fontSize: '1.125rem' }}>
            At UrbanNest, we are driven by a simple belief: your surroundings deeply influence your well-being. 
            We meticulously curate home décor, lifestyle essentials, and unique accessories to help you create a space 
            that feels authentically yours.
          </p>
          <p className="text-muted" style={{ fontSize: '1.125rem' }}>
            Every product in our catalog goes through rigorous quality checks to ensure that we offer not just beauty, 
            but lasting value. We source ethically and prioritize sustainable materials whenever possible.
          </p>
          
          <h3 className="h3" style={{ color: 'var(--color-primary)', marginTop: '1rem' }}>Why Choose Us?</h3>
          <ul className="text-muted" style={{ fontSize: '1.125rem', listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Premium quality products at accessible price points.</li>
            <li>Carefully curated selections to match modern aesthetics.</li>
            <li>Personalized customer support via our dedicated team and AI assistant.</li>
            <li>Fast, reliable, and safe shipping.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
