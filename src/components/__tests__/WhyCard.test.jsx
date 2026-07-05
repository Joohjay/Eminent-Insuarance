import { render, screen } from '@testing-library/react';
import { ShieldCheck } from 'lucide-react';
import WhyCard from '../WhyCard';

describe('WhyCard', () => {
  it('renders title and description', () => {
    render(
      <WhyCard
        icon={ShieldCheck}
        title="Comprehensive Coverage"
        description="Wide range of insurance products."
      />
    );

    expect(screen.getByRole('heading', { name: /Comprehensive Coverage/i })).toBeInTheDocument();
    expect(screen.getByText(/Wide range of insurance products./i)).toBeInTheDocument();
  });
});
