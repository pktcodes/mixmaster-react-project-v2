import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  /*   useNavigation give information state about the state of the application i.e. loading, idle etc., */

  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  console.log(isPageLoading);

  /* React Router DOM provides context prop for Outlet */
  const value = 'hello world';

  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? (
          <div className="loading" />
        ) : (
          <Outlet context={value} />
        )}
      </section>
    </>
  );
};

export default HomeLayout;
