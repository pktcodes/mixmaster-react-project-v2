import { Link } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <h1>Home Layout</h1>
      <br />

      {/*Link component - Designed to navigate around the project only */}
      <Link to="/about">About Page</Link>
      <br />

      {/* For external sites, HTML link element should be used */}
      <a
        href="https://github.com/praveen-1995"
        target="_blank"
        rel="noreferrer"
        style={{ marginTop: '1rem', display: 'inline-block' }}
      >
        Github
      </a>
    </div>
  );
};

export default HomeLayout;
