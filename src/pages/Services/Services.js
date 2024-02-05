import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import sidebar1 from "../../assets/sidebar1.jpeg";
import sidebar2 from "../../assets/sidebar2.jpeg";
import sidebar3 from "../../assets/sidebar3.jpeg";
import CallBtn from "../../components/CallBtn";
import { Wave } from "../../components/WavesComp";
import ContactForm from "../../components/ContactForm";
import SubmitFormModal from "../../components/SubmitFormModal";
import emailjs from '@emailjs/browser';
import axios from "axios";
import "./servicesStyle.css";

export default function Services() {
    const form = useRef();
    const [submitForm1, setSubmitForm1] = useState(false);
    const [formModal, setFormModal] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // Validate form inputs
        const inputs = form.current.getElementsByTagName("input");
        for (const input of inputs) {
            if (!input.value) {
                console.log("Please fill out all fields");
                return;
            }
        }

        setSubmitForm1(true);
        setFormModal(true);
        setTimeout(() => {
            setSubmitForm1(false);
        }, 8000);

        emailjs.sendForm('service_9xwmw24', 'template_cooi9ho', form.current, 'ZDDvovxuOQXk34MJ0')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <Header page={"services"} />
            {formModal ? <SubmitFormModal close={() => setFormModal(false)} /> : null}
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
                                Our weekly pool chemical and cleaning services keep your pool safe and pristine year-round. Our team meticulously balances chemicals, prevents algae growth, and maintains proper pH levels. We also provide thorough cleaning, including skimming, vacuuming, and brushing to remove debris. With our reliable maintenance, enjoy crystal-clear water hassle-free.
                            </div>
                            <div className="serviceBtnFlex" onClick={() => document.getElementById("formSection").scrollIntoView({ behavior: "smooth" })}>
                                <div className="serviceBtn">
                                    Book now
                                </div>
                            </div>
                        </div>
                        <div className="serviceItem">
                            <div className="serviceItemTitle">
                                Equipment Repair and Replacement
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
                                Pool Equipment Enhancements
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
                        <form id="servicesForm" ref={form}>
                            <div id="servicesFormTitle">
                                Request A Callback
                            </div>
                            <div className="serviceFormInputFlex">
                                <input placeholder="Name" name="from_name" className="serviceFormInput"></input>
                            </div>
                            <div className="serviceFormInputFlex">
                                <input placeholder="Email" name="from_email" className="serviceFormInput"></input>
                            </div>
                            <div className="serviceFormInputFlex">
                                <input placeholder="Phone" name="from_phone" className="serviceFormInput"></input>
                            </div>
                            <div id="serviceFormSubmit" onClick={(e) => sendEmail(e)}>
                                {submitForm1 ?
                                    <svg id="form1Check" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    :
                                    <div>
                                        Submit
                                    </div>
                                }
                            </div>
                        </form>
                        <div id="serviceLevelTitle">
                            Our Pool Recommendations:
                        </div>
                        <div id="levelList">
                            <ul>
                                <li>Chlorine: 1.0 – 3.0 ppm.</li>
                                <li>pH: 7.2 – 7.8.</li>
                                <li>Total Alkalinity: 80 – 120 ppm.</li>
                                <li>Calcium Hardness: 200 – 400.</li>
                                <li>Cyanuric Acid: 30 – 100 ppm.</li>
                                <li>Total Dissolved Solids: 0 – 5000 ppm. 1500 or less ideal for Chlorine only.</li>
                                <li>LSI Range -0.10 to +0.20</li>
                            </ul>
                        </div>
                        <div id="serviceLevelTitle">
                            Weekly Maintenance Includes:
                        </div>
                        <div id="levelList">
                            <ul>
                                <li>Chemical test and adjustment</li>
                                <li>Empty skimmer and pump baskets</li>
                                <li>Backwash filter when necessary</li>
                                <li>Empty/wash cleaner bag and/or filter</li>
                                <li>Verify Normal Pool operation</li>
                                <li>Brush Pool walls, tiles, and steps</li>
                                <li>Visual inspection and test of equipment</li>
                                <li>Net swimming pool</li>
                                <li>Vacuum Swimming Pool</li>
                                <li>Maintain Salt level. Salt bags are charged at time of addition unless provided.</li>
                                <li>Provide chemical readouts and notes after service</li>
                            </ul>

                        </div>
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