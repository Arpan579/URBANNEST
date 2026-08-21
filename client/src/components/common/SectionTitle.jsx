const SectionTitle = ({ title, subtitle, alignment = 'center' }) => {
  return (
    <div style={{ textAlign: alignment, marginBottom: '3rem' }}>
      <h2 className="h2" style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: alignment === 'center' ? '0 auto' : '0' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
