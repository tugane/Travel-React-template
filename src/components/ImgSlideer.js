import React from 'react'
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import tw from "twin.macro";
import AOS from 'aos';

function ImgSlider (props) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <TopSliderText>
            <p>Hot Places</p>
            <h2>Mykonos Island</h2>
            <BottomSliderText>
              <TourDetail>
                <p>Price</p>
                <h2>$ 720</h2>
                <p>7 days tour <span>for 3 person</span></p>
              </TourDetail>
              <TourDetail>
                <p>5 star</p>
                <h2>Hotel</h2>
                <p>Hotels <span>of your choice</span></p>
              </TourDetail>
              <TourDetail>
                <p>Flight date</p>
                <h2>09</h2>
                <p>September <span>or letter</span></p>
              </TourDetail>
            </BottomSliderText>
          </TopSliderText>
          <img src="/img/img (18).jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <TopSliderText>
            <p>Hot Places</p>
            <h2>Mykonos Island</h2>
            <BottomSliderText>
              <TourDetail>
                <p>Price</p>
                <h2>$ 720</h2>
                <p>7 days tour <span>for 3 person</span></p>
              </TourDetail>
              <TourDetail>
                <p>5 star</p>
                <h2>Hotel</h2>
                <p>Hotels <span>of your choice</span></p>
              </TourDetail>
              <TourDetail>
                <p>Flight date</p>
                <h2>09</h2>
                <p>September <span>or letter</span></p>
              </TourDetail>
            </BottomSliderText>
          </TopSliderText>
          <img src="/img/img (13).jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <TopSliderText>
            <p>Hot Places</p>
            <h2>Mykonos Island</h2>
            <BottomSliderText>
              <TourDetail>
                <p>Price</p>
                <h2>$ 720</h2>
                <p>7 days tour <span>for 3 person</span></p>
              </TourDetail>
              <TourDetail>
                <p>5 star</p>
                <h2>Hotel</h2>
                <p>Hotels <span>of your choice</span></p>
              </TourDetail>
              <TourDetail>
                <p>Flight date</p>
                <h2>09</h2>
                <p>September <span>or letter</span></p>
              </TourDetail>
            </BottomSliderText>
          </TopSliderText>
          <img src="/img/img (19).jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
    @media(max-width: 768px) {
      left: -10px;
    }
  }

  .slick-next {
    right: -75px;
    @media(max-width: 768px) {
      right: -5px;
    }
  }
  
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 16px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    margin: 5px;
    max-height: calc(100vh - 120px);
    align-items: center;
    overflow: hidden;

    img {
      margin-top: auto;
      margin-bottom: auto;
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }

    &:hover {
      padding: 0;
      border: 4px solid;
      ${tw`
        border-yellow
      `}
      transition-duration: 150ms;
    }
  }
`;

const TopSliderText = styled.div`
  ${tw`
    w-full
    p-10
    text-center
    items-center
    bg-dark
    bg-opacity-20
    h-full
  `}
  opacity: 1;
  position: absolute;
  color: white;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  line-height: 50px;
  p{
    ${tw`
      my-auto
      text-base
      md:text-2xl
    `}
  }
  h2{
    ${tw`
      lg:text-5xl
      text-2xl
      my-auto
    `}
    }
`;

const BottomSliderText = styled.div`
  ${tw`
    w-full
    flex
    justify-between
    absolute inset-x-0 bottom-5
    px-5
  `
  }
  line-height: 20px;
`;
const TourDetail = styled.div`

`;
export default ImgSlider;
