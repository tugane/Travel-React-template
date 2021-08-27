import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt,FaCalendarAlt,FaCaretDown } from "react-icons/fa";
import tw from 'twin.macro';

function Search() {
    return (
        <Wrap>
            <InputGroup>
                <input type="text" placeholder="Where to ?" />
            </InputGroup>
            <InputGroup>
                <input type="date" placeholder="Date" />
            </InputGroup>
            <InputGroup>
                <select placeholder="Travel Type">
                    <option>Travel Type</option>
                    <option>Travel 1</option>
                    <option>Travel 2</option>
                    <option>Travel 3</option>
                </select>
            </InputGroup>
            <SearchBtn>
                Find Now
            </SearchBtn>
        </Wrap>
    )
}
const Wrap = styled.div`
    color:white;
    ${tw`
        mt-2
        p-4
        border-2 
        rounded-lg
        lg:flex
        w-full
    `}
`;
const InputGroup = styled.div`
    span{
        position: absolute;
        margin-top: 13px;
        margin-left: -25px;
    }
    ${tw`
        lg:w-3/12
        lg:px-2
    `}
    input, select {
        ::placeholder{
            color: white;
        }
        ${tw`
            bg-transparent
            border-2
            rounded-md
            py-2
            w-full
            focus:outline-none
            px-4
            my-2
            lg:my-0
            `
        }
        option{
            color: black;
        }
        ::-webkit-calendar-picker-indicator {
            filter: invert(1);
        }
    }
`;
const SearchBtn = styled.button`
    color: #060b1d;
    ${
        tw`
            bg-white
            lg:w-3/12
            w-full
            py-2
            px-5
            rounded-md
            font-bold
            lg:mx-4
        `
    }
`;
export default Search
