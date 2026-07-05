import { Link } from 'react-router-dom';

const variants = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  outlineLight: 'btn btn-outline-light',
  white: 'btn btn-white',
};

function Button({ children, variant = 'primary', to, href, onClick, type = 'button', className = '', ...props }) {
  const classes = `${variants[variant] || variants.primary} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;
