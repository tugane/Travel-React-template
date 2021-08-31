import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import ImgSlider from '../components/ImgSlideer';
import Search from '../components/Search';
import SpecialOffer from '../Sections/SpecialOffer';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import PopularDestinations from '../Sections/PopularDestinations';
import TourPages from '../Sections/TourPages';
import Blogs from '../Sections/Blogs';
import tw from 'twin.macro';
import About from '../Sections/About';
import Newsleter from '../Sections/Newsleter';
import Footer from '../Sections/Footer';
function Home() {

    return (
      <Router>
        <ContainerFluid>
            <Header/>
            <Wrap>
              <ImgSlider/>
              <Search/>
              <SpecialOffer/>
              <PopularDestinations/>
              <TourPages/>
              <Blogs/>
              <About/>
              <Newsleter/>
            </Wrap>
            <Footer/>
        </ContainerFluid>
      </Router>
    )
}

const ContainerFluid = styled.main`
  ${tw`
    font-mono
    antialiased 
    leading-loose
    tracking-wide
    bg-white
    dark:bg-dark
  `}
  
  overflow-x: hidden;
  font-family: 'Prata', serif;
  *::selection{
    color: #ffd700;
  }
  *{
    transition-duration: 150ms;
  }
`;


const Wrap = styled.section`
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 30px;
  
  @media(max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export default Home
