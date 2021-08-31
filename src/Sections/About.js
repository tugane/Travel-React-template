import React, {useEffect} from 'react'
import styled from 'styled-components'
import {FaArrowRight} from 'react-icons/fa'
import tw from 'twin.macro'
import AOS from 'aos';
function About() {
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    }, []);
    return (
        <Container>
            <Wrap>
                <TextWrap >
                    <h4 data-aos="fade-up">What Do You Know</h4>
                    <h1 data-aos="fade-up">About US</h1>
                    <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, iste. Esse alias, porro dolor nesciunt nostrum nemo ex consequuntur odio. Accusantium aut explicabo id ratione quis repellendus omnis accusamus? Facere.</p>
                    <Btn data-aos="fade-up">
                        Read More
                        <FaArrowRight/>
                    </Btn>
                </TextWrap>
                <img src="/img/img (8).jpg" alt="about img"/>
            </Wrap>
        </Container>
    )
}
const Container = styled.section`
    ${tw`
        pt-8
    `}
`;
const Wrap = styled.div`
    height: 400px;
    ${tw`
        grid
        lg:grid-cols-2
        gap-2
        text-white
        relative
        overflow-hidden
        bg-gray-600
        rounded-lg
    `}
    img{
        object-fit: cover;
        ${tw`
            absolute
            w-full
            h-full
        `}
    }
    
    &:hover{
        box-shadow: rgb(0 0 0 / 49%) 0px 26px 30px -10px,
        rgb(0 0 0 / 30%) 0px 16px 10px -10px;
        border: 4px solid #ffd700;
        transition-duration: 150ms;
        padding: 0;
    }
`;
const TextWrap = styled.div`
    z-index: 3;
    ${tw`
        text-white
        absolute
        bg-dark
        bg-opacity-60
        lg:p-10
        p-5
        h-full
        w-full
    `}
    h4{
        font-family: 'Nunito', sans-serif;
        ${tw`
            text-xl
            mb-4
        `}
    }
    h1{
        ${tw`
            text-5xl
            font-bold
            mb-4
        `}
    }
    p{
        max-width:600px;
        font-family: 'Nunito', sans-serif;
        ${tw`
            text-lg
            mb-4
        `}
    }
`;
const Btn = styled.div`
    ${tw`
        cursor-pointer
        hover:opacity-90
        mb-4
        flex
        text-dark
        hover:text-white
        text-lg
        rounded-lg
        bg-white
        hover:bg-dark
        hover:border-2
        border-2
        border-white
        justify-between
        items-center
        font-bold
        py-4
        px-6
        w-60
    `}
    &:hover{
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 4px solid white;
        transition-duration: 150ms;
    }
`;
export default About
