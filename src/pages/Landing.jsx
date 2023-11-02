import { useLoaderData } from 'react-router-dom';

const Landing = () => {
  const data = useLoaderData();
  console.log(data);
  return <h1>Landing</h1>;
};

export default Landing;
