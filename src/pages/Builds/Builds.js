import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import CallBtn from "../../components/CallBtn";
import CallBtnModal from "../../components/CallBtnModal";
import ContactForm from "../../components/ContactForm";
import { Wave } from "../../components/WavesComp";
import "./buildsStyle.css";

export default function Builds() {

    const [callModal, setCallModal] = useState(false);
    const [mobile, setMobile] = useState(true);

    let slideIndex = 0;

    useEffect(() => {
        showSlides();
    }, []);

    useEffect(() => {

        if ((/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))) {
        setMobile(true);
      } else {
          setMobile(false);
      }
    }, []);
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
            {callModal ? <CallBtnModal close={() => setCallModal(false)} /> : null}
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
     
            <div id="buildsIntroOuter">
            <Wave fill="#0693e3" />
            <Wave idName="bottomWave" fill="white" />
            <div id="buildsIntro">
    
                <div id="buildsIntroTop">
                    CRAFTING EXTRAORDINARY POOLSCAPES
                </div>
                <div id="buildsIntroTitle">
                    Texas Pool Services, Your Premier Pool Builders
                </div>
                <div id="buildsIntroBottom">
                    At Texas Pool Services, we've built a solid reputation for crafting remarkable swimming pools that exceed expectations. As Austin's premier pool builder and trusted choice in the surrounding regions, we are committed to turning your pool dreams into reality. Our team of seasoned pool builders merges cutting-edge design, superior craftsmanship, and personalized attention to detail, ensuring that the pools we deliver surpass even your wildest imagination.
                </div>
                <div id="awardsFlexOuter">
                    <div id="awardsFlex">
                        <img className="awardItem" src="https://0f26bd.a2cdn1.secureserver.net/wp-content/uploads/google-guarantee-service-400x403.png"></img>
                        <img className="awardItem" src="https://0f26bd.a2cdn1.secureserver.net/wp-content/uploads/CBPofficial.png"></img>
                        <img className="awardItem" id="award3" src="https://0f26bd.a2cdn1.secureserver.net/wp-content/uploads/Top502023-150x150.png"></img>
                    </div>
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
                            <div className="learnMoreBuilds" onClick={mobile ? () => document.getElementById("formSection").scrollIntoView({ behavior: "smooth" }) : () => setCallModal(true)}>
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
                            <div className="learnMoreBuilds" onClick={mobile ? () => document.getElementById("formSection").scrollIntoView({ behavior: "smooth" }) : () => setCallModal(true)}>
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
                            <div className="learnMoreBuilds" onClick={mobile ? () => document.getElementById("formSection").scrollIntoView({ behavior: "smooth" }) : () => setCallModal(true)}>
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
                            Negative Edge Pools
                        </div>
                        <div className="buildRowLeft">
                            <img className="buildImg" alt="new pool build" src="https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/blob-646fbb9.png/:/cr=t:33.26%25,l:0%25,w:100%25,h:50%25/rs=w:1200,h:600,cg:true"></img>
                        </div>
                        <div className="buildRowRight">
                            <div className="buildRowTitle">
                                Negative Edge Pools
                            </div>
                            <div className="buildRowDescription">
                                Negative edge pools otherwise known as infinity edge give the aesthetics of a vanishing edge. These pools add character and keep from impairing views of properties that are out of grade.
                            </div>
                            <div className="learnMoreBuilds" onClick={mobile ? () => document.getElementById("formSection").scrollIntoView({ behavior: "smooth" }) : () => setCallModal(true)}>
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