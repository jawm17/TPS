import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import f from "../../assets/facebook.png";
import i from "../../assets/instagram.png";
import y from "../../assets/yelp.png";
import { Wave } from "../../components/WavesComp";
import quotation from "../../assets/quotation.png";

import "./aboutStyle.css";
export default function About() {
  const [highlight, setHighlight] = useState(0);
  return (
    <>
      <Header page={"about"} />
      <div id="aboutContent">
        {/* hero */}
        <div id="aboutHero">
          <div id="aboutinnerHero">
            <h2>About Us</h2>
            <p>
              Redefining luxury, one pool at a time! Call now at (512)200-4244
            </p>
            {/* call btn here */}
          </div>
        </div>
        {/* Why we created Texas Pool Services? */}
        <div id="whyConatiner">
          <Wave fill="white" />
          <Wave idName="waveFlip" fill="#ffffff7c" />

          {/* Wave SVG */}

          {/* sub */}
          <h4>THE LEGACY OF EXCELLENCE</h4>
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
        {/* Our Service Areas */}
        <div id="ourAboutServiceConatiner">
          <Wave fill="#24337A" />
          <div id="section1">
            <div id="section1Flex">
              <div id="section1Area">
                <div id="section1TopText">Our Service Areas</div>
              </div>
            </div>
            <div id="section1ImgFlex">
              <div id="section1ImgArea">
                <div
                  className="section1Highlight"
                  id={highlight === 1 ? "highlightOpen" : ""}
                  onMouseEnter={() => setHighlight(1)}
                  onMouseLeave={() => setHighlight(0)}
                >
                  <div className="highlightBlur">
                    <div className="highlightFade">
                      <div className="highlightTitle">New Pool Construction</div>
                    </div>
                    <div className="learnMoreHighlight">
                      <div className="highlightInfo">
                      Austin , Georgetown, Round Rock, Cedar Park, Leander, Pflugerville, Salado, Copperas Cove, Liberty Hill, Burnet, Marble Falls, Dripping Springs, Wimberly, Blanco, Buda, Kyle, New Braunfels, Bastrop, Dale, Elgin, Manor.
                      </div>
                    </div>
                    <div className="learnMoreBtn">
                      <div>show {highlight === 1 ? "less" : "more"}</div>
                      <svg
                        id="learnMoreIcon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className="section1Highlight"
                  id={highlight === 2 ? "highlightOpen" : ""}
                  onMouseEnter={() => setHighlight(2)}
                  onMouseLeave={() => setHighlight(0)}
                >
                  <div className="highlightBlur">
                    <div className="highlightFade">
                      <div className="highlightTitle">Swimming Pool Renovations</div>
                    </div>
                    <div className="learnMoreHighlight">
                      <div className="highlightInfo">
                      Austin , Georgetown, Round Rock, Cedar Park, Leander, Pflugerville, Salado, Copperas Cove, Liberty Hill, Burnet, Marble Falls, Dripping Springs, Wimberly, Blanco, Buda, Kyle, New Braunfels, Bastrop, Dale, Elgin, Manor.
                      </div>
                    </div>
                    <div className="learnMoreBtn">
                      <div>show {highlight === 2 ? "less" : "more"}</div>
                      <svg
                        id="learnMoreIcon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className="section1Highlight"
                  id={highlight === 3 ? "highlightOpen" : ""}
                  onMouseEnter={() => setHighlight(3)}
                  onMouseLeave={() => setHighlight(0)}
                >
                  <div className="highlightBlur">
                    <div className="highlightFade">
                      <div className="highlightTitle">Maintenance Service Areas</div>
                    </div>
                    <div className="learnMoreHighlight">
                      <div className="highlightInfo">
                      Austin , Georgetown, Round Rock, Cedar Park, Leander, Pflugerville.
                      </div>
                    </div>
                    <div className="learnMoreBtn">
                      <div>show {highlight === 3 ? "less" : "more"}</div>
                      <svg
                        id="learnMoreIcon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className="section1Highlight"
                  id={highlight === 4 ? "highlightOpen" : ""}
                  onMouseEnter={() => setHighlight(4)}
                  onMouseLeave={() => setHighlight(0)}
                >
                  <div className="highlightBlur">
                    <div className="highlightFade">
                      <div className="highlightTitle">Repairs</div>
                    </div>
                    <div className="learnMoreHighlight">
                      <div className="highlightInfo">
                      Austin , Georgetown, Round Rock, Cedar Park, Leander, Pflugerville, Salado, Copperas Cove, Liberty Hill, Burnet, Marble Falls, Dripping Springs, Wimberly, Blanco, Buda, Kyle, New Braunfels, Bastrop, Dale, Elgin, Manor.
                      </div>
                    </div>
                    <div className="learnMoreBtn">
                      <div>show {highlight === 4 ? "less" : "more"}</div>
                      <svg
                        id="learnMoreIcon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* National Plaster Council */}
        <div id="nationPlasterConatiner">
          <Wave fill="white" />
          <div id="nationalWords" >
          <h3>National Plaster Council</h3>
          <p>
            The NPC professionals have spent years of their lives studying and
            documenting why things happen, the reactions of cements with certain
            water, the chemical science behind pools, and more. We use their
            knowledge and case studies to make sure our staff is trained to
            respond to your pools issues. Which in turns will keep your pool
            looking beautiful for years to come!
          </p>
          {/* button */}
          <a href="https://www.npconline.org/"><div id="nationBtn">
LEARN MORE </div></a>
        </div>
        <div id="nationalImg">

        </div>
        {/* footer shit */}
      </div>
      <div id="nationalReviewscontainer" >
      <Wave fill="#24337A" />
      <div id="reviewSub">
                A Reputation You Can Count On
            </div>
            <div id="reviewTitle">
                Explore Some of Our Testimonials!
            </div>
            <div id="reviewSection">
                <div id="reviewSectionInner">
                    <div className="reviewTile">
                        <img className="reviewQuoteImg" src={quotation} alt="quote"></img>
                        <div className="reviewText">
                            We are very pleased with the work that Chatham Electric did on our house build. We did not have power to our property till Hans Hubbard installed the ground wire and panel. If you need an electrician we highly recommend him.
                        </div>
                        <div className="reviewUser">
                            John Taylor
                        </div>
                        <div className="stars">
                            <svg id="reviewStar" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                            <svg id="reviewStar" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                            <svg id="reviewStar" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                            <svg id="reviewStar" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                            <svg id="reviewStar" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="reviewTile">
                        <img className="reviewQuoteImg" src={quotation} alt="quote"></img>
                        <div className="reviewText">
                            We are very pleased with the work that Chatham Electric did on our house build. We did not have power to our property till Hans Hubbard installed the ground wire and panel. If you need an electrician we highly recommend him.
                        </div>
                        <div className="reviewUser">
                            John Taylor
                        </div>
                        <div className="stars">
                            <svg id="reviewStar" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                            <svg id="reviewStar" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                            <svg id="reviewStar" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                            <svg id="reviewStar" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                            <svg id="reviewStar" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="reviewTile">
                        <img className="reviewQuoteImg" src={quotation} alt="quote"></img>
                        <div className="reviewText">
                            We are very pleased with the work that Chatham Electric did on our house build. We did not have power to our property till Hans Hubbard installed the ground wire and panel. If you need an electrician we highly recommend him.
                        </div>
                        <div className="reviewUser">
                            John Taylor
                        </div>
                        <div className="stars">
                            <svg id="reviewStar" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                            <svg id="reviewStar" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                            <svg id="reviewStar" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                            <svg id="reviewStar" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                            <svg id="reviewStar" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
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
                    <div className="footerBtn">
                        HOME
                    </div>
                    <div className="footerBtn">
                        BUILDS
                    </div>
                    <div className="footerBtn">
                        SERVICES
                    </div>
                    <div className="footerBtn">
                        REMODLING
                    </div>
                    <div className="footerBtn">
                        ABOUT
                    </div>
                </div>
                <div id="footerText2">
                    512 820 7434 | INFO@TEXASPOOLSERVICES.COM
                </div>
            </div>
            </div>
    </>
  );
}
