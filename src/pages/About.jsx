import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner'

const About = () => {
  return(
    <div className='about-page'>
        <Header />
        <main>
        <Banner>
            <div className='banner-container-2'>
            </div>
            </Banner> 
        <h2>Page à propos</h2>
        </main>
        <Footer />
    </div>
  );
};

export default About;