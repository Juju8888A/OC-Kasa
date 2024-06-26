import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import Cards from '../components/Cards/Cards';

const Home = () => {
  return(
    <div className='home-page'>
        <Header />
        <main>     
          <Banner>
            <div className='banner-container-1'>
            <h1>Chez vous, partout et ailleurs</h1>
            </div>
            </Banner>     
          <Cards />
        </main>
        <Footer />
    </div>

  );
};

export default Home;