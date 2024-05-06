import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Error404 from '../components/Error/Error404';

const Error = () => {
  return(
    <div className='error-page'>
      <Header/>
        <main>
        <Error404 />
        </main>
        <Footer />
    </div>
  );
};

export default Error;