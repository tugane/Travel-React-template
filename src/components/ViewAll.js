import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function ViewAll(props) {
    return (
        <Link to="#">
            <TextAll>
                {props.linkText}
            </TextAll>
        </Link>
    )
}
const TextAll = styled.a`
    ${tw`
        text-base
        text-white
        cursor-pointer
    `}
`;
export default ViewAll
