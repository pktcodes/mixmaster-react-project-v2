import PropTypes from 'prop-types';
import { Link, useOutletContext } from 'react-router-dom';
import styled from 'styled-components';

const CocktailCard = ({ id, image, name, glass, info }) => {
  const data = useOutletContext();
  console.log(data);

  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  /* display: grid;
  grid-template-rows: auto 1fr; */
  &:hover {
    box-shadow: var(--shadow-4);
  }
  img {
    height: 15rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }
  .footer {
    padding: 1.5rem;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
  }
`;

CocktailCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  image: PropTypes.string,
  name: PropTypes.string,
  glass: PropTypes.string,
  info: PropTypes.string,
};

export default CocktailCard;
