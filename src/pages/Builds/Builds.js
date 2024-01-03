import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
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
                                New Pool Builds
                            </div>
                            <div id="buildsHeroSub">
                                Texas Pool Services offers custom pool construction or a series of pre designed builds to fit all budgetary needs! We offer geometric pools, freeform pools, and negative edge pool builds to meet all backyard dreams!
                            </div>
                        </div>
                    </div>
                    <div id="buildsHeroRight">

                    </div>
                </div>
                <div id="waveItem">

                </div>
                <svg id="wave" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,85.3C384,85,480,139,576,186.7C672,235,768,277,864,245.3C960,213,1056,107,1152,80C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,53.3C384,43,480,53,576,90.7C672,128,768,192,864,202.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L48,266.7C96,277,192,299,288,261.3C384,224,480,128,576,101.3C672,75,768,117,864,154.7C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
      
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
                    <div className="buildRow" id="buildRowReverse">
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
            </div>
            <div id="bookNowTitle">
                Contact us
            </div>
            <div id="formSection">
                <div id="formInner">
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