import React, {useEffect} from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt,FaCaretDown } from "react-icons/fa";
import tw from 'twin.macro';
import AOS from 'aos';

function Search() {
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    }, []);
    return (
        <Wrap>
            <InputGroup>
                <input type="text" placeholder="Where to ?" />
                <IconWrap>
                    <FaMapMarkerAlt/>
                </IconWrap>
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
                <IconWrap>
                    <FaCaretDown/>
                </IconWrap>
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
        mt-4
        p-4
        border-2 
        border-dark
        dark:border-white
        rounded-lg
        lg:flex
        w-full
    `}
`;
const InputGroup = styled.div`
    ${tw`
        relative
    `}
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
        ${tw`
            bg-transparent
            border-2
            border-dark
            dark:border-white
            placeholder-dark
            dark:placeholder-white
            text-dark
            dark:text-white
            rounded-md
            py-2
            appearance-none
            w-full
            focus:outline-none
            pl-4
            pr-6
            my-2
            lg:my-0
            `
        }
        option{
            ${
                tw`
                    text-dark
                    dark:text-white

                `
            }
        }
        ::-webkit-calendar-picker-indicator {
            filter: invert(1);
        }
    }
`;
const SearchBtn = styled.button`
    ${
        tw`
            bg-yellow
            hover:bg-opacity-90
            hover:shadow-lg
            lg:w-3/12
            w-full
            py-2
            px-5
            rounded-md
            font-bold
            text-dark
            lg:mx-4
        `
    }
`;
const IconWrap = styled.div`
    ${
        tw`
            text-dark
            dark:text-white
            pointer-events-none 
            absolute 
            inset-y-0 
            right-0 
            flex 
            items-center 
            pr-5 
        `
    }
`;
export default Search
