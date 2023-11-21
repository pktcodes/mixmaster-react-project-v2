import PropTypes from 'prop-types';
import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          className="form-input"
          name="search"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'submitting' : 'search'}
        </button>
      </Form>
    </Wrapper>
  );
};

SearchForm.propTypes = {
  searchTerm: PropTypes.string,
};

export default SearchForm;
