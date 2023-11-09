import PropTypes from 'prop-types';
import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from './CocktailCard';

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>no matching cocktails found...</h4>
    );
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } = item;

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

CocktailList.propTypes = {
  drinks: PropTypes.array,
};

export default CocktailList;
