import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import sidebar1 from "../../assets/sidebar1.jpeg";
import sidebar2 from "../../assets/sidebar2.jpeg";
import sidebar3 from "../../assets/sidebar3.jpeg";
import CallBtn from "../../components/CallBtn";
import { Wave } from "../../components/WavesComp";
import ContactForm from "../../components/ContactForm";
import AboutCarousel from "../../components/AboutCarousel";
import TPS_logo from "../../assets/TPS_logo.png"
import ReviewSection from "../../components/ReviewSection";
import MapComponent from "../../components/MapComponent";
import "./about2Style.css";

export default function About2() {

    return (
        <div>
            <Header page={"about"} />
            <CallBtn />
            <div id="servicesHero">
                <img id="serviceHeroImg" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/62033232552__5BD0909A-9EAB-4FAF-8178-C5E502C1C.JPG/:/rs=w:2320,h:1740" alt="pool service"></img>
                <div id="buildsHeroFlex">
                    <div id="buildsHeroLeft">
                        <div id="buildsHeroLeftInner">
                            <div id="buildsHeroTitle">
                                About Us
                            </div>
                            <div id="buildsHeroSub">
                                Texas Pool Services is your premier destination for transforming ordinary backyards into extraordinary personal retreats.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <svg id="waveItem2" width="100%" height="100%" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 133.7333333333333,125.46666666666667 267.4666666666666,100.93333333333332 436,113 C 604.5333333333334,125.06666666666668 807.8666666666668,173.73333333333332 981,186 C 1154.1333333333332,198.26666666666668 1297.0666666666666,174.13333333333333 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#0693e3" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
            <svg id="waveItem" width="100%" height="100%" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 133.7333333333333,125.46666666666667 267.4666666666666,100.93333333333332 436,113 C 604.5333333333334,125.06666666666668 807.8666666666668,173.73333333333332 981,186 C 1154.1333333333332,198.26666666666668 1297.0666666666666,174.13333333333333 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#fff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg> */}

            <div id="aboutSectionMain">
                <Wave fill="#0693e3" />
                <Wave idName="bottomWave" fill="white" />
                <div id="aboutSectionInner">
                    <div id="aboutLeft">
                        <img id="aboutImg" src={TPS_logo}></img>
                    </div>
                    <div id="aboutRight">
                        <div id="aboutRightTitle">
                            Why we created Texas Pool Services?
                        </div>
                        <div id="aboutRightDescription">
                            Texas Pool Services was created to fill a void in the Austin area "Pool Company". Most companies focus on one area of excellence but we believe that doing it all sets us apart, so we specialize in it all. Texas Pool Services also believes education in this market is and has been lacking. Most "Pool Guys" will tell you their opinion and not follow the proven science your pool needs. We focus on education, not only ours but yours too! The more we all know the longer your hard earned money will last. Call Today to learn the Texas Pool Services way!
                        </div>
                    </div>
                </div>

            </div>
            <div id="aboutPortfolio">
                {/* <Wave fill="var(--blueMain)" /> */}
                <div id="portfolioTitle">
                    Our Work
                </div>
                <div id="portfolioSub">
                    At Texas Pool Services we take pride in our exceptional craftsmanship
                </div>
                <AboutCarousel />
            </div>
            {/* <div id="aboutNPCArea">
                <div id="aboutNPCAreaInner">

                </div>
            </div> */}
            <div id="aboutLocations">
                <div id="aboutLocationsTitle">
                    Our Locations
                </div>
                <div id="aboutMapContainer">
                    <div id="aboutMapContainerInner">
                        <MapComponent />
                    </div>
                </div>
            </div>
            <div id="landingReviewscontainer" className="reviewsContainersBlue">
                <div id="reviewSub">A Reputation You Can Count On</div>
                <div id="reviewTitle">Explore Some of Our Testimonials!</div>
                <ReviewSection />
            </div>
            <div id="formSection">
                <Wave fill="#0070ff" />
                <ContactForm />
            </div>
            <Footer />
        </div>
    );
}