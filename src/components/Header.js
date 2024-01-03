import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/TPS_logo.png";
import "./styles/headerStyle.css";

export default function Header(props) {
    const navigate = useNavigate();
    const [locationsOpen, setLocationsOpen] = useState(false);

    function navigateMenu(loc) {
        setLocationsOpen(false);
        navigate("/location/" + loc);
    }

    return (
        <>
            <div id="topStrip">
                <div id="topStripInner">
                    <div id="leftStrip">
                        <svg id="stripIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div>
                            Mon-Fri 08:00 AM - 05:00 PM
                        </div>
                    </div>
                    <div id="rightStrip">
                        <svg id="stripIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div>
                            512-820-7434
                        </div>
                    </div>
                </div>
                <svg id="closeStripIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <div id="headerMain">
                <div id="headerInner">
                    <img src={logo} id="headerLogo" alt="pool logo" onClick={() => navigate("/")}></img>
                    <div id="headerLinks">
                        <div className="headerLink" id={props.page === "landing" ? "selectedPage" : ""} onClick={() => navigate("/")}>
                            HOME
                        </div>
                        <div className="headerLink" id={props.page === "builds" ? "selectedPage" : ""} onClick={() => navigate("/builds")}>
                            BUILDS
                        </div>
                        <div className="headerLink" id={props.page === "services" ? "selectedPage" : ""} onClick={() => navigate("/services")}>
                            SERVICES
                        </div>
                        <div className="headerLink" id={props.page === "remodling" ? "selectedPage" : ""} onClick={locationsOpen ? () => setLocationsOpen(false) : () => setLocationsOpen(true)} onMouseEnter={() => setLocationsOpen(true)}>
                            <div>
                                LOCATIONS
                            </div>
                            <svg id="headerDown" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            {locationsOpen ?
                                <div id="locationsMenu">
                                    <div className="locationMenuItem" onClick={() => navigateMenu("1")}>
                                    Marble Falls
                                    </div>
                                    <div className="locationMenuItem" onClick={() => navigateMenu("2")}>
                                    Westlake
                                    </div>
                                    <div className="locationMenuItem" onClick={() => navigateMenu("3")}>
                                    The Hills
                                    </div>
                                    <div className="locationMenuItem" onClick={() => navigateMenu("4")}>
                                    Spicewood
                                    </div>
                                    <div className="locationMenuItem" onClick={() => navigateMenu("5")}>
                                    Dripping Springs
                                    </div>
                                    <div className="locationMenuItem" onClick={() => navigateMenu("6")}>
                                    Lago Vista
                                    </div>
                                    <div className="locationMenuItem" onClick={() => navigateMenu("7")}>
                                    Lakeway
                                    </div>
                                </div>
                                : null}
                        </div>
                        <div className="headerLink" id={props.page === "about" ? "selectedPage" : ""} onClick={() => navigate("/about")}>
                            ABOUT
                        </div>
                        <div id="contactBtnHeader">
                            CALL NOW
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}