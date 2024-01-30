import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import quotation from "../../assets/quotation.png";
import CallBtn from "../../components/CallBtn";
import ContactForm from "../../components/ContactForm";
import ReviewSection from "../../components/ReviewSection";
import SubmitFormModal from "../../components/SubmitFormModal";
// import twilio from 'twilio';
import "./landingStyle.css";

export default function Landing() {
    const navigate = useNavigate();
    const [playing, setPlaying] = useState(false);

    const [name1, setName1] = useState("");
    const [email1, setEmail1] = useState("");
    const [phone1, setPhone1] = useState("");
    const [zip1, setZip1] = useState("");
    const [submitForm1, setSubmitForm1] = useState(false);
    const [formModal, setFormModal] = useState(false);


    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
  
    // const sendSMS = async () => {
    //   const accountSid = 'ACb9ad5b792954db3ef9e5a8b2246eabfa';
    //   const authToken = '';
    //   const client = twilio(accountSid, authToken);
  
    //   try {
    //     const result = await client.messages.create({
    //       body: `New Sale for $${40}`,
    //       from: '+18334801392',
    //       to: "15127848431",
    //     });
  
    //     console.log('Message sent successfully. SID:', result.sid);
    //   } catch (error) {
    //     console.error('Error sending message:', error.message);
    //   }
    // };
  

    useEffect(() => {
        scrollBox();
        scrollBox2();
    }, []);

    useEffect(() => {
        if (submitForm1) {
            setName1("");
            setEmail1("");
            setPhone1("");
            setZip1("");
            setFormModal(true)
            setTimeout(() => {
                setSubmitForm1(false);
            }, 8000);
        }
    }, [submitForm1]);




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
        setInterval(scrollToNextElement, 2500);
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
        <div id="landBody">
            <Header page={"landing"} />
            {formModal ? <SubmitFormModal close={() => setFormModal(false)}/> : null}
            <CallBtn />
            <div id="heroSection">
                <img id="heroImg" alt="big pool" src="https://pools-by-design.com/wp-content/uploads/2021/04/houston-texas-vacation.jpg"></img>
                <div id="heroTextArea">
                    <div id="heroTextMain">
                        Get Your Project Done Right
                    </div>
                    <div id="heroTextSub">
                        Highly trained and specialized professionals ready to serve your needs
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
                        WELCOME TO TEXAS POOL SERVICES, AUSTIN'S PREMIER LUXURY POOL BUILDERS
                    </div>
                    <div id="subHeroMiddle">
                        <mark id="subHeroBold">Redefining luxury,</mark> one pool at a time.
                    </div>
                    <div id="subHeroBottom">
                        At Texas Pool Services, we transform backyards into personal paradises. Centrally based in the vibrant city of Austin, Texas, we are at the forefront of custom pool design and construction. We are dedicated to bringing the luxury of the world’s finest resorts directly to your home, creating an oasis of tranquility and enjoyment in your own backyard. <mark id="mobileNone">Our commitment to perfection is reflected in every project, from intimate plunge pools to expansive infinity-edge designs. We specialize in creating uniquely tailored, high-end swimming pools that reflect not only the beauty and ambiance of a five-star resort but also your personal style and preferences. Every Texas Pool Service Pool is a testament to craftsmanship, quality, and attention to detail that is simply unparalleled.</mark>
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
                            Immerse yourself in luxury and relaxation. With Texas Pool Services, your dream backyard is just one click away.
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

                            <img src="https://californiapools.com/wp-content/uploads/2019/11/Local_Why-Cal_bg-1024x614.jpg" class="smallGalleryImg red-square"></img>
                            <img src="https://californiapools.com/wp-content/uploads/2019/11/Local_Why-Cal_bg-1024x614.jpg" class="smallGalleryImg red-square"></img>
                            <img src="https://californiapools.com/wp-content/uploads/2019/11/Local_Why-Cal_bg-1024x614.jpg" class="smallGalleryImg red-square"></img>
                            <img src="https://californiapools.com/wp-content/uploads/2019/11/Local_Why-Cal_bg-1024x614.jpg" class="smallGalleryImg red-square"></img>
                            <img src="https://californiapools.com/wp-content/uploads/2019/11/Local_Why-Cal_bg-1024x614.jpg" class="smallGalleryImg red-square"></img>
                            <img src="https://californiapools.com/wp-content/uploads/2019/11/Local_Why-Cal_bg-1024x614.jpg" class="smallGalleryImg red-square"></img>
                            <img src="https://californiapools.com/wp-content/uploads/2019/11/Local_Why-Cal_bg-1024x614.jpg" class="smallGalleryImg red-square"></img>
                            <img src="https://californiapools.com/wp-content/uploads/2019/11/Local_Why-Cal_bg-1024x614.jpg" class="smallGalleryImg red-square"></img>
                            <img src="https://californiapools.com/wp-content/uploads/2019/11/Local_Why-Cal_bg-1024x614.jpg" class="smallGalleryImg red-square"></img>
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
                                </div>
                                <div className="infoSectionItemRight">
                                    <div className="infoSectionItemTitle">
                                        Design & Quality
                                    </div>
                                    <div className="infoSectionItemSub">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                    </div>
                                </div>
                            </div>

                            <div className="infoSectionItem">
                                <div className="infoSectionItemLeft">
                                    <svg id="clockIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                                    </svg>
                                </div>
                                <div className="infoSectionItemRight">
                                    <div className="infoSectionItemTitle">
                                        Years of Experience
                                    </div>
                                    <div className="infoSectionItemSub">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                    </div>
                                </div>
                            </div>

                            <div className="infoSectionItem">
                                <div className="infoSectionItemLeft">
                                    <svg id="clockIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                    </svg>
                                </div>
                                <div className="infoSectionItemRight">
                                    <div className="infoSectionItemTitle">
                                        All Our Work Is Guaranteed
                                    </div>
                                    <div className="infoSectionItemSub">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
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
                                            Texas Pool Services did an amazing job installing my new pool. I couldn’t be happier with the quality of their work and clean-up.
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
                                            Samantha Jones
                                        </div>
                                        <div id="reviewLocation">
                                            Austin, TX
                                        </div>
                                    </div>
                                    <div className="reviewEl">
                                        <img src={quotation} id="quotation" alt="quotation"></img>
                                        <div id="reviewTop">
                                            Texas Pool Services did an amazing job installing my new pool. I couldn’t be happier with the quality of their work and clean-up.
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
                                            Samantha Jones
                                        </div>
                                        <div id="reviewLocation">
                                            Austin, TX
                                        </div>
                                    </div>
                                    <div className="reviewEl">
                                        <img src={quotation} id="quotation" alt="quotation"></img>
                                        <div id="reviewTop">
                                            Texas Pool Services did an amazing job installing my new pool. I couldn’t be happier with the quality of their work and clean-up.
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
                                            Samantha Jones
                                        </div>
                                        <div id="reviewLocation">
                                            Austin, TX
                                        </div>
                                    </div>

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
                            <img className="serviceImg" alt="new pool" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/New%20con%20rendering.jpg/:/cr=t:16.98%25,l:0%25,w:100%25,h:66.3%25/rs=w:730,h:365,cg:true"></img>
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
                        <div className="serviceSectionItem" onClick={() => navigate("/services")}>
                            <img className="serviceImg" alt="pool renovation" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/IMG_0977.jpg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:730,h:365,cg:true"></img>
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
                            <img className="serviceImg" alt="pool service" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/Burke%20Pro.jpg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:730,h:365,cg:true"></img>
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
                        Our Build Process
                    </div>
                    <div id="processOptionsArea">
                        <div className="processOption">
                            <div className="processOptionTop">
                                <svg id="processOptionIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                                </svg>
                                <div>
                                    consultation
                                </div>
                            </div>
                            <div className="proccessOptionDescription">
                                We give customers a 3d visual representation of their pool and what it will look like.                                 We give customers a 3d visual representation of their pool and what it will look like.
                            </div>
                        </div>
                        <div className="processOption">
                            <div className="processOptionTop">
                                <svg id="processOptionIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                                <div>
                                    3d modeling
                                </div>
                            </div>
                            <div className="proccessOptionDescription">
                                We give customers a 3d visual representation of their pool and what it will look like.                                 We give customers a 3d visual representation of their pool and what it will look like.
                            </div>
                        </div>
                        <div className="processOption">
                            <div className="processOptionTop">
                                <svg id="processOptionIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                                </svg>

                                <div>
                                    pool construction
                                </div>
                            </div>
                            <div className="proccessOptionDescription">
                                We give customers a 3d visual representation of their pool and what it will look like.                                 We give customers a 3d visual representation of their pool and what it will look like.
                            </div>
                        </div>
                    </div>
                    <div id="processVideo">
                        {playing ?
                            <video autoPlay id="processVideoMain" width="320" height="240" controls={false}>
                                <source src={"https://gz6wrqw5qslqlogz.public.blob.vercel-storage.com/poolVid-AY3dJJ25N9LaFxIyCnixVAYaNVprDx.mp4"} type="video/mp4" />
                            </video>
                            :
                            <>

                                <div id="thumbnailGradient">
                                    <div id="playBtnBg" onClick={() => setPlaying(true)}>
                                        <svg id="playBtnIcon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                            <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <img id="processVideoThumbnail" src="https://www.thespruce.com/thmb/_FZqg8AROnHRzD1FLXGvd1eyHFw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/KeyResidentialFtns-5a9470d218ba010037643a30.jpg"></img>
                            </>
                        }
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
                                Our experienced electricians are highly trained in all aspects of electrical service, from office lighting and security systems to emergency repair.
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
          <ReviewSection reviews={reviews} />
        </div>
            {/* Form */}
            <div id="formSection">
                <ContactForm/>
            </div>
            {/* Footer */}
            <Footer />

        </div>
    );
}