import axios from 'axios';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const checkEmptyInputValues = Object.values(data)
    .map((item) => {
      return item.trim();
    })
    .includes('');

  if (checkEmptyInputValues) {
    return toast.error('please check empty values');
  }

  if (data.email !== 'test@test.com') {
    console.log("API expected email address: 'test@test.com'");
  }

  try {
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect('/');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  return (
    <Wrapper>
      <Form className="form" method="POST">
        <h4>our newsletter</h4>
        {/* Name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            required
          />
        </div>
        {/* Last Name */}
        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            last name
          </label>
          <input
            type="text"
            className="form-input"
            id="lastName"
            name="lastName"
            required
          />
        </div>
        {/* Email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            defaultValue="test@test.com"
            required
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h4 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .btn {
    margin-top: 0.5rem;
  }
`;

export default Newsletter;
