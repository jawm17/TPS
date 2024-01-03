import React from "react";
import logo from "../assets/TPS_logo.png";
import f from "../assets/facebook.png";
import i from "../assets/instagram.png";
import y from "../assets/yelp.png";
import "./styles/footerStyle.css";

export default function Footer() {

    return (
        <div id="footer">
            <div id="footerInner">
                <div className="footerSection">
                    {/* <img src={logo} id="footerLogo"></img> */}
                    <div id="footerTitle">
                        Our Locations
                    </div>
                    <div className="locationGroup">
                        <div className="footerLoc">
                            Marble Falls
                        </div>
                        <div className="footerLoc">
                          Dripping Springs
                        </div>
                        <div className="footerLoc">
                            The Hills
                        </div>
                    </div>
                    <div className="locationGroup">
                        <div className="footerLoc">
                            Spicewood
                        </div>
                        <div className="footerLoc">
                        Westlake
                        </div>
                        <div className="footerLoc">
                            Lago Vista
                        </div>
                    </div>
                    <div className="footerLoc">
                        Lakeway
                    </div>
                </div>
                <div className="footerSection">
                    <div id="footerDescription">
                        Our experienced electricians are highly trained in all aspects of electrical service, from office lighting and security systems to emergency repair.
                    </div>
                    {/* <div className="footerStat">
                        <svg id="footerIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <div className="footerStatText">

                        </div>
                    </div> */}
                    <div className="footerStat">
                        <svg id="footerIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div className="footerStatText">
                            Mon-Fri 08:00 AM - 05:00 PM
                        </div>
                    </div>
                    <div className="footerStat">
                        <svg id="footerIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div className="footerStatText">
                            512-820-7434
                        </div>
                    </div>
                </div>
                <div className="footerSection">

                </div>
            </div>
        </div>
    );
}