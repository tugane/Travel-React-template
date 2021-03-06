import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import Offer from '../components/Offer';
import SectionHeader from '../components/SectionHeader';
function SpecialOffer() {
    return (
        <Container>
            <SectionHeader title="Special Offers" linkText="View all"/>
            <Wrap>
                <Offer location="Venice" country="France" img="/img/img (2).jpg"/>
                <Offer location="Venice" country="France" img="/img/img (1).jpg"/>
                <Offer location="Venice" country="France" img="/img/img (4).jpg"/>
                <Offer location="Venice" country="France" img="/img/img (3).jpg"/>
            </Wrap>
        </Container>
    )
}

const Container = styled.section`
    ${tw`
        pb-5
        text-dark
        dark:text-white
    `}
`;
const Wrap = styled.div`
    ${tw`
        grid 
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4 
        gap-4
    `}
`;
export default SpecialOffer
