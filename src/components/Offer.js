import React, { useEffect } from 'react'
import styled from 'styled-components';
import ReactStars from "react-rating-stars-component";
import tw from 'twin.macro';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
    BrowserRouter as 
    Link
  } from "react-router-dom";

function Offer(props) {

    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    }, []);

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <Link to="#">
            <Wrap data-aos="fade-up">
                <ImgWrap>
                    <Img src={props.img}/>
                </ImgWrap>
                <Title data-aos="fade-up">{props.location}, {props.country}</Title>
                <Stars data-aos="fade-up">
                    <ReactStars count={5} size={30} value={4} onChange={ratingChanged} activeColor="#ffd700"/>
                </Stars>
                <Price data-aos="fade-up">
                    $567
                </Price>
            </Wrap>
        </Link>
    )
}
const Wrap = styled.div`
    font-family: 'Nunito', sans-serif;
    height: 450px;
    ${tw`
        overflow-hidden
        px-1
    `}
    position: relative;

`;
const ImgWrap = styled.div`
    height: calc(100% - 85px);
    
    &:hover{
        border: 4px solid #ffd700;
        transition-duration: 150ms;
        padding: 0;
    }
    
    ${tw`
        rounded-lg
        hover:rounded-xl
        hover:shadow-xl
    `}
`;
const Img = styled.img`
    ${tw`
        rounded-lg
        h-full
    `}
    inset: 0px;
    display: block;
    object-fit: cover;
    width: 100%;
    z-index: 1;
    top: 0;
`;
const Title = styled.h3`
    ${tw`
        pt-2
        text-xl
        text-dark
        dark:text-white
    `}
`;
const Stars = styled.div`
    ${
        tw`
            -mt-4
            pb-0
        `
    }
    span{
        height: 42px;
    }
`;

const Price = styled.h3`
    ${tw`
        text-xl
        font-bold
        text-dark
        dark:text-white
    `}
`;
export default Offer
