import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import quotation from "../../assets/quotation.png";
import CallBtn from "../../components/CallBtn";
import ContactForm from "../../components/ContactForm";
import ReviewSection from "../../components/ReviewSection";
import SubmitFormModal from "../../components/SubmitFormModal";
import axios from "axios";
import laurel from "../../assets/laurel.png"
// import twilio from 'twilio';
import "./landingStyle.css";
export default function Landing() {
    const navigate = useNavigate();

    const [name1, setName1] = useState("");
    const [email1, setEmail1] = useState("");
    const [phone1, setPhone1] = useState("");
    const [zip1, setZip1] = useState("");
    const [submitForm1, setSubmitForm1] = useState(false);
    const [formModal, setFormModal] = useState(false);

    useEffect(() => {
        scrollBox();
        scrollBox2();
    }, []);

    useEffect(() => {
        if (submitForm1) {
            sendEmail();
            setFormModal(true);
            setTimeout(() => {
                setSubmitForm1(false);
            }, 8000);
        }
    }, [submitForm1]);

    async function sendEmail() {
        try {
            const data = {
                service_id: 'service_9xwmw24',
                template_id: 'template_cooi9ho',
                user_id: 'ZDDvovxuOQXk34MJ0',
                template_params: {
                    'from_name': name1,
                    'to_name': 'Adam',
                    'from_phone': phone1,
                    'from_email': email1,
                    'from_zip': zip1
                }
            };
            await axios.post('https://api.emailjs.com/api/v1.0/email/send', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setName1("");
            setEmail1("");
            setPhone1("");
            setZip1("");
        } catch (error) {
            setName1("");
            setEmail1("");
            setPhone1("");
            setZip1("");
        }
    }

    function scrollBox() {
        const scrollContainer = document.getElementById("smallGalleryFlex");
        let currentIndex = 0;
        // Function to scroll to the next element
        function scrollToNextElement() {
            const scrollWidth = scrollContainer.scrollWidth;
            const itemWidth = scrollContainer.offsetWidth;
            currentIndex = (currentIndex + 1) % (scrollWidth / itemWidth);
            const scrollToPosition = currentIndex * itemWidth;
            // Scroll to the next element
            scrollContainer.scrollTo({
                left: scrollToPosition,
                behavior: "smooth"
            });
        }
        // Set up a timer to scroll every ten seconds
        setInterval(scrollToNextElement, 5600);
    }

    function scrollBox2() {
        const scrollContainer = document.getElementById("infoSectionReview");
        let currentIndex = 0;
        // Function to scroll to the next element
        function scrollToNextElement() {
            const scrollWidth = scrollContainer.scrollWidth;
            const itemWidth = scrollContainer.offsetWidth;
            currentIndex = (currentIndex + 1) % (scrollWidth / itemWidth);
            const scrollToPosition = currentIndex * itemWidth;
            // Scroll to the next element
            scrollContainer.scrollTo({
                left: scrollToPosition,
                behavior: "smooth"
            });
        }
        // Set up a timer to scroll every ten seconds
        setInterval(scrollToNextElement, 2000);
    }

    return (
        <div id="landBody">
            <Header page={"landing"} />
            {formModal ? <SubmitFormModal close={() => setFormModal(false)} /> : null}
            <CallBtn />
            <div id="heroSection">
                <div id="landingHeroBlur">

                </div>
                <img id="heroImg" alt="big pool" src="https://pools-by-design.com/wp-content/uploads/2021/04/houston-texas-vacation.jpg"></img>
                <div id="heroTextArea">
                    <div id="heroTextMain">
                        Texas Pool Services
                    </div>
                    <div id="heroTextSub">
                        Highly trained and specialized professionals ready to serve your needs
                    </div>
                    <div id="laurelAreaOuter">
                        <div id="laurelAreaInner">
                            <div className="laurelFlex">
                                <img className="laurel" id="laurelLeft" src={laurel}></img>
                                <div className="laurelTextInner">
                                    <div className="laurelTextTop">
                                        A+
                                    </div>
                                    <div className="laurelTextBottom">
                                        Rating from the Better Business Bureau
                                    </div>
                                </div>
                                <img className="laurel" id="laurelRight" src={laurel}></img>
                            </div>
                            <div className="laurelFlex">
                                <img className="laurel" id="laurelLeft" src={laurel}></img>
                                <div className="laurelTextInner">
                                    <div className="laurelTextTop">
                                        2,100+
                                    </div>
                                    <div className="laurelTextBottom">
                                        Customer satisfaction awards - since 2012
                                    </div>
                                </div>
                                <img className="laurel" id="laurelRight" src={laurel}></img>
                            </div>
                            <div className="laurelFlex">
                                <img className="laurel" id="laurelLeft" src={laurel}></img>
                                <div className="laurelTextInner">
                                    <div className="laurelTextTop">
                                        #1
                                    </div>
                                    <div className="laurelTextBottom">
                                        Most reffered pool builder - in markets served
                                    </div>
                                </div>
                                <img className="laurel" id="laurelRight" src={laurel}></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="heroServiceFlex">
                    <div id="heroService">
                        <div id="heroServiceFlag">
                            Request Free Consultation
                        </div>

                        <div id="serviceInputs">
                            <div className="serviceInputFlex">
                                <input className="serviceInput" placeholder="Name" value={name1} onChange={(e) => setName1(e.target.value)}></input>
                            </div>
                            <div className="serviceInputFlex">
                                <input className="serviceInput" type="email" placeholder="Email" value={email1} onChange={(e) => setEmail1(e.target.value)}></input>
                            </div>
                            <div className="serviceInputFlex">
                                <input className="serviceInput" placeholder="Phone" value={phone1} onChange={(e) => setPhone1(e.target.value)}></input>
                            </div>
                            <div className="serviceInputFlex">
                                <input className="serviceInput" placeholder="ZIP" value={zip1} onChange={(e) => setZip1(e.target.value)}></input>
                            </div>
                            <div id="heroServiceSubmit" onClick={name1 && email1 && phone1 && zip1 ? () => setSubmitForm1(true) : null}>
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
                        </div>
                    </div>
                </div>
                <div id="mobileServiceBtn" onClick={() => window.location.href = `tel:${5128207434}`}>
                    <svg id="mobileServiceBtnIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <div>
                        Request Free Consultation
                    </div>
                </div>
            </div>

            <div id="subHeroSection">
                <div id="subHeroInner">
                    <div id="subHeroTop">
                        WELCOME TO TEXAS POOL SERVICES, AUSTIN'S PREMIER POOL BUILDERS
                    </div>
                    <div id="subHeroMiddle">
                        <mark id="subHeroBold">Creating memories,</mark> one pool at a time.
                    </div>
                    <div id="subHeroBottom">
                        {/* At Texas Pool Services, we transform backyards into personal paradises. Centrally based in the vibrant city of Austin, Texas, we are at the forefront of custom pool design and construction. We are dedicated to bringing the luxury of the world’s finest resorts directly to your home, creating an oasis of tranquility and enjoyment in your own backyard. <mark id="mobileNone">Our commitment to perfection is reflected in every project, from intimate plunge pools to expansive infinity-edge designs. We specialize in creating uniquely tailored, high-end swimming pools that reflect not only the beauty and ambiance of a five-star resort but also your personal style and preferences. Every Texas Pool Service Pool is a testament to craftsmanship, quality, and attention to detail that is simply unparalleled.</mark> */}
                        Texas Pool Services is your premier destination for transforming ordinary backyards into extraordinary personal retreats. Located in Austin, Texas, we are pioneers in custom pool design and construction. Our mission is to bring an oasis of tranquility and enjoyment to your own backyard.<mark id="mobileNone"> Our dedication to perfection shines through in every project we undertake, whether it's crafting intimate plunge pools or expansive infinity-edge designs. We specialize in creating uniquely tailored, incredible swimming pools that reflect your personal style and preferences. Each Texas Pool Service Pool is a testament to unparalleled craftsmanship, quality, and attention to detail.</mark>
                    </div>
                </div>
            </div>

            <div id="smallGallerySection">
                <div id="smallGalleryInner">
                    <div id="smallGalleryLeft">
                        <div id="smallGalleryTitle">
                            Imagine The Possibilities
                        </div>
                        <div id="smallGalleryDescription">
                            Indulge in luxury and relaxation with Texas Pool Services. Your dream backyard is only a click away.
                        </div>
                        <div id="smallGalleryBtn" onClick={() => navigate("/builds")}>
                            learn more
                            <svg id="learnMoreBtnGallery" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div id="smallGalleryImgArea">
                        <div id="smallGalleryFlex" class="scroll-container">
                     
                            <img src="https://www.aquapools.com/blog/wp-content/uploads/2023/11/Award-Winning-Fiberglass-Pool-Aquamarine-Pools.jpg" class="smallGalleryImg red-square"></img>
                            <img src="https://www.pools123.com/wp-content/uploads/2020/01/pools123-pools-leisure-pools.jpg" class="smallGalleryImg red-square"></img>
                            <img src="https://i.pinimg.com/originals/6e/7e/fc/6e7efc288769c02a1fe1cdf7780ee5e3.png" class="smallGalleryImg red-square"></img>
                            <img src="https://www.poolmagazine.com/wp-content/uploads/2021/04/CODY-A8.jpg" class="smallGalleryImg red-square"></img>
                            <img src="https://sanantoniomag.webpublisherpro.com/wp-content/uploads/2021/06/JLBarApril2019-232-copy.jpg" class="smallGalleryImg red-square"></img>
                            <img src="https://www.freedompools.com/getattachment/650367bb-404c-48bf-af78-46ff23569ef5/take-a-look-at-the-patented-design-Beach-Pool-exc" class="smallGalleryImg red-square"></img>
                            <img src="https://crystalpools.com.au/wp-content/uploads/2013/09/bexleyFeature.jpg" class="smallGalleryImg red-square"></img>
                            <img src="https://i.pinimg.com/originals/de/1d/5d/de1d5dae7705d9c5ca7a588ece6ad20b.jpg" class="smallGalleryImg red-square"></img>
                            <img src="https://crystaledgepools.net/wp-content/uploads/2023/06/Latina-3.jpg" class="smallGalleryImg red-square"></img>
                        </div>
                    </div>

                </div>
            </div>

            <div id="infoSectionOuter">
                <div id="infoSectionTitle">
                    Why Choose Us?
                </div>
                <div id="infoSection">
                    <div id="infoSectionInner">
                        <div className="infoSectionSide" id="infoSectionLeft">

                            <div className="infoSectionItem">
                                <div className="infoSectionItemLeft">
                                    <svg id="clockIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <div className="infoSectionItemTitle">
                                        Design & Quality
                                    </div>
                                </div>
                                <div className="infoSectionItemRight">
                                    <div className="infoSectionItemSub">
                                        Texas Pool Services pioneers innovative design and unwavering quality, crafting aquatic masterpieces that harmonize with your lifestyle. From contemporary marvels to serene natural retreats, our designs cater to diverse tastes, ensuring each creation is as unique as our clients. We prioritize premium materials and cutting-edge techniques for longevity, durability, and visual allure. With AquaCraft Pools, your vision transforms into a timeless sanctuary of relaxation and enjoyment.
                                    </div>
                                </div>
                            </div>

                            <div className="infoSectionItem">
                                <div className="infoSectionItemLeft">
                                    <svg id="clockIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                                    </svg>
                                    <div className="infoSectionItemTitle">
                                        Years of Experience
                                    </div>
                                </div>
                                <div className="infoSectionItemRight">

                                    <div className="infoSectionItemSub">
                                        With over 20 years of industry leadership, Texas Pool Services is synonymous with excellence. We've continuously refined our craft, innovated, and exceeded expectations, crafting exceptional aquatic spaces. Our commitment to quality and client satisfaction drives us forward, ensuring every pool we create embodies craftsmanship and service excellence. Trust Texas Pool Servies for unmatched experience and excellence in every project.
                                    </div>
                                </div>
                            </div>

                            <div className="infoSectionItem">
                                <div className="infoSectionItemLeft">
                                    <svg id="clockIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                    </svg>
                                    <div className="infoSectionItemTitle">
                                        Our Guarantee
                                    </div>
                                </div>
                                <div className="infoSectionItemRight">

                                    <div className="infoSectionItemSub">
                                        At Texas Pool Services, we stand behind our craftsmanship and the quality of our materials. That's why we offer an industry-leading warranty of up to 20 years on select pool installations. This warranty reflects our confidence in the durability and longevity of our pools, providing our clients with peace of mind for years to come. With our comprehensive warranty coverage, you can trust Texas Pool Services to ensure that your investment continues to bring joy and relaxation for generations. Experience the assurance of quality with Texas Pool Services – where your satisfaction is our priority.
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="infoSectionSide" id="infoSectionRight">
                            <img id="infoSectionImg" alt="pool guy" src="https://s3-media0.fl.yelpcdn.com/bphoto/hd5ZtKiy-Q2T4iLm53Wbow/1000s.jpg"></img>
                            <div id="infoSectionReview">
                                <div id="reviewScrollBox">
                                    <div className="reviewEl">
                                        <img src={quotation} id="quotation" alt="quotation"></img>
                                        <div id="reviewTop">
                                            Texas Pool Services transformed our backyard into a haven! Their attention to detail and professionalism are unmatched.
                                        </div>
                                        <div className="starsSeond">
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
                                        <div id="reviewUser">
                                            Emily and John Parker
                                        </div>
                                        <div id="reviewLocation">
                                            Austin, TX
                                        </div>
                                    </div>
                                    <div className="reviewEl">
                                        <img src={quotation} id="quotation" alt="quotation"></img>
                                        <div id="reviewTop">
                                            Impressed by Texas Pool Services' expertise! They turned our vision into reality with precision and care.
                                        </div>
                                        <div className="starsSeond">
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
                                        <div id="reviewUser">
                                            Sarah and Michael Anderson
                                        </div>
                                        <div id="reviewLocation">
                                            Dripping Springs, TX
                                        </div>
                                    </div>
                                    <div className="reviewEl">
                                        <img src={quotation} id="quotation" alt="quotation"></img>
                                        <div id="reviewTop">
                                            Exceptional service from Texas Pool Services! Our pool has never looked better, thanks to their team.
                                        </div>
                                        <div className="starsSeond">
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
                                        <div id="reviewUser">
                                            Lisa Smith
                                        </div>
                                        <div id="reviewLocation">
                                            Leander, TX
                                        </div>
                                    </div>

                                    {/* <div className="reviewEl">
                                        <img src={quotation} id="quotation" alt="quotation"></img>
                                        <div id="reviewTop">
                                            Texas Pool Services delivers excellence every time. We wouldn't trust anyone else with our pool maintenance.
                                        </div>
                                        <div className="starsSeond">
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
                                        <div id="reviewUser">
                                            Mark Miller
                                        </div>
                                        <div id="reviewLocation">
                                            Leander, TX
                                        </div>
                                    </div> */}

                                </div>
                                <div id="scrollRight">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="servicesSectionOuter">
                <div id="serviceSectionTitle">
                    Our Services
                </div>
                <div id="serviceSection">
                    <div id="serviceSectionInner">
                        <div className="serviceSectionItem" onClick={() => navigate("/builds")}>
                            <img className="serviceImg" alt="new pool" src="https://crystaledgepools.net/wp-content/uploads/2023/06/Valentina-2.jpg"></img>
                            <div className="serviceInfoArea">
                                <div>
                                    <div className="serviceTitle">
                                        New Pool Builds
                                    </div>
                                    <div className="serviceMore">
                                        <div>
                                            Learn more
                                        </div>
                                        <svg id="learnMoreIconMain" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="serviceSectionItem" onClick={() => navigate("/renovation")}>
                            <img className="serviceImg" alt="pool renovation" src="https://lakesidecustompools.com/wp-content/uploads/2022/09/pool-remodeling-and-renovation.jpeg"></img>
                            <div className="serviceInfoArea">
                                <div>
                                    <div className="serviceTitle">
                                        Pool Renovation
                                    </div>
                                    <div className="serviceMore">
                                        <div>
                                            Learn more
                                        </div>
                                        <svg id="learnMoreIconMain" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="serviceSectionItem" onClick={() => navigate("/services")}>
                            <img className="serviceImg" alt="pool service" src="https://poolscouts.com/wp-content/uploads/2022/01/Pool-Maintenance.jpg"></img>
                            <div className="serviceInfoArea">
                                <div>
                                    <div className="serviceTitle">
                                        Service and Repair
                                    </div>
                                    <div className="serviceMore">
                                        <div>
                                            Learn more
                                        </div>
                                        <svg id="learnMoreIconMain" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="buildPreview">
                <div id="buildPreviewInner">
                    <div id="buildPreviewTitle">
                        The Build Process
                    </div>
                    <div id="processOptionsArea">
                        <div className="processOption" id="processOption1">
                            <div className="processOptionTop">
                                <svg id="processOptionIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                                </svg>
                                <div>
                                    Consultation
                                </div>
                            </div>
                            <div className="proccessOptionDescription">
                                Our consultation process is tailored to meet your needs and preferences. During our meeting, we listen carefully to your vision, assess your backyard space, and offer professional recommendations. Through open communication, we collaborate closely with you to develop a personalized plan that fits your style, budget, and timeline. Our aim is to turn your vision into a stunning, functional pool that exceeds your expectations.                                We give customers a 3d visual representation of their pool and what it will look like.
                            </div>
                        </div>
                        <div className="processOption" id="processOption2">
                            <div className="processOptionTop">
                                <svg id="processOptionIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                                <div>
                                    3d Modeling
                                </div>
                            </div>
                            <div className="proccessOptionDescription">
                                At Texas Pool Services, we use 3D modeling to help you see your pool ideas clearly. With advanced technology, we create lifelike digital designs for your pool, letting you explore different features and layouts before construction. This process ensures we match your preferences and expectations, guaranteeing your satisfaction with the final pool design.                              We give customers a 3d visual representation of their pool and what it will look like.
                            </div>
                        </div>
                        <div className="processOption" id="processOption3">
                            <div className="processOptionTop">
                                <svg id="processOptionIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                                </svg>

                                <div>
                                    Pool Construction
                                </div>
                            </div>
                            <div className="proccessOptionDescription">
                                At Texas Pool Services, we streamline the pool construction process from start to finish. We kick off by handling all necessary permits and approvals, ensuring compliance with local regulations. Our experienced team then takes charge, overseeing every aspect of the project from excavation to final touches. With a turnkey approach, we manage the entire process, delivering a stunning pool that exceeds your expectations while transforming your backyard into a captivating oasis of relaxation and enjoyment. 
                            </div>
                        </div>
                    </div>
                    <div id="processVideo">
                        <video autoPlay id="processVideoMain" width="320" height="240" muted loop webkit-playsinline playsInline>
                            <source src={"https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/poolVid.mp4?alt=media&token=435af9cd-58c0-43cf-a152-43bb7cec9298"} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>



            <div id="fullSection">
                <div id="fullSectionLeft">
                    <img id="fullSectionImg" alt="inifinity edge pool" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/blob-646fbb9.png/:/cr=t:33.26%25,l:0%25,w:100%25,h:50%25/rs=w:1200,h:600,cg:true"></img>
                    <div id="fullSectionBlock">
                        <div>
                            <div id="fullTitle">
                                The Best in Texas!
                            </div>
                            <div id="fullSub">
                                Allow our team to transform your pool vision into reality!
                            </div>
                            <div id="fullBookBtn" onClick={() => document.getElementById("formSection").scrollIntoView({ behavior: "smooth" })}>
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
            </div>
            <div id="landingReviewscontainer" className="reviewsContainers">
                <div id="reviewSub">A Reputation You Can Count On</div>
                <div id="reviewTitle">Explore Some of Our Testimonials!</div>
                <ReviewSection />
            </div>
            {/* Form */}
            <div id="formSection">
                <ContactForm />
            </div>
            {/* Footer */}
            <Footer />

        </div>
    );
}