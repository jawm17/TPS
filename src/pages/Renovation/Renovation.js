import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import CallBtn from "../../components/CallBtn";
import design from "../../assets/design.png";
import tile from "../../assets/tile.png";
import lights from "../../assets/lights.png";
import deck from "../../assets/deck.png";
import paint from "../../assets/paint.png";
import lifesaver from "../../assets/lifesaver.png";
import { Wave } from "../../components/WavesComp";
import ContactForm from "../../components/ContactForm";
import "./renovationStyle.css";

export default function Renovation() {

    function beforeAfter() {
        document.getElementById('compare').style.width = document.getElementById('slider').value + "%";
      }

    return (
        <div>
            <Header page={"renovation"} />
            <CallBtn />
            <div id="buildsSectionHero">

                <div id="slidesArea">
                    <div className="mySlides fade">
                        <img alt="swimming pool 1" className="slidesImg" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/pool%202.jpeg/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600" />
                    </div>

                    <div className="mySlides fade">
                        <img alt="swimming pool 2" className="slidesImg" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/Plaster%20tile%20coping.jpg/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600" />
                    </div>

                    <div className="mySlides fade">
                        <img alt="swimming pool 3" className="slidesImg" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/blob-646fbb9.png/:/cr=t:33.26%25,l:0%25,w:100%25,h:50%25/rs=w:1200,h:600,cg:true" />
                    </div>
                </div>


                <div id="buildsHeroFlex">
                    <div id="buildsHeroLeft">
                        <div id="buildsHeroLeftInner">
                            <div id="buildsHeroTitle">
                                Pool Renovation
                            </div>
                            <div id="buildsHeroSub">
                                Texas Pool Services offers custom pool construction or a series of pre designed builds to fit all budgetary needs!
                            </div>
                        </div>
                    </div>
                </div>
                {/* <svg id="buildWave" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,96L80,106.7C160,117,320,139,480,144C640,149,800,139,960,122.7C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
                {/* <svg id="buildWave" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L80,202.7C160,181,320,139,480,149.3C640,160,800,224,960,213.3C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
                {/* <svg id="buildWave" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L80,202.7C160,181,320,139,480,149.3C640,160,800,224,960,213.3C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}


            </div>

            {/* 
            <div id="buildsIntro">
                <div id="buildsIntroTop">
                    CRAFTING EXTRAORDINARY POOLSCAPES
                </div>
                <div id="buildsIntroTitle">
                    Texas Pool Services, Your Premier Pool Builders
                </div>
                <div id="buildsIntroBottom">
                    Texas Pool Services is the trusted name in pool construction, renowned for creating exceptional swimming pools that surpass expectations. As the leading pool builder in Austin and Buda, we are dedicated to bringing your pool dreams to life. Our team of expert pool builders combines innovative design, quality craftsmanship, and personalized service to deliver pools that exceed your wildest imagination.
                </div>
                <div id="awardsFlexOuter">
                    <div id="awardsFlex">
                        <img className="awardItem" src="https://0f26bd.a2cdn1.secureserver.net/wp-content/uploads/google-guarantee-service-400x403.png"></img>
                        <img className="awardItem" src="https://0f26bd.a2cdn1.secureserver.net/wp-content/uploads/CBPofficial.png"></img>
                        <img className="awardItem" id="award3" src="https://0f26bd.a2cdn1.secureserver.net/wp-content/uploads/Top502023-150x150.png"></img>
                    </div>
                </div>
            </div> */}

            <div id="renSection">
                <Wave fill="#0693e3" />
                <Wave idName="bottomWave" fill="var(--blueMain)" />
                <div id="renSectionInner">
                    <div id="renTitle">
                        Our Pool Renovation Services
                    </div>
                    <div id="renSub">
                        At Texas Pool Services, we understand that every pool is unique, and so are your renovation needs. Whether your pool requires a complete overhaul or a few strategic enhancements, our skilled team is here to bring your vision to life. Our comprehensive pool renovation services include the following.
                    </div>

                    <div id="renGrid">
                        <div className="renGridItem">

                            <img id="renIcon" src={design}></img>

                            <div className="renItemTitle">
                                DESIGN CONSULTATION
                            </div>

                            <div className="renItemDescription">
                                Our experienced pool designers will work closely with you to understand your renovation goals and preferences. We’ll assess the condition of your pool and provide expert recommendations to maximize its potential.
                            </div>

                        </div>
                        <div className="renGridItem">

                            <img id="renIcon" src={tile}></img>
                            <div className="renItemTitle">
                                SURFACE REFINISHING
                            </div>

                            <div className="renItemDescription">
                                Over time, pool surfaces can become worn, faded, or damaged. We offer various options for surface refinishing, including plaster, pebble, and tile, to give your pool a fresh and vibrant appearance.
                            </div>

                        </div>
                        <div className="renGridItem">

                            <img id="renIcon" src={lifesaver}></img>

                            <div className="renItemTitle">
                                EQUIPMENT UPGRADES
                            </div>

                            <div className="renItemDescription">
                                Enhance the functionality and efficiency of your pool with state-of-the-art equipment upgrades. From energy-efficient pumps and filters to automated control systems, we’ll recommend the best options for your needs.
                            </div>

                        </div>
                        <div className="renGridItem">

                            <img id="renIcon" src={lights}></img>

                            <div className="renItemTitle">
                                LIGHTING AND WATER FEATURES
                            </div>

                            <div className="renItemDescription">
                                Illuminate your pool and create a captivating ambiance with modern lighting solutions. We can also incorporate water features such as waterfalls, fountains, and cascades to add a touch of elegance and tranquility.
                            </div>

                        </div>
                        <div className="renGridItem">

                            <img id="renIcon" src={deck}></img>

                            <div className="renItemTitle">
                                DECK AND COPING RENOVATION
                            </div>

                            <div className="renItemDescription">
                                Enhance the aesthetics and safety of your pool area with deck and coping renovations. We offer a variety of materials and designs to create a seamless and visually appealing transition from your pool to the surrounding space.
                            </div>

                        </div>
                        <div className="renGridItem">

                            <img id="renIcon" src={paint}></img>
                            <div className="renItemTitle">
                                CUSTOMIZATION OPTIONS
                            </div>

                            <div className="renItemDescription">
                                Add personalized touches to your renovated pool with custom features such as tanning ledges, swim-up bars, built-in seating, and fire pits. Our team will work closely with you to incorporate your desired elements into the design.
                            </div>

                        </div>
                    </div>
                </div>
            </div>
         
            <div id="beforeAfter">
            <div id="beforeAfterTitle">
                    Before and After
                </div>
                <div class="container">
                    <figure>
                        <div id="compare"></div>
                    </figure>
                    <input onInput={() => beforeAfter()} onChange={() => beforeAfter()}  type="range" min="0" max="100" value="50" id="slider" />
                </div>
            </div>





            <div id="partnersSection">
                <div id="partnerSectionInner">
                    <div id="partnersTitle">
                        Our Partners
                    </div>
                    <div id="partnersFlex">
                        <img className="partnersLogo" id="logo1" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/FF-blends-alternate-for-print.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:376,h:200,cg:true"></img>
                        <img className="partnersLogo" id="logo2" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/npt-logo.svg/:/cr=t:0%25,l:0.09%25,w:99.82%25,h:100%25/rs=w:288,h:164,cg:true"></img>
                        <img className="partnersLogo" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/pentair.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:200,cg:true"></img>
                        <img className="partnersLogo" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/NPC.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true"></img>
                        <img className="partnersLogo" src="https://cdn.worldvectorlogo.com/logos/hayward.svg"></img>
                        <img className="partnersLogo" src="https://lirp.cdn-website.com/b0bfdde1/dms3rep/multi/opt/Jandy_Black-960w.png"></img>
                    </div>
                </div>
            </div>



            {/* <div id="poolRenovationSection">
                <img id="renovationImg" src="https://www.longhornpools.com/wp-content/uploads/2023/06/pool-renovation-company-austin-tx01.jpg"></img>
                <div id="renovationImgBlur"></div>
                <div id="poolRenovationSectionOuter">
                    <div id="poolRenovationSectionInner">

                    </div>
                </div>
                <div id="renovationSectionTitle">
                    Pool Renovations
                </div>
            </div> */}
            {/* <div id="fullSection">
                <div id="fullSectionLeft">
                    <img id="fullSectionImg" alt="inifinity edge pool" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/blob-646fbb9.png/:/cr=t:33.26%25,l:0%25,w:100%25,h:50%25/rs=w:1200,h:600,cg:true"></img>
                    <div id="fullSectionBlock">
                        <div>
                            <div id="fullTitle">
                                The Best in Texas!
                            </div>
                            <div id="fullSub">
                                Our experienced electricians are highly trained in all aspects of electrical service, from office lighting and security systems to emergency repair.
                            </div>
                            <div id="fullBookBtn">
                                <div>
                                    Book now
                                </div>
                                <svg id="bookNowIcon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="fullSectionRight">
                </div>
            </div> */}
               <div id="formSection">
                <Wave fill="#0070ff" />
                <ContactForm />
            </div>
            <Footer />
        </div>
    );
}