import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <br />

      <Outlet />
      <br />

      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default About;
