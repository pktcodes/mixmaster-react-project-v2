import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: var(--view-width);
    max-width: var(--fixed-width);
    margin-bottom: 1rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
  p {
    color: var(--grey-500);
    margin-bottom: 2rem;
    line-height: 1.5;
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default Wrapper;
