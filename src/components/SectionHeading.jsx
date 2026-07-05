function SectionHeading({ label, title, subtitle, light = false, align = 'center' }) {
  return (
    <div
      className="section-heading"
      style={{
        textAlign: align,
        marginLeft: align === 'center' ? 'auto' : '0',
        marginRight: align === 'center' ? 'auto' : '0',
      }}
    >
      {label && <span className="section-label">{label}</span>}
      {title && (
        <h2 className="section-title" style={light ? { color: 'var(--white)' } : undefined}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className="section-subtitle"
          style={light ? { color: 'rgba(255, 255, 255, 0.85)' } : undefined}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
