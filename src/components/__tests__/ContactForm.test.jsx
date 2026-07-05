import { render, screen } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  it('renders all form fields with labels and required attributes', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/Your Name/i)).toBeRequired();
    expect(screen.getByLabelText(/Your Email/i)).toBeRequired();
    expect(screen.getByLabelText(/Your Message/i)).toBeRequired();
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  it('uses autocomplete attributes on name and email', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/Your Name/i)).toHaveAttribute('autocomplete', 'name');
    expect(screen.getByLabelText(/Your Email/i)).toHaveAttribute('autocomplete', 'email');
  });
});
