import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import ViewAll from './ViewAll';

function SectionHeader(props) {
    return (
        <TextWrap>
            <h2>{props.title}</h2>
            <ViewAll linkText={props.linkText}/>
        </TextWrap>
    )
}
const TextWrap = styled.div`
    ${tw`
        flex
        justify-between
        items-center
    `}
    
    h2{
        ${
            tw`
                text-xl
                text-white
                font-bold
                py-4
            `
        }
    }
`;

export default SectionHeader
