import React, {useEffect} from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import AOS from 'aos';
import {
    BrowserRouter as 
    Link
  } from "react-router-dom";

function SectionHeader(props) {
    
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    }, []);
    
    return (
        <TextWrap>
            <h2 data-aos="fade-up">{props.title}</h2>
            <Link to="#">
                <TextAll data-aos="fade-up">
                    {props.linkText}
                </TextAll>
            </Link>
        </TextWrap>
    )
}
const TextAll = styled.a`
    ${tw`
        text-lg
        text-dark
        dark:text-yellow
        cursor-pointer
    `}
`;
const TextWrap = styled.div`
    ${tw`
        flex
        justify-between
        py-6
        items-center
    `}
    
    h2{
        ${
            tw`
                text-3xl
                text-dark
                dark:text-yellow
                font-bold
                py-4
            `
        }
    }
`;

export default SectionHeader
