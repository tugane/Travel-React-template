import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import ImgSlider from '../components/ImgSlideer';
import Search from '../components/Search';

function Home() {
    return (
        <Container>
            <Header/>
            <ImgSlider/>
            <Search/>
        </Container>
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
