import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import sidebar1 from "../../assets/sidebar1.jpeg";
import sidebar2 from "../../assets/sidebar2.jpeg";
import sidebar3 from "../../assets/sidebar3.jpeg";
import CallBtn from "../../components/CallBtn";
import { Wave } from "../../components/WavesComp";
import ContactForm from "../../components/ContactForm";
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
                             Replastering
                            </div>
                            <div className="serviceDescription">
                                We specialize in pool replastering to refresh and restore your pool's appearance and durability. Over time, pool plaster can wear, stain, or damage, diminishing its beauty and function. Our expert team delivers professional results with attention to detail and quality materials, leaving your pool refreshed and inviting for years to come. Trust us for reliable replastering services.
                            </div>
                            <div className="serviceBtnFlex" onClick={() => document.getElementById("formSection").scrollIntoView({ behavior: "smooth" })}>
                                <div className="serviceBtn">
                                    Book now
                                </div>
                            </div>
                        </div>
                        <div className="serviceItem">
                            <div className="serviceItemTitle">
                                Weekly Pool Maintenance
                            </div>
                            <div className="serviceDescription">
                            Our weekly pool chemical and cleaning services keep your pool safe and pristine year-round. Our team meticulously balances chemicals, prevents algae growth, and maintains proper pH levels. We also provide thorough cleaning, including skimming, vacuuming, and brushing to remove debris. With our reliable maintenance, enjoy crystal-clear water hassle-free. Trust us to keep your pool sparkling, so you can relax and dive in anytime. 
                            </div>
                            <div className="serviceBtnFlex" onClick={() => document.getElementById("formSection").scrollIntoView({ behavior: "smooth" })}>
                                <div className="serviceBtn">
                                    Book now
                                </div>
                            </div>
                        </div>
                        <div className="serviceItem">
                            <div className="serviceItemTitle">
                                Equipment Repair and replacement  
                            </div>
                            <div className="serviceDescription">
                            Our pool equipment repair and replacement services ensure your pool functions flawlessly. Our skilled technicians efficiently handle all tasks, from fixing or replacing pumps to changing out filters, prioritizing quality and precision with top-grade parts and modern techniques. Trust us to restore or replace your pool equipment to optimal condition for uninterrupted enjoyment, handling all needs with professionalism and reliability.
                            </div>
                            <div className="serviceBtnFlex" onClick={() => document.getElementById("formSection").scrollIntoView({ behavior: "smooth" })}>
                                <div className="serviceBtn">
                                    Book now
                                </div>
                            </div>
                        </div>
                        <div className="serviceItem">
                            <div className="serviceItemTitle">
                            Pool Equipment enhancements
                            </div>
                            <div className="serviceDescription">
                            Our pool equipment additions and enhancements elevate your pool experience. From energy-efficient pumps to advanced filtration systems and automation capabilities, our expert team delivers top-quality products and seamless installation. With our tailored recommendations, enjoy enhanced efficiency, water clarity, and control over your pool environment. Trust us to revitalize your pool with our comprehensive services.  
                            </div>
                            <div className="serviceBtnFlex" onClick={() => document.getElementById("formSection").scrollIntoView({ behavior: "smooth" })}>
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
                <Wave fill="#0070ff" />
                <ContactForm />
            </div>
            <Footer />
        </div>
    );
}