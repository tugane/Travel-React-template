import React from 'react'
import styled from 'styled-components';
import { AiFillStar } from "react-icons/ai";
import tw from 'twin.macro';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Tour(props) {
    return (
        <Link to="#">
            <Wrap>
                <Img src={props.img}/>
                <Title>{props.title}</Title>
                <Activities>{props.activities}</Activities>
                <Stars>
                    <StarWrap>
                        <AiFillStar/>
                    </StarWrap>
                    <StarWrap>
                        <AiFillStar/>
                    </StarWrap>
                    <StarWrap>
                        <AiFillStar/>
                    </StarWrap>
                    <StarWrap>
                        <AiFillStar/>
                    </StarWrap>
                    <StarWrap>
                        <AiFillStar/>
                    </StarWrap>
                </Stars>
                <BottomTextWrap>
                    <Price>
                        {props.price}
                    </Price>
                    <People>{props.people}</People>
                    <Period>{props.period}</Period>
                </BottomTextWrap>
            </Wrap>
        </Link>
    )
}
const Wrap = styled.div`
    height: 500px;
    ${tw`
        overflow-hidden
        px-1
    `}
    position: relative;

`;
const Img = styled.img`
    ${tw`
        rounded-lg
    `}
    height: calc(100% - 150px);
    inset: 0px;
    display: block;
    object-fit: cover;
    width: 100%;
    z-index: 1;
    top: 0;
`;
const Title = styled.h3`
    color: white;
    ${tw`
        pt-2
        text-xl
    `}
`;
const Stars = styled.div`
    ${
        tw`
            flex
        `
    }
`;
const StarWrap = styled.div`
    ${tw`
        text-white
        text-2xl
        mr-3
        cursor-pointer
    `}
`;
const Activities = styled.p`
    ${tw`
        text-white
        text-sm
        truncate
    `}
`;
const BottomTextWrap = styled.div`
    ${tw`
        flex
        text-white
        justify-between
    `}
`;
const Price = styled.h3`
    ${tw`
        text-white
        md:text-xl
        font-bold
    `}
`;
const People = styled.h3`

`;
const Period = styled.h3`

`;
export default Tour
