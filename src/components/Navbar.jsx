import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

/* CSS File */
// import Wrapper from '../assets/wrappers/Navbar';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            NewsLetter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: springgreen;
`;

export default Navbar;
