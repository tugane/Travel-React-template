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
        <Wrap data-aos="fade-down">
            <InputGroup data-aos="fade-down">
                <input data-aos="fade-down" type="text" placeholder="Where to ?" />
                <IconWrap data-aos="fade-down">
                    <FaMapMarkerAlt/>
                </IconWrap>
            </InputGroup>
            <InputGroup data-aos="fade-down">
                <input data-aos="fade-down" type="date" placeholder="Date" />
            </InputGroup>
            <InputGroup data-aos="fade-down">
                <select data-aos="fade-down" placeholder="Travel Type">
                    <option>Travel Type</option>
                    <option>Travel 1</option>
                    <option>Travel 2</option>
                    <option>Travel 3</option>
                </select>
                <IconWrap data-aos="fade-down">
                    <FaCaretDown/>
                </IconWrap>
            </InputGroup>
            <SearchBtn data-aos="fade-down">
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
        ::placeholder{
            color: white;
        }
        ${tw`
            bg-transparent
            border-2
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
            bg-yellow
            hover:bg-opacity-90
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
const IconWrap = styled.div`
    ${
        tw`
            text-white
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
