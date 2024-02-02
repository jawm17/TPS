import React, { useState } from 'react';
import "./styles/reviewCardStyle.css";
import quotation from "../assets/quotation.png";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReviewTile = ({ reviewText, reviewUser, starCount }) => {
  const stars = Array(starCount).fill().map((_, i) => (
    <svg key={i} id="reviewStar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
    </svg>
  ));

  return (
    <div className="reviewTile">
      <img className="reviewQuoteImg" src={quotation} alt="quote" />
      <div className="reviewText">{reviewText}</div>
      <div className="reviewUser">{reviewUser}</div>
      <div className="stars">{stars}</div>
    </div>
  );
};

export default function ReviewSection({ }) {

  const reviews = [
    {
        reviewText:
            "Thrilled with Texas Pool Services' dedication to quality! They go above and beyond to ensure customer satisfaction.",
        reviewUser: "Robert Johnson",
        starCount: 5,
    },
    {
        reviewText:
            "Texas Pool Services made owning a pool hassle-free! Their knowledgeable staff keeps our pool pristine year-round.",
        reviewUser: "Chris Garcia",
        starCount: 5,
    },
    {
        reviewText:
            "Highly recommend Texas Pool Services! Their professionalism and reliability are unparalleled.",
        reviewUser: "Rachel Evans",
        starCount: 5,
    },
    {
        reviewText:
            "Thrilled with Texas Pool Services' dedication to quality! They go above and beyond to ensure customer satisfaction.",
        reviewUser: "Robert Johnson",
        starCount: 5,
    },
    {
        reviewText:
            "Texas Pool Services made owning a pool hassle-free! Their knowledgeable staff keeps our pool pristine year-round.",
        reviewUser: "Chris Garcia",
        starCount: 5,
    },
    {
        reviewText:
            "Highly recommend Texas Pool Services! Their professionalism and reliability are unparalleled.",
        reviewUser: "Rachel Evans",
        starCount: 5,
    },
];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div id="sliderContainer">
      <div className="fadeLeft"></div>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <ReviewTile key={index} {...review} />
        ))}
      </Slider>
      <div className="fadeRight"></div>
    </div>
  );
};
