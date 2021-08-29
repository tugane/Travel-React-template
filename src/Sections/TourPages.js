import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import SectionHeader from '../components/SectionHeader'
import Tour from '../components/Tour';

function TourPages() {
    return (
        <Container>
            <SectionHeader title="Tour Packages" linkText="View all"/>
            <Wrap>
                <Tour title="Hong Kong" activities="Iconic, Shopping, City Tours" price="$532" people="3 peoples" period="5 days" img="/img/img (2).jpg"/>
                <Tour title="Hong Kong" activities="Iconic, Shopping, City Tours" price="$532" people="3 peoples" period="5 days" img="/img/img (1).jpg"/>
                <Tour title="Hong Kong" activities="Iconic, Shopping, City Tours" price="$532" people="3 peoples" period="5 days" img="/img/img (4).jpg"/>
                <Tour title="Hong Kong" activities="Iconic, Shopping, City Tours" price="$532" people="3 peoples" period="5 days" img="/img/img (3).jpg"/>
            </Wrap>
        </Container>
    )
}

const Container = styled.section`

`;

const Wrap = styled.div`
    ${tw`
        grid 
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4 
        gap-3
    `}
`;
export default TourPages
