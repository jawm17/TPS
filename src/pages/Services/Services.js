import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import sidebar1 from "../../assets/sidebar1.jpeg";
import sidebar2 from "../../assets/sidebar2.jpeg";
import sidebar3 from "../../assets/sidebar3.jpeg";
import CallBtn from "../../components/CallBtn";
import { Wave } from "../../components/WavesComp";
import "./servicesStyle.css";

export default function Services() {

    return (
        <div>
            <Header page={"services"} />
            <CallBtn />
            <div id="servicesHero">
                <img id="serviceHeroImg" src="https://media.angi.com/s3fs-public/man-inspecting-swimming-pool.jpeg" alt="pool service"></img>
                <div id="buildsHeroFlex">
                    <div id="buildsHeroLeft">
                        <div id="buildsHeroLeftInner">
                            <div id="buildsHeroTitle">
                                Our Services
                            </div>
                            <div id="buildsHeroSub">
                                Texas Pool Services experts offer weekly maintenance packages starting $55 per stop without chemicals. We service the Austin, Round Rock, Pflugerville, Cedar Park, Leander, and Georgetown areas.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <svg id="waveItem2" width="100%" height="100%" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 133.7333333333333,125.46666666666667 267.4666666666666,100.93333333333332 436,113 C 604.5333333333334,125.06666666666668 807.8666666666668,173.73333333333332 981,186 C 1154.1333333333332,198.26666666666668 1297.0666666666666,174.13333333333333 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#0693e3" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
            <svg id="waveItem" width="100%" height="100%" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 133.7333333333333,125.46666666666667 267.4666666666666,100.93333333333332 436,113 C 604.5333333333334,125.06666666666668 807.8666666666668,173.73333333333332 981,186 C 1154.1333333333332,198.26666666666668 1297.0666666666666,174.13333333333333 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#fff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg> */}

            <div id="servicesSection">

            <Wave fill="#0693e3" />
            <Wave idName="bottomWave" fill="white" />
    
                <div id="servicesInner">
                    <div id="servicesGrid">
                        <div className="serviceItem">
                            <div className="serviceItemTitle">
                                Pool Maintenance
                            </div>
                            <div className="serviceDescription">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </div>
                            <div className="serviceBtnFlex">
                                <div className="serviceBtn">
                                    Book now
                                </div>
                            </div>
                        </div>
                        <div className="serviceItem">
                            <div className="serviceItemTitle">
                                Pool Maintenance
                            </div>
                            <div className="serviceDescription">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </div>
                            <div className="serviceBtnFlex">
                                <div className="serviceBtn">
                                    Book now
                                </div>
                            </div>
                        </div>
                        <div className="serviceItem">
                            <div className="serviceItemTitle">
                                Pool Maintenance
                            </div>
                            <div className="serviceDescription">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </div>
                            <div className="serviceBtnFlex">
                                <div className="serviceBtn">
                                    Book now
                                </div>
                            </div>
                        </div>
                        <div className="serviceItem">
                            <div className="serviceItemTitle">
                                Pool Maintenance
                            </div>
                            <div className="serviceDescription">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </div>
                            <div className="serviceBtnFlex">
                                <div className="serviceBtn">
                                    Book now
                                </div>
                            </div>
                        </div>
                        <div className="serviceItem">
                            <div className="serviceItemTitle">
                                Pool Maintenance
                            </div>
                            <div className="serviceDescription">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </div>
                            <div className="serviceBtnFlex">
                                <div className="serviceBtn">
                                    Book now
                                </div>
                            </div>
                        </div>
                        <div className="serviceItem">
                            <div className="serviceItemTitle">
                                Pool Maintenance
                            </div>
                            <div className="serviceDescription">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </div>
                            <div className="serviceBtnFlex">
                                <div className="serviceBtn">
                                    Book now
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="servicesSideArea">
                        <div id="servicesForm">
                            <div id="servicesFormTitle">
                                Request A Callback
                            </div>
                            <div className="serviceFormInputFlex">
                                <input placeholder="Name" className="serviceFormInput"></input>
                            </div>
                            <div className="serviceFormInputFlex">
                                <input placeholder="Email" className="serviceFormInput"></input>
                            </div>
                            <div className="serviceFormInputFlex">
                                <input placeholder="Phone" className="serviceFormInput"></input>
                            </div>
                            <div id="serviceFormSubmit">
                                submit
                            </div>
                        </div>
                        <img src={sidebar1} className="sidebarImg" alt="services"></img>
                        <img src={sidebar2} className="sidebarImg" alt="services"></img>
                        <img src={sidebar3} className="sidebarImg" alt="services"></img>
                    </div>
                </div>
            </div>
            <div id="formSection">
                <div id="formInner">
                    <div id="bookNowTitle">
                        Contact us
                    </div>
                    <div className="homeFormFlex">
                        <input className="homeFormInput" placeholder="Name"></input>
                    </div>
                    <div id="homeFormDoubleInput">
                        <div className="homeFormFlex">
                            <input className="homeFormInput" placeholder="Email"></input>
                        </div>
                        <div className="homeFormFlex">
                            <input className="homeFormInput" placeholder="Phone"></input>
                        </div>
                    </div>
                    <div className="homeFormFlex" id="bottomInput">
                        <input className="homeFormInput" placeholder="Message"></input>
                    </div>
                    <div id="submitFormHome">
                        Submit
                        <svg id="bookNowIcon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}