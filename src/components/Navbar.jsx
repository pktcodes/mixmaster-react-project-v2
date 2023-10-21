import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledBtn = styled.button`
  margin-bottom: 1rem;
  background: red;
  color: white;
  font-size: 2rem;
  padding: 1rem;
  text-transform: capitalize;
`;

const Navbar = () => {
  return (
    <nav>
      <StyledBtn>styled btn</StyledBtn>
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
    </nav>
  );
};

export default Navbar;
