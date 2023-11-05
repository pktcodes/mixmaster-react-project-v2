import { useLoaderData } from 'react-router-dom';

const url =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

export const loader = () => {
  return 'hello world';
};

const Landing = () => {
  const data = useLoaderData();
  console.log(data);
  return <h1>Landing</h1>;
};

export default Landing;
