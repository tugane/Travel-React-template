import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import Blog from '../components/Blog';
import SectionHeader from '../components/SectionHeader';

function Blogs() {
    return (
        <Container>
            <SectionHeader title="Our Latest Blogs" linkText="View all"/>
            <Wrap>
                <Blog title="Lorem ipsu" description="Lorem ipsum dolor sit amet, consectetur adipiscing elitnon proident, sunt in culpa qui adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." img="/img/img (15).jpg"/>
                <Blog title="Adipiscing" description="Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing elitnon proident, sunt in culpa qui." img="/img/img (1).jpg"/>
                <Blog title="Consectetur" description="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  id est laborum lorem ipsum dolor sit amet, consectetur adipiscing elitnon proident, sunt in culpa." img="/img/img (4).jpg"/>
            </Wrap>
        </Container>
    )
}

const Container = styled.section`

`;

const Wrap = styled.div`
    ${tw`
        grid 
        grid-cols-1
        md:grid-cols-3
        gap-3
    `}
`;
export default Blogs
