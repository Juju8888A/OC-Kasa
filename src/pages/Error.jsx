import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Error = () => {
  return(
    <div className='error-page'>
        <Header />
        <h2>Page erreur 404</h2>
        <Footer />
    </div>
  );
};

export default Error;