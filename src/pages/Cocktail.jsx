import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailPage';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { id, data };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strCategory: category,
    strAlcoholic: info,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter((key) => {
      return key.startsWith('strIngredient') && singleDrink[key] !== null;
    })
    .map((key) => {
      return singleDrink[key];
    })
    .join(', ');

  /* Alternative Logic */
  // const ingredientsAlternativeLogic = Object.entries(singleDrink)
  //   .filter(([key, value]) => {
  //     return key.includes('strIngredient') && value !== null;
  //   })
  //   .map(([, value]) => {
  //     return value;
  //   })
  //   .join(', ');

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back to home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {validIngredients}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
