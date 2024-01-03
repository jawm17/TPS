import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import sidebar1 from "../../assets/sidebar1.jpeg";
import sidebar2 from "../../assets/sidebar2.jpeg";
import sidebar3 from "../../assets/sidebar3.jpeg";
import "./servicesStyle.css";

export default function Services() {

    return (
        <div>
            <Header page={"services"} />
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
            <div id="servicesSection">
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
            <Footer />
        </div>
    );
}