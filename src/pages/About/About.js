import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReviewSection from "../../components/ReviewSection";
import f from "../../assets/facebook.png";
import i from "../../assets/instagram.png";
import y from "../../assets/yelp.png";
import { Wave } from "../../components/WavesComp";
import HoverCardDiv from "../../components/HoverCardDiv";
import Logo from "../../assets/TPS_logo.png";

import "./aboutStyle.css";
export default function About() {
  const reviews = [
    {
      reviewText:
        "We are very pleased with the work that Chatham Electric did on our house build. We did not have power to our property till Hans Hubbard installed the ground wire and panel. If you need an electrician we highly recommend him.",
      reviewUser: "John Taylor",
      starCount: 5,
    },
    {
      reviewText:
        "We are very pleased with the work that Chatham Electric did on our house build. We did not have power to our property till Hans Hubbard installed the ground wire and panel. If you need an electrician we highly recommend him.",
      reviewUser: "John Taylor",
      starCount: 5,
    },
    {
      reviewText:
        "We are very pleased with the work that Chatham Electric did on our house build. We did not have power to our property till Hans Hubbard installed the ground wire and panel. If you need an electrician we highly recommend him.",
      reviewUser: "John Taylor",
      starCount: 5,
    },
  ];
  return (
    <>
      <Header page={"about"} />
      <div id="aboutContent">
        {/* hero */}
        <div id="aboutHero">
          <div id="aboutinnerHero">
            <h2>About Us</h2>
            <p>
              Redefining luxury, one pool at a time! Call now!<br/> (512) 200 - 4244
            </p>
            {/* call btn here */}
          </div>
        </div>
        {/* Why we created Texas Pool Services? */}
        <div id="whyConatiner">
          <Wave fill="white" />
          <Wave idName="waveFlip" fill="#ffffff7c" />
          <div id="whyConatinerInner">
          <div className="whyDivs1">
            <img src={Logo}/>
          </div>
          <div className="whyDivs2">
          {/* title */}
          <h3>Why we created Texas Pool Services?</h3>
          {/* store */}
          <p>
            Texas Pool Services was created to fill a void in the Austin area
            "Pool Company". Most companies focus on one area of excellence but
            we believe that doing it all sets us apart, so we specialize in it
            all. Texas Pool Services also believes education in this market is
            and has been lacking. Most "Pool Guys" will tell you their opinion
            and not follow the proven science your pool needs. We focus on
            education, not only ours but yours too! The more we all know the
            longer your hard earned money will last. Call Today to learn the
            Texas Pool Services way!
          </p>
          </div>
          </div>
        </div>
        {/* Our Service Areas */}
        <div id="ourAboutServiceConatiner">
          {/* <HoverCardDiv /> */}
          <div id="serviceCardContainer">
          <h2>Our Service Areas</h2>
            <div className="serviceCard">
              <h4>New Pool Construction</h4>
              <p>Austin , Georgetown, Round Rock, Cedar Park, Leander, Pflugerville, Salado, Copperas Cove, Liberty Hill, Burnet, Marble Falls, Dripping Springs, Wimberly, Blanco, Buda, Kyle, New Braunfels, Bastrop, Dale, Elgin, Manor.</p>
            </div>
            <div className="serviceCard">
              <h4>New Pool Construction</h4>
              <p>Austin , Georgetown, Round Rock, Cedar Park, Leander, Pflugerville, Salado, Copperas Cove, Liberty Hill, Burnet, Marble Falls, Dripping Springs, Wimberly, Blanco, Buda, Kyle, New Braunfels, Bastrop, Dale, Elgin, Manor.</p>
            </div>
            <div className="serviceCard">
              <h4>New Pool Construction</h4>
              <p>Austin , Georgetown, Round Rock, Cedar Park, Leander, Pflugerville, Salado, Copperas Cove, Liberty Hill, Burnet, Marble Falls, Dripping Springs, Wimberly, Blanco, Buda, Kyle, New Braunfels, Bastrop, Dale, Elgin, Manor.</p>
            </div>
            <div className="serviceCard">
              <h4>New Pool Construction</h4>
              <p>Austin , Georgetown, Round Rock, Cedar Park, Leander, Pflugerville, Salado, Copperas Cove, Liberty Hill, Burnet, Marble Falls, Dripping Springs, Wimberly, Blanco, Buda, Kyle, New Braunfels, Bastrop, Dale, Elgin, Manor.</p>
            </div>
          </div>
        </div>

        {/* National Plaster Council */}
          <div id="nationalConatiner">
          
          <div className="nationalDivs2">
          <h3>National Plaster Council</h3>
          <p>
              The NPC professionals have spent years of their lives studying and
              documenting why things happen, the reactions of cements with
              certain water, the chemical science behind pools, and more. We use
              their knowledge and case studies to make sure our staff is trained
              to respond to your pools issues. Which in turns will keep your
              pool looking beautiful for years to come!
            </p>
            <a href="https://www.npconline.org/">
              <div id="nationBtn">LEARN MORE </div>
            </a>
          </div>
          <div className="nationalDivs1">
            <img src="https://codypools.com/wp-content/uploads/usmapbase2023.png"/>
            {/* <div id="nationalImg"></div> */}

          </div>
        </div>
      
        <div id="aboutReviewscontainer">
          <Wave fill="#24337A" />
          <div id="reviewSub">A Reputation You Can Count On</div>
          <div id="reviewTitle">Explore Some of Our Testimonials!</div>
          <ReviewSection reviews={reviews} />
        </div>
      </div>
      <div id="footer" className="footerAbout">
        <Wave fill="white" />
        <div id="footerInner">
          {/* <img src={logo}></img> */}
          <div id="logoflex">
            <div id="logoFlexInner">
              <div className="footerLogoBtn">
                <img alt="facebook" className="footerLogoImg" src={f}></img>
              </div>
              <div className="footerLogoBtn">
                <img alt="instagram" className="footerLogoImg" src={i}></img>
              </div>
              <div className="footerLogoBtn">
                <img alt="yelp" className="footerLogoImg" src={y}></img>
              </div>
            </div>
          </div>
          <div id="footerText1">
            COPYRIGHT © 2023 TEXAS POOL SERVICES LLC - ALL RIGHTS RESERVED.
          </div>
          <div id="footerBtns">
            <div className="footerBtn">HOME</div>
            <div className="footerBtn">BUILDS</div>
            <div className="footerBtn">SERVICES</div>
            <div className="footerBtn">REMODLING</div>
            <div className="footerBtn">ABOUT</div>
          </div>
          <div id="footerText2">512 820 7434 | INFO@TEXASPOOLSERVICES.COM</div>
        </div>
      </div>
    </>
  );
}
