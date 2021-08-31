import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import AOS from 'aos';
import { AiOutlineClose } from "react-icons/ai";
import { HiSun,HiMoon } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import useDarkMode from '../hook/useDarkMode';
function Header() {
    const [colorTheme, setTheme] =  useDarkMode();
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    }, []);
    const [BurgerStatus, SetBurgerStatus] = useState(false);
    return (
        <HomeHeader>
        <Nav>
            {colorTheme == 'dark' ?
            <Logo data-aos="fade-up" src="/img/logo-dark.png"/>
            :
            <Logo data-aos="fade-up" src="/img/logo.png"/>
            }
            <NavMenu>
                <a data-aos="fade-up" href="/">
                    <span>Home</span>
                </a>
                <a data-aos="fade-up" href="#">
                    <span>Destination</span>
                </a>
                <a data-aos="fade-up" href="#">
                    <span>Tour Package</span>
                </a>
                <a data-aos="fade-up" href="#">
                    <span>Contact</span>
                </a>
                <a data-aos="fade-up" href="#">
                    <span>About us</span>
                </a>
            </NavMenu>
            <RightMenu data-aos="fade-up">
                <ThemeWrap>
                    {colorTheme == 'dark' ?
                        <Theme onClick={() => setTheme(colorTheme)}>
                            <HiMoon/>
                        </Theme>
                    :
                        <Theme onClick={() => setTheme(colorTheme)}>
                            <HiSun/>
                        </Theme>
                    }
                </ThemeWrap>
                <span onClick={() => SetBurgerStatus(true)}>
                    <FaBars></FaBars>
                </span>
            </RightMenu>
        </Nav>
        <MoblieNav show={BurgerStatus}>
            <CloseMobile>
                <span onClick={()=>SetBurgerStatus(false)}>
                    <AiOutlineClose></AiOutlineClose>
                </span>
            </CloseMobile>
            <a data-aos="fade-up" href="#">
                <span>Home</span>
            </a>
            <a data-aos="fade-up" href="#">
                <span>Destination</span>
            </a>
            <a data-aos="fade-up" href="#">
                <span>Tour Package</span>
            </a>
            <a data-aos="fade-up" href="#">
                <span>Contact</span>
            </a>
            <a data-aos="fade-up" href="#">
                <span>About us</span>
            </a>
        </MoblieNav>
        </HomeHeader>
    )
}

const HomeHeader = styled.header`

`;
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 80px;
    padding-right: 80px;
    height: 80px;
    font-family: 'Nunito', sans-serif;
    ${tw`
        dark:bg-dark
        bg-white
    `}
    
    @media(max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;
const Logo = styled.img`
    width: 100px;
    height: 40px;
`;

const NavMenu = styled.div`
    ${tw`
        lg:flex
        hidden
    `}

    align-items: center;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin:0px;
    padding:0px;
    position: relative;
    margin-right: auto;
    margin-left: 50px;
    
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        span{
            ${tw`
                dark:text-white
                text-dark
            `}
            font-size: 18px;
            letter-spacing: 0.2px;
            line-height: 2px 0px;
            white-space: nowrap;
            position: relative;

        &:before{
            background-color: #ffd700;
            border-radius: 0px 0px 4px 4px;
            bottom:  -6px;
            content: "";
            height: 2px;
            left: 0;
            opacity: 0;
            position: absolute;
            right: 0;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.90) 0s;
            visibility: hidden;
            width: auto;
        }
    }  
        &:hover {
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }
`;
const MoblieNav = styled.div`
   ${tw`
        lg:hidden
        bg-white
        dark:bg-dark
        fixed
        w-full
        p-7
    `}
    z-index: 2;
    height: 100vh;
    top:0;
    left:0;
    right:0;
    line-height: 40px;
    transform-origin: left center;
    transform: ${props => props.show ? 'scaleX(1)' : 'scaleX(0)'};
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.90) 0s;
    visibility: visible;
    a{
        ${tw`
            text-center
            font-bold
        `}
        margin-top: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 12px;
        text-transform: uppercase;
        span{
            ${tw`
                text-dark
                dark:text-white
            `}
            font-size: 15px;
            letter-spacing: 0.2px;
            line-height: 20px 0px;
            white-space: nowrap;
            position: relative;

        &:before{
            ${tw`
                bg-dark
                dark:bg-white
            `}
            border-radius: 0px 0px 4px 4px;
            bottom:  -6px;
            content: "";
            height: 2px;
            left: 0;
            
            opacity: 0;
            position: absolute;
            right: 0;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.90) 0s;
            visibility: hidden;
            width: auto;
        }
    }  
        &:hover {
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }
`;
const RightMenu = styled.div`
    ${tw`
        flex
        border-dark
        text-dark
        dark:border-white
        dark:text-white
        border-2
        lg:border-none
        text-xl
        rounded
        p-2
    `}
    span{
        ${tw`
            lg:hidden
            ml-5
        `}
        cursor: pointer;
    }
`;
const ThemeWrap = styled.div`
    ${tw`
        items-center
        mr-5
        relative
        flex
    `}
`;
const Theme = styled.div`
    ${tw`
        rounded
        absolute
        lg:dark:bg-white
        lg:dark:text-dark
        lg:bg-dark
        lg:text-white
        lg:p-1
        cursor-pointer
    `}
`;
const CloseMobile = styled.div`
    margin-bottom: 40px;
    ${tw`
        text-dark
        dark:text-white
    `}
    bottom: 0px;
    display: flex;
    justify-content: flex-end;
    text-align: center;
    span{
        cursor: pointer;
        font-size: x-large;
    }
`;
export default Header
