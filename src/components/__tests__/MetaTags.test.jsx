import { render } from '@testing-library/react';
import MetaTags from '../MetaTags';

describe('MetaTags', () => {
  it('updates document title and meta description', () => {
    render(<MetaTags title="Contact Us" description="Get in touch with us." path="/contact" />);

    expect(document.title).toBe('Contact Us | Eminent Insurance Solutions');
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', 'Get in touch with us.');
  });
});
