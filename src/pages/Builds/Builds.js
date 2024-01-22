import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import CallBtn from "../../components/CallBtn";
import "./buildsStyle.css";

export default function Builds() {

    let slideIndex = 0;

    useEffect(() => {
        showSlides();
    });

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if (slides.length > 0) {
            // let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }

            slides[slideIndex - 1].style.display = "block";

            setTimeout(showSlides, 4000); // Change image every 2 seconds
        }
    }

    return (
        <div>
            <Header page={"builds"} />
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
                                New Pool Construction
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
            <svg id="waveItem2" width="100%" height="100%" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 133.7333333333333,125.46666666666667 267.4666666666666,100.93333333333332 436,113 C 604.5333333333334,125.06666666666668 807.8666666666668,173.73333333333332 981,186 C 1154.1333333333332,198.26666666666668 1297.0666666666666,174.13333333333333 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#0693e3" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
            <svg id="waveItem" width="100%" height="100%" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 133.7333333333333,125.46666666666667 267.4666666666666,100.93333333333332 436,113 C 604.5333333333334,125.06666666666668 807.8666666666668,173.73333333333332 981,186 C 1154.1333333333332,198.26666666666668 1297.0666666666666,174.13333333333333 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#fff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>


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


            </div>

            <div id="buildsSection">
                <div id="buildsSectionInner">
                    {/* <div className="buildRow">
                        <div className="buildRowLeft">
                            <img className="buildImg" alt="new pool build" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/Pool.jpg/:/rs=w:810,h:405,cg:true,m/cr=w:810,h:405"></img>
                        </div>
                        <div className="buildRowRight">
                            <div className="buildRowTitle">
                                New Pool Builds
                            </div>
                            <div className="buildRowDescription">
                                Texas Pool Services offers custom pool construction or a series of pre designed builds to fit all budgetary needs! We offer geometric pools, freeform pools, and negative edge pool builds to meet all backyard dreams!

                                Our pool expertise will keep the project running smoothly and customers stress free. Call us today!
                            </div>
                        </div>
                    </div> */}
                    <div></div>
                    <div className="buildRow" id="buildRowReverse">
                        <div className="buildRowTitleMobile">
                            New Build Standard
                        </div>
                        <div className="buildRowLeft">
                            <img className="buildImg" alt="new pool build" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/pool%202.jpeg/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600"></img>
                        </div>
                        <div className="buildRowRight">
                            <div className="buildRowTitle">
                                New Build Standard
                            </div>
                            <div className="buildRowDescription">
                                Our decades of experience in pool construction has taught us to only use the highest grade materials and construction standards. For this reason, ALL Texas Pool Services pools come standard with 12" gunite/shotcrete walls and 1/2" rebar on 10" centers.

                                We waterproof all our pools using a micro crystaline technology and bond coat.
                            </div>
                            <div className="learnMoreBuilds">
                                <div>
                                    learn more
                                </div>
                                <svg id="learnMoreBuildsIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="buildRow">
                        <div className="buildRowTitleMobile">
                            Geometric Pools
                        </div>
                        <div className="buildRowLeft">
                            <img className="buildImg" alt="new pool build" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/Plaster%20tile%20coping.jpg/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600"></img>
                        </div>
                        <div className="buildRowRight">
                            <div className="buildRowTitle">
                                Geometric Pools
                            </div>
                            <div className="buildRowDescription">
                                Geometric pools are a nice way to add character and a modern touch to your backyard paradise. Geometric pools tend to be described as squared, rectangular, or triangular and tend to have sharp clean lines.
                            </div>
                            <div className="learnMoreBuilds">
                                <div>
                                    learn more
                                </div>
                                <svg id="learnMoreBuildsIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="buildRow" id="buildRowReverse">
                        <div className="buildRowTitleMobile">
                            Freeform Pools
                        </div>
                        <div className="buildRowLeft">
                            <img className="buildImg" alt="new pool build" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/Zumwalt%20New.jpg/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600"></img>
                        </div>
                        <div className="buildRowRight">
                            <div className="buildRowTitle">
                                Freeform Pools
                            </div>
                            <div className="buildRowDescription">
                                Freeform pools are more natural in design and flow freely with the space. These designs tend to be utilized in homes with limited space and/or for a more natural environment.
                            </div>
                            <div className="learnMoreBuilds">
                                <div>
                                    learn more
                                </div>
                                <svg id="learnMoreBuildsIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="buildRow">
                        <div className="buildRowTitleMobile">
                            Native Edge Pools
                        </div>
                        <div className="buildRowLeft">
                            <img className="buildImg" alt="new pool build" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/blob-646fbb9.png/:/cr=t:33.26%25,l:0%25,w:100%25,h:50%25/rs=w:1200,h:600,cg:true"></img>
                        </div>
                        <div className="buildRowRight">
                            <div className="buildRowTitle">
                                Native Edge Pools
                            </div>
                            <div className="buildRowDescription">
                                Negative edge pools otherwise known as infinity edge give the aesthetics of a vanishing edge. These pools add character and keep from impairing views of properties that are out of grade.
                            </div>
                            <div className="learnMoreBuilds">
                                <div>
                                    learn more
                                </div>
                                <svg id="learnMoreBuildsIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
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