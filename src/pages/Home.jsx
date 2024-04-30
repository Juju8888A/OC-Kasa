import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';

const Home = () => {
  return(
    <div className='home-page'>
        <Header />
        <main>
          <Banner />
          <Card />
        </main>
        <Footer />
    </div>

  );
};

export default Home;