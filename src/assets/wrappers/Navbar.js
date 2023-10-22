import styled from 'styled-components';

const Wrapper = styled.nav`
  background: var(--white);
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 1.5rem 2rem;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    letter-spacing: 2px;
    font-weight: 700;
  }
  .nav-links {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .nav-link {
    color: var(--grey-900);
    letter-spacing: 2px;
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }
  @media (min-width: 992px) {
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;

export default Wrapper;
