import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  const errorResponse = useRouteError();
  console.log(errorResponse);

  if (errorResponse.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt={errorResponse.statusText} />
          <h3>ohh!</h3>
          <h3>{"we can't seem to find the page you are looking for"}</h3>
          <Link to="/">back to home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
