import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';

const SearchForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          className="form-input"
          name="search"
          defaultValue="vodka"
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'submitting' : 'search'}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
