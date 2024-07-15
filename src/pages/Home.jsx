import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import Cards from '../components/Cards/Cards';
import imageBannerHome from "../assets/img/photo-banner-paysage-home.png"

const Home = () => {

const titleBannerHome = "Chez vous, partout et ailleurs"

  return(
    <div className='home-page'>
        <Header />
        <main>     
          <Banner title={titleBannerHome} image={imageBannerHome}/>    
          <Cards />
        </main>
        <Footer />
    </div>

  );
};

export default Home;