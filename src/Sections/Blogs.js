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
                <Blog title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui." img="/img/img (15).jpg"/>
                <Blog title="Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." img="/img/img (1).jpg"/>
                <Blog title="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." img="/img/img (4).jpg"/>
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
