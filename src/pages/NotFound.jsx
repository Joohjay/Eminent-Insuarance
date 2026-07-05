import MetaTags from '../components/MetaTags';
import Button from '../components/Button';

function NotFound() {
  return (
    <>
      <MetaTags
        title="Page Not Found"
        description="The page you are looking for could not be found."
        path="/404"
        robots="noindex, follow"
      />
      <section className="section not-found">
        <div className="container">
          <h1>404</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Sorry, the page you are looking for does not exist.
          </p>
          <Button to="/" variant="primary">
            Go Back Home
          </Button>
        </div>
      </section>
    </>
  );
}

export default NotFound;
