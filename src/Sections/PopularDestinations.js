import React, {useEffect} from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import SectionHeader from '../components/SectionHeader';
import AOS from 'aos';
function PopularDestinations() {
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    }, []);
    
    return (
        <Container>
            <SectionHeader title="Popular Destions" linkText="View all" />
            <DestinationWrap>
                <Destination data-aos="fade-up" fullPage>
                    <img src="/img/img (7).jpg" alt="destination title"/>
                    <DetailWrap>
                        <TextWrap>
                            <Title data-aos="fade-up">Dubai</Title>
                        </TextWrap>
                        <BottomTextWrap>
                            <Price data-aos="fade-up">From $ 349</Price>
                            <ToursNumber data-aos="fade-up">54 tours</ToursNumber>
                        </BottomTextWrap>
                    </DetailWrap>
                </Destination>
                <Destination double data-aos="fade-up">
                    <img src="/img/img (16).jpg" alt="destination title"/>
                    <DetailWrap>
                        <TextWrap>
                            <Title data-aos="fade-up">Dubai</Title>
                        </TextWrap>
                        <BottomTextWrap>
                            <Price data-aos="fade-up">From $ 349</Price>
                            <ToursNumber data-aos="fade-up">54 tours</ToursNumber>
                        </BottomTextWrap>
                    </DetailWrap>
                </Destination>
                <Destination double data-aos="fade-left">
                    <img src="/img/img (10).jpg" alt="destination title"/>
                    <DetailWrap>
                        <TextWrap>
                            <Title data-aos="fade-up">Dubai</Title>
                        </TextWrap>
                        <BottomTextWrap>
                            <Price data-aos="fade-up">From $ 349</Price>
                            <ToursNumber data-aos="fade-up">54 tours</ToursNumber>
                        </BottomTextWrap>
                    </DetailWrap>
                </Destination>
                <Destination triple data-aos="zoom-in-right">
                    <img src="/img/img (11).jpg" alt="destination title"/>
                    <DetailWrap>
                        <TextWrap>
                            <Title data-aos="fade-up">Dubai</Title>
                        </TextWrap>
                        <BottomTextWrap>
                            <Price data-aos="fade-up">From $ 349</Price>
                            <ToursNumber data-aos="fade-up">54 tours</ToursNumber>
                        </BottomTextWrap>
                    </DetailWrap>
                </Destination>
                <Destination triple data-aos="fade-up">
                    <img src="/img/img (15).jpg" alt="destination title"/>
                    <DetailWrap>
                        <TextWrap>
                            <Title data-aos="fade-up">Dubai</Title>
                        </TextWrap>
                        <BottomTextWrap>
                            <Price data-aos="fade-up">From $ 349</Price>
                            <ToursNumber data-aos="fade-up">54 tours</ToursNumber>
                        </BottomTextWrap>
                    </DetailWrap>
                </Destination>
                <Destination triple data-aos="zoom-in-left">
                    <img src="/img/img (19).jpg" alt="destination title"/>
                    <DetailWrap>
                        <TextWrap>
                            <Title data-aos="fade-up">Dubai</Title>
                        </TextWrap>
                        <BottomTextWrap>
                            <Price data-aos="fade-up">From $ 349</Price>
                            <ToursNumber data-aos="fade-up">54 tours</ToursNumber>
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
            grid 
            lg:grid-cols-12
            grid-cols-6
            gap-5
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
        hover:rounded-xl
    `}
    
    &:hover{
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 4px solid #ffd700;
        transition-duration: 150ms;
        padding: 0;
    }

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
            lg:col-span-12
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
            lg:col-span-4
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
