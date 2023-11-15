import axios from 'axios';
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';

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

  /*
  - Handle error when route doesn't exist
  - API return data as null which breaks application
  */
  // if (!data || data.drinks === null) {
  //   return (
  //     <h2 style={{ textAlign: 'center' }}>
  //       {"We can't seem to find the page you are looking for"}
  //     </h2>
  //   );
  // }
  // console.log(data);

  /* Alternative - Navigate user to homepage instead of showing error
   */
  if (!data || data.drinks === null) {
    return <Navigate to="/" />;
  }

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

  /* Alternative - Ingredients Logic */
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
            <span className="drink-label">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-label">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-label">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-label">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-label">ingredients :</span>
            {validIngredients}
          </p>
          <p>
            <span className="drink-label">instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  header {
    margin-bottom: 3rem;
    text-align: center;
  }
  .btn {
    margin-bottom: 1rem;
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;
  }
  .drink-info p {
    font-weight: 700;
    line-height: 2;
    margin: 1rem 0;
  }
  .drink-label {
    text-transform: capitalize;
    background-color: var(--primary-300);
    color: var(--primary-700);
    border-radius: var(--borderRadius);
    padding: 0.25rem 0.5rem;
    margin-right: 0.5rem;
    letter-spacing: var(--letterSpacing);
  }
  @media screen and (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 2rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
`;

export default Cocktail;
