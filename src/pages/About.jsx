import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner'
import Collapse from '../components/Collapse/Collapse';



const About = () => {
  return(
    <div className='about-page'>
        <Header />
        <main>
        <Banner>
            <div className='banner-container-2'>
            </div>
            </Banner> 
          <Collapse />
        </main>
        <Footer />
    </div>
  );
};

export default About;