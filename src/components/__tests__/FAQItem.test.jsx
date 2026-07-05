import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import FAQItem from '../FAQItem';

describe('FAQItem', () => {
  it('renders the question and toggles aria-expanded on click', () => {
    const handleClick = vi.fn();
    const { rerender } = render(
      <FAQItem question="What is insurance?" answer="A risk transfer mechanism." isOpen={false} onClick={handleClick} />
    );

    const button = screen.getByRole('button', { name: /What is insurance?/i });
    expect(button).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);

    rerender(<FAQItem question="What is insurance?" answer="A risk transfer mechanism." isOpen={true} onClick={handleClick} />);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('A risk transfer mechanism.')).toBeInTheDocument();
  });
});
