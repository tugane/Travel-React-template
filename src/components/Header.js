import React,{useState} from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { AiOutlineClose } from "react-icons/ai";
import { FaBars,FaSearch } from "react-icons/fa";

function Header() {
    const [BurgerStatus, SetBurgerStatus] = useState(false);
    return (
        <HomeHeader>
        <Nav>
            <Logo src="/img/logo.png"/>
            <NavMenu>
                <a href="#">
                    <span>Home</span>
                </a>
                <a href="#">
                    <span>Destination</span>
                </a>
                <a href="#">
                    <span>Tour Package</span>
                </a>
                <a href="#">
                    <span>Contact</span>
                </a>
                <a href="#">
                    <span>About us</span>
                </a>
            </NavMenu>
            <RightMenu>
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
            <a href="#">
                <span>Home</span>
            </a>
            <a href="#">
                <span>Destination</span>
            </a>
            <a href="#">
                <span>Tour Package</span>
            </a>
            <a href="#">
                <span>Contact</span>
            </a>
            <a href="#">
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
`;
const Logo = styled.img`
    width: 80px;
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
        text-transform: uppercase;

        span{
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 0.2px;
            line-height: 2px 0px;
            white-space: nowrap;
            position: relative;

        &:before{
            background-color: rgb(249, 249, 249);
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
        bg-dark
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
            color: rgb(249, 249, 249);
            font-size: 15px;
            letter-spacing: 0.2px;
            line-height: 20px 0px;
            white-space: nowrap;
            position: relative;

        &:before{
            background-color: rgb(249, 249, 249);
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
    color:white;
    ${tw`
        lg:hidden
        flex
    `}
    span{
        cursor: pointer;
        margin-left: 20px;
    }
`;
const CloseMobile = styled.div`
    margin-bottom: 40px;
    color: white;
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
