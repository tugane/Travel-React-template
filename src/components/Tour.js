import React, {useEffect} from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import ReactStars from "react-rating-stars-component";
import AOS from 'aos';
import {
    BrowserRouter as 
    Link
  } from "react-router-dom";

function Tour(props) {
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
            <Wrap>
                <ImgWrap  data-aos="fade-up">
                    <Img src={props.img}/>
                </ImgWrap>
                <Title data-aos="fade-up">{props.title}</Title>
                <Activities data-aos="fade-up">{props.activities}</Activities>
                <Stars data-aos="fade-up">
                    <ReactStars count={5} size={30} value={4} onChange={ratingChanged} activeColor="#ffd700"/>
                </Stars>
                <BottomTextWrap>
                    <Price data-aos="fade-up">
                        {props.price}
                    </Price>
                    <People data-aos="fade-up">{props.people}</People>
                    <Period data-aos="fade-up">{props.period}</Period>
                </BottomTextWrap>
            </Wrap>
        </Link>
    )
}
const Wrap = styled.div`
    height: 500px;
    ${tw`
        overflow-hidden
        capitalize
        px-1
    `}
    position: relative;
`;
const ImgWrap =styled.div`
    height: calc(100% - 150px);
    
    &:hover{
        /* box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px; */
        border: 4px solid #ffd700;
        transition-duration: 150ms;
        padding: 0;
    }
    ${tw`
        rounded-xl
        hover:shadow-2xl
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
        truncate
        text-dark
        dark:text-white
        text-xl
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
const Activities = styled.p`
    ${tw`
        text-dark
        dark:text-white
        text-sm
        truncate
    `}
`;
const BottomTextWrap = styled.div`
    ${tw`
        flex
        text-dark
        dark:text-white
        justify-between
    `}
`;
const Price = styled.h3`
    ${tw`
        text-dark
        dark:text-white
        truncate
        md:text-xl
    `}
`;
const People = styled.h3`
    ${tw`
        text-dark
        dark:text-white
        truncate
        md:text-xl
    `}
`;  
const Period = styled.h3`
    ${tw`
        text-dark
        dark:text-white
        truncate
        md:text-xl
    `}
`;
export default Tour
