import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/CocktailCard';

const CocktailCard = ({ id, image, name, glass, info }) => {
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

CocktailCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  image: PropTypes.string,
  name: PropTypes.string,
  glass: PropTypes.string,
  info: PropTypes.string,
};

export default CocktailCard;
