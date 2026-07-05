import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header', () => {
  it('renders navigation links and logo', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByAltText(/Eminent Insurance Solutions Logo/i)).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /Services/i })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /Contact/i })).toBeInTheDocument();
  });

  it('toggles mobile menu via hamburger button', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const hamburger = screen.getByRole('button', { name: /Open navigation menu/i });
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');
    expect(hamburger).toHaveAttribute('aria-label', 'Close navigation menu');

    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });
});
