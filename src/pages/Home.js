import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import ImgSlider from '../components/ImgSlideer';
import Search from '../components/Search';
import SpecialOffer from '../Sections/SpecialOffer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PopularDestinations from '../Sections/PopularDestinations';
import TourPages from '../Sections/TourPages';
function Home() {
    return (
      <Router>
        <Container>
            <Header/>
            <ImgSlider/>
            <Search/>
            <SpecialOffer/>
            <PopularDestinations/>
            <TourPages/>
        </Container>
      </Router>
    )
}


const Container = styled.section`
  background-color: #060b1d;
  height: 100vh;
  width: 100%;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 30px;
  padding-bottom: 30px;
  overflow-x: hidden;
  display: block;
  top: 72px;
  
  @media(max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export default Home
