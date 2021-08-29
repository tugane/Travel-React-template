import React from 'react'
import styled from 'styled-components';
import { AiFillStar } from "react-icons/ai";
import tw from 'twin.macro';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Offer(props) {
    return (
        <Link to="#">
            <Wrap>
                <Img src={props.img}/>
                <Title>{props.location}, {props.country}</Title>
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
                <Price>
                    $567
                </Price>
            </Wrap>
        </Link>
    )
}
const Wrap = styled.div`
    height: 450px;
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
    height: calc(100% - 100px);
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
        text-2xl
        cursor-pointer
    `}
`;
const Price = styled.h3`
    ${tw`
        text-xl
        font-bold
    `}
`;
export default Offer
