import { render, screen } from '@testing-library/react';
import { HeartPulse } from 'lucide-react';
import ServiceCard from '../ServiceCard';

describe('ServiceCard', () => {
  it('renders the title and description', () => {
    render(<ServiceCard icon={HeartPulse} title="Health Insurance" description="Covers medical treatments." />);

    expect(screen.getByRole('heading', { name: /Health Insurance/i })).toBeInTheDocument();
    expect(screen.getByText(/Covers medical treatments./i)).toBeInTheDocument();
  });

  it('renders without an icon when none is provided', () => {
    render(<ServiceCard title="No Icon" description="Description without icon." />);

    expect(screen.getByRole('heading', { name: /No Icon/i })).toBeInTheDocument();
    expect(screen.getByText(/Description without icon./i)).toBeInTheDocument();
  });
});
