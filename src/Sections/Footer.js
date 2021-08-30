import React, {useEffect} from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaLinkedinIn, FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'
import AOS from 'aos';
function Footer() {
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    }, []);
    return (
        <Container> 
            <FooterWrap>
                <InformationWrap>
                    <img data-aos="fade-up" src="/img/logo.png"/>
                    <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi error magni architecto, dolore, dicta ut laudantium quo porro commodi enim dignissimos at. Totam in consectetur, officia non ullam ratione sed.</p>
                    <SocialIconWrap>
                        <IconBtn data-aos="fade-up">
                            <FaFacebookF/>
                        </IconBtn>
                        <IconBtn data-aos="fade-up">
                            <FaTwitter/>
                        </IconBtn>
                        <IconBtn data-aos="fade-up">
                            <FaInstagram/>
                        </IconBtn>
                        <IconBtn data-aos="fade-up">
                            <FaGooglePlusG/>
                        </IconBtn>
                        <IconBtn data-aos="fade-up">
                            <FaLinkedinIn/>
                        </IconBtn>
                    </SocialIconWrap>
                </InformationWrap>
                <ContactWrap>
                        <h2 data-aos="fade-up">Contact us</h2>
                        <AddressWrap>
                            <ContactIconWrap data-aos="fade-up">
                                <FaMapMarkerAlt/>
                            </ContactIconWrap>
                            <Link data-aos="fade-up" to="#">KG 34 Ave, Gasabo - Kimihurura, Rwanda</Link>
                        </AddressWrap>
                        <AddressWrap>
                            <ContactIconWrap data-aos="fade-up">
                                <FaRegEnvelope/>
                            </ContactIconWrap>
                            <Link data-aos="fade-up" to="#">info@ttravel.com</Link>
                        </AddressWrap>
                        <AddressWrap>
                            <ContactIconWrap data-aos="fade-up">
                                <FaPhoneAlt/>
                            </ContactIconWrap>
                            <Link data-aos="fade-up" to="#">+001 827 322 827</Link>
                        </AddressWrap>
                </ContactWrap>
                <QuickLinkWrap>
                        <h2 data-aos="fade-up">Quick Link</h2>
                        <StyledLink data-aos="fade-up" to="#">Home</StyledLink>
                        <StyledLink data-aos="fade-up" to="#">Destination</StyledLink>
                        <StyledLink data-aos="fade-up" to="#">Contact</StyledLink>
                        <StyledLink data-aos="fade-up" to="#">Tours</StyledLink>
                        <StyledLink data-aos="fade-up" to="#">Blog</StyledLink>
                </QuickLinkWrap>
            </FooterWrap>
            <CopyrightWriper>
                <p> &copy; T-Travel 2021 allright reserved. DesignedBy <a href="mailto:tooamiel@gmail.com" target="_blank">Tugane Amiel</a> </p>
            </CopyrightWriper>
        </Container>
    )
}

const Container = styled.footer`
    background-image: url('/img/img (17).jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    ${tw`
        bg-opacity-60
        relative
        text-white
        overflow-hidden
        mt-10    
    `}
`;
const FooterWrap = styled.div`
    ${tw`
        pt-16
        px-10
        lg:pl-20
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-10   
        bg-dark
        bg-opacity-80
    `}
`;
const InformationWrap = styled.div`
    ${tw`
        items-center
    `}
    p{  
        ${tw`
            text-xl
            py-8
        `}
    }
    
`;
const SocialIconWrap = styled.div`
    ${tw`
        flex
        text-xl
    `}
`;
const IconBtn = styled.div`
    ${tw`
        cursor-pointer
        bg-white
        rounded-full
        p-2
        mr-5
        text-dark
    `}
`;
const ContactWrap = styled.div`
    ${tw`
        text-xl
    `}
    h2{
        ${tw`
            mx-auto
            text-3xl
            font-bold
            mb-8
        `}
    }
`;
const AddressWrap = styled.div`
    ${tw`
        flex
        items-center
        py-2
        mx-auto
    `}
`;
const ContactIconWrap= styled.div`
    ${tw`
        mr-4
    `}
`;
const QuickLinkWrap = styled.div`
    
    h2{
        ${tw`
            text-3xl
            font-bold
            pb-8
        `}
    }
`;
const StyledLink = styled(Link)`
    ${tw`
        block
        text-xl 
        py-3   
    `}
    
`;
const CopyrightWriper= styled.div`
    ${tw`
        pb-6
        px-10
        bg-dark
        bg-opacity-80
        w-full
        text-center
        flex
        justify-center
    `}
    p{
        ${tw`
            mx-auto
            mt-16
            text-lg
            md:flex
            items-center
        `}
        a{
            ${tw`
                font-bold
                ml-2
            `}
        }
    }
`;
export default Footer
