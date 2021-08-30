import React, {useEffect} from 'react'
import styled from 'styled-components'
import {FaArrowRight} from 'react-icons/fa'
import tw from 'twin.macro'
import AOS from 'aos';
function Newsleter() {
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    }, []);
    return (
        <Container>
            <Wrap>
                <FormWrap>
                    <TextWrap>
                        <h4 data-aos="fade-up">Stay updated to our newsletter and</h4>
                        <h1 data-aos="fade-up">Travel With Us</h1>
                    </TextWrap>
                    <Form>
                        <input data-aos="fade-up" placeholder="Email Address" type="email" name="email" id="email" />
                        <Btn data-aos="fade-up">
                            <span>Send</span>
                            <FaArrowRight/>
                        </Btn>
                    </Form>
                </FormWrap>
                <img data-aos="fade-up" src="/img/img (5).jpg" alt="about img"/>
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
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 4px solid #ffd700;
        transition-duration: 150ms;
        padding: 0;
    }
`;
const FormWrap = styled.div`
    z-index: 3;
    ${tw`
        text-white
        items-center
        lg:justify-between
        absolute
        grid
        lg:grid-cols-3
        bg-dark
        bg-opacity-60
        p-5
        h-full
        w-full
    `}
`;
const TextWrap = styled.div`
    ${tw`
        lg:col-span-1
        relative
        justify-end
        mt-16
        lg:mt-2
    `}
    
    h4{
        ${tw`
            text-lg
            font-bold
            lg:mb-4
        `}
    }
    h1{
        ${tw`
            text-5xl
            font-bold
            -mb-16
            lg:mb-4
        `}
    }
`;
const Form = styled.form`
    ${tw`
        flex
        relative
        lg:col-span-2
        justify-end
        lg:px-10
        mb-16
        lg:mb-2
    `}
    input{
        ${tw`
        placeholder-dark
        cursor-pointer
        flex
        relative
        text-dark
        text-sm
        rounded-full
        bg-white
        justify-between
        items-center
        font-bold
        py-4
        h-14
        px-10
        items-center
        focus:outline-none
        w-full
        `}
        
    }
    
`;
const Btn = styled.button`
    ${tw`
        cursor-pointer
        flex
        absolute
        text-white
        text-sm
        rounded-r-full
        bg-dark
        justify-between
        items-center
        font-bold
        py-4
        h-14
        px-6
        -mr-2
        lg:w-40
    `}
    span{
        ${
            tw`
                hidden
                lg:block
            `
        }
    }
`;
export default Newsleter
