import React, {useEffect} from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import AOS from 'aos';
import {
    BrowserRouter as 
    Link
  } from "react-router-dom";

function Blog(props) {
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    }, []);
    return (
        <Link to="#">
            <Wrap>
                <Overlay/>
                <Img data-aos="fade-up" src={props.img}/>
                <TitleWrap>
                    <Text>
                        <Title data-aos="fade-up" >{props.title}</Title>
                        <Description data-aos="fade-up" >{props.description}</Description>
                    </Text>
                </TitleWrap>
            </Wrap>
        </Link>
    )
}
const Text = styled.div`
`;
const Wrap = styled.div`
    height: 500px;
    ${tw`
        overflow-hidden
        flex
        justify-center
        items-center
        hover:rounded-xl
    `}
    position: relative;
    &:hover{
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 4px solid #ffd700;
        transition-duration: 150ms;
        padding: 0;
    }
`;
const Overlay = styled.div`
    ${tw`
        w-full
        h-full
        absolute
        bg-dark
        bg-opacity-40
        rounded-lg
    `}
    z-index: 2;
`;
const Img = styled.img`
    ${tw`
        rounded-lg
        dark:opacity-20
        h-full
    `}
    inset: 0px;
    display: block;
    object-fit: cover;
    width: 100%;
    z-index: 1;
    top: 0;
`;
const TitleWrap = styled.div`
    color: white;
    z-index:3;
    align-items: flex-end;
    ${tw`
        p-3
        flex
        absolute
        w-full
        h-full
    `}
`;
const Title = styled.h3`
    ${tw`
        text-justify
        text-2xl
        font-bold
        uppercase
    `}
`;
const Description = styled.p`
    font-family: 'Nunito', sans-serif;
    ${tw`
        text-justify
        text-base
    `}
`;
export default Blog
