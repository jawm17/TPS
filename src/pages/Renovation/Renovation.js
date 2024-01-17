import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import "./renovationStyle.css";

export default function Renovation() {

    return (
        <div>
            <Header page={"builds"} />
            <div id="buildsSectionHero">

                <div id="slidesArea">
                    <div className="mySlides fade">
                        <img alt="swimming pool 1" className="slidesImg" src="https://www.longhornpools.com/wp-content/uploads/2023/06/pool-renovation-company-austin-tx01.jpg" />
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
                                Pool Renovation
                            </div>
                            <div id="buildsHeroSub">
                                Texas Pool Services offers custom pool construction or a series of pre designed builds to fit all budgetary needs! <mark id="mobileNoneBuilds">We offer geometric pools, freeform pools, and negative edge pool builds to meet all backyard dreams!</mark>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <svg id="buildWave" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,96L80,106.7C160,117,320,139,480,144C640,149,800,139,960,122.7C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
                {/* <svg id="buildWave" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L80,202.7C160,181,320,139,480,149.3C640,160,800,224,960,213.3C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
                {/* <svg id="buildWave" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L80,202.7C160,181,320,139,480,149.3C640,160,800,224,960,213.3C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
            </div>
            <div id="renovationIntro">
                <div id="renovationIntroInner">
                    <div id="renovationIntroTitle">
                        Revive and Transform Your Pool with Texas Pool Services’ Renovation Services
                    </div>
                    <div id="renovationIntroDescription">
                        Is your pool in need of a refreshing update? Look no further than Texas Pool Services for professional pool renovation services in Southwest Austin. We specialize in breathing new life into tired, outdated pools, turning them into stunning outdoor retreats that you’ll love to spend time in.
                    </div>
                </div>
            </div>
            <div id="renovationOptionsArea">
                <img alt="pool renovation" id="renovationOptionsImg" src="https://www.longhornpools.com/wp-content/uploads/2023/06/pool-renovation-company-austin-tx01.jpg"></img>
                <div id="renovationDark">

                </div>
            </div>
           
            <Footer />
        </div>
    );
}