import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HeartPulse } from 'lucide-react';
import { MemoryRouter } from 'react-router-dom';
import { useState } from 'react';
import ServiceCard from '../ServiceCard';

function ExpandableServiceCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MemoryRouter>
      <ServiceCard {...props} isOpen={isOpen} onToggle={() => setIsOpen((current) => !current)} />
    </MemoryRouter>
  );
}

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

  it('shows more service information when Learn More is clicked', async () => {
    const user = userEvent.setup();

    render(
      <ExpandableServiceCard
        icon={HeartPulse}
        title="Health Insurance"
        description="Covers medical treatments."
        details={['Inpatient and outpatient benefits', 'Provider network guidance']}
      />
    );

    await user.click(screen.getByRole('button', { name: /Learn More/i }));

    expect(screen.getByText(/What this cover can include/i)).toBeInTheDocument();
    expect(screen.getByText(/Inpatient and outpatient benefits/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Request a Quote/i })).toHaveAttribute(
      'href',
      '/contact?service=Health%20Insurance'
    );
  });
});
