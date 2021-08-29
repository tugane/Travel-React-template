import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import SectionHeader from '../components/SectionHeader';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
function PopularDestinations() {
    return (
        <Container>
            <SectionHeader title="Popular Destions" linkText="View all" />
            <DestinationWrap>
                <Destination fullPage>
                    <img src="/img/img (7).jpg" alt="destination title"/>
                    <DetailWrap>
                        <TextWrap>
                            <Title>Dubai</Title>
                        </TextWrap>
                        <BottomTextWrap>
                            <Price>From $ 349</Price>
                            <ToursNumber>54 tours</ToursNumber>
                        </BottomTextWrap>
                    </DetailWrap>
                </Destination>
                <Destination double>
                    <img src="/img/img (16).jpg" alt="destination title"/>
                    <DetailWrap>
                        <TextWrap>
                            <Title>Dubai</Title>
                        </TextWrap>
                        <BottomTextWrap>
                            <Price>From $ 349</Price>
                            <ToursNumber>54 tours</ToursNumber>
                        </BottomTextWrap>
                    </DetailWrap>
                </Destination>
                <Destination double>
                    <img src="/img/img (10).jpg" alt="destination title"/>
                    <DetailWrap>
                        <TextWrap>
                            <Title>Dubai</Title>
                        </TextWrap>
                        <BottomTextWrap>
                            <Price>From $ 349</Price>
                            <ToursNumber>54 tours</ToursNumber>
                        </BottomTextWrap>
                    </DetailWrap>
                </Destination>
                <Destination triple>
                    <img src="/img/img (11).jpg" alt="destination title"/>
                    <DetailWrap>
                        <TextWrap>
                            <Title>Dubai</Title>
                        </TextWrap>
                        <BottomTextWrap>
                            <Price>From $ 349</Price>
                            <ToursNumber>54 tours</ToursNumber>
                        </BottomTextWrap>
                    </DetailWrap>
                </Destination>
                <Destination triple>
                    <img src="/img/img (15).jpg" alt="destination title"/>
                    <DetailWrap>
                        <TextWrap>
                            <Title>Dubai</Title>
                        </TextWrap>
                        <BottomTextWrap>
                            <Price>From $ 349</Price>
                            <ToursNumber>54 tours</ToursNumber>
                        </BottomTextWrap>
                    </DetailWrap>
                </Destination>
                <Destination triple>
                    <img src="/img/img (19).jpg" alt="destination title"/>
                    <DetailWrap>
                        <TextWrap>
                            <Title>Dubai</Title>
                        </TextWrap>
                        <BottomTextWrap>
                            <Price>From $ 349</Price>
                            <ToursNumber>54 tours</ToursNumber>
                        </BottomTextWrap>
                    </DetailWrap>
                </Destination>
            </DestinationWrap>
        </Container>
    )
}
const Container = styled.section`

`;
const DestinationWrap = styled.div`

    ${tw`
        py-4
    `}
    ${
        tw`
            grid grid-cols-12 gap-5
        `
    }
`;
const Destination = styled.a`
    height: 350px;
    color: white;
    position: relative;
    justify-content: center;
    align-items: flex-end;
    display: flex;
    ${tw`
    cursor-pointer
        rounded-lg
    `}

    img{
        object-fit: cover;
        ${tw`
            rounded-lg
            opacity-70
            h-full
            w-full
        `}
    }
    
    ${props => props.fullPage ? 
        tw`
            col-span-6
            md:col-span-12
        `
    : false }

    ${props => props.double ? 
        tw`
            col-span-6
        `
    : false }

    ${props => props.triple ? 
        tw`
            col-span-6
            md:col-span-4
        `
    : false }
`;
const DetailWrap = styled.div`
    z-index: 3;
    position: absolute;
    justify-content: flex-end;
    align-items: flex-end;
    ${tw`
        p-3
        md:p-8
        w-full
    `}
`;
const TextWrap = styled.div`
    ${tw`
        mb-3
    `}
`;
const Title = styled.h3`
    ${tw`
        font-bold
        text-2xl
        md:text-5xl
    `}
`;
const BottomTextWrap = styled.div`
    ${tw`
        flex
        justify-between
        text-lg
        md:text-2xl
    `}
`;
const Price = styled.h3`

`;
const ToursNumber = styled.h3`

`;
export default PopularDestinations
