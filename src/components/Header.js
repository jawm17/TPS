import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/tpsLogo.png";
import "./styles/headerStyle.css";

export default function Header(props) {
    const navigate = useNavigate();
    const [locationsOpen, setLocationsOpen] = useState(false);
    const [buildsMenuOpen, setBuildsMenuOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropOpen1, setDropOpen1] = useState(false);
    const [dropOpen2, setDropOpen2] = useState(false);
    const [dropOpen3, setDropOpen3] = useState(false);

    function navigateMenu(loc) {
        setLocationsOpen(false);
        setMenuOpen(false);
        navigate("/location/" + loc);
    }

    function navigateMobileMenu(loc) {
        setMenuOpen(false);
        setBuildsMenuOpen(false)
        navigate(loc);
    }

    return (
        <>
            {/* <div id="topStrip">
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
            </div> */}
            <div id="headerMain">
                <div id="headerInner">
                    <img src={logo} id="headerLogo" alt="pool logo" onClick={() => navigateMobileMenu("/")}></img>

                    <div id="headerLinks">
                        {/* <div className="headerLink" id={props.page === "landing" ? "selectedPage" : ""} onClick={() => navigate("/")}>

                            {props.page !== "landing" ?
                                <svg id="headerIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                :

                                <svg id="headerIcon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                </svg>
                            }
                            <div>
                                HOME
                            </div>
                        </div> */}
                        <div className="headerLink" id={props.page === "builds" ? "selectedPage" : ""} onClick={buildsMenuOpen ? () => setBuildsMenuOpen(false) : () => setBuildsMenuOpen(true)} onMouseEnter={() => setBuildsMenuOpen(true)}>
                            {props.page !== "builds" ?
                                <svg id="headerIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                                </svg>
                                :
                                <svg id="headerIcon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
                                </svg>

                            }
                            <div>
                                POOL CONSTRUCTION
                            </div>
                            <svg id="headerDown" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            {buildsMenuOpen ?
                                <div id="buildsMenu" onMouseLeave={() => setBuildsMenuOpen(false)}>
                                    <div className="buildsMenuItem" onClick={() => navigateMobileMenu("/builds")}>
                                        New Pool Construction
                                    </div>
                                    <div className="buildsMenuItem" onClick={() => navigateMobileMenu("/renovation")}>
                                        Pool Renovation
                                    </div>
                                </div>
                                : null}
                        </div>
                        {/* <div className="headerLink" id={props.page === "builds" ? "selectedPage" : ""} onClick={() => navigate("/builds")}>
                        {props.page !== "builds" ?
                                <svg id="headerIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                                </svg>
                                :
                                <svg id="headerIcon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
                                </svg>

                            }
                            <div>
                                POOL CONSTRUCTION
                            </div>
                        </div> */}
                        <div className="headerLink" id={props.page === "services" ? "selectedPage" : ""} onClick={() => navigate("/services")}>
                            {props.page !== "services" ?
                                <svg id="headerIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                                :
                                <svg id="headerIcon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                                    <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                                    <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                                </svg>
                            }
                            <div>
                                POOL SERVICES
                            </div>
                        </div>
                        <div className="headerLink" id={props.page === "remodling" ? "selectedPage" : ""} onClick={locationsOpen ? () => setLocationsOpen(false) : () => setLocationsOpen(true)} onMouseEnter={() => setLocationsOpen(true)}>
                            {props.page !== "remodling" ?
                                <svg id="headerIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                                </svg>
                                :
                                <svg id="headerIcon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clip-rule="evenodd" />
                                </svg>
                            }
                            <div>
                                LOCATIONS
                            </div>
                            <svg id="headerDown" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            {locationsOpen ?
                                <div id="locationsMenu" onMouseLeave={() => setLocationsOpen(false)}>
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
                            {props.page !== "about" ?
                                <svg id="headerIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                </svg>
                                :
                                <svg id="headerIcon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                                </svg>
                            }

                            ABOUT
                        </div>
                        <div id="contactBtnHeader" onClick={() => window.location.href = `tel:${5128207434}`}>
                            CALL NOW
                        </div>
                        {menuOpen ?
                            <svg onClick={() => setMenuOpen(false)} id="menuIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            :
                            <svg onClick={() => setMenuOpen(true)} id="menuIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        }
                    </div>
                </div>
                {/* <svg id="waveDash" viewBox="0 0 1440 100" version="1.1" xmlns="https://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(0, 112.461, 255, 1)" offset="0%"></stop><stop stop-color="rgba(0, 0.157, 255, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient-0)" d="M0,60L80,51.7C160,43,320,27,480,30C640,33,800,57,960,68.3C1120,80,1280,80,1440,80C1600,80,1760,80,1920,80C2080,80,2240,80,2400,80C2560,80,2720,80,2880,68.3C3040,57,3200,33,3360,33.3C3520,33,3680,57,3840,68.3C4000,80,4160,80,4320,75C4480,70,4640,60,4800,51.7C4960,43,5120,37,5280,30C5440,23,5600,17,5760,13.3C5920,10,6080,10,6240,16.7C6400,23,6560,37,6720,48.3C6880,60,7040,70,7200,75C7360,80,7520,80,7680,66.7C7840,53,8000,27,8160,15C8320,3,8480,7,8640,13.3C8800,20,8960,30,9120,28.3C9280,27,9440,13,9600,10C9760,7,9920,13,10080,28.3C10240,43,10400,67,10560,63.3C10720,60,10880,30,11040,15C11200,0,11360,0,11440,0L11520,0L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path></svg> */}
                {/* <svg id="waveDash" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(0, 112, 255, 1)" offset="0%"></stop><stop stop-color="rgba(0, 112, 255, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient-0)" d="M0,0L80,13.3C160,27,320,53,480,63.3C640,73,800,67,960,55C1120,43,1280,27,1440,16.7C1600,7,1760,3,1920,16.7C2080,30,2240,60,2400,70C2560,80,2720,70,2880,68.3C3040,67,3200,73,3360,63.3C3520,53,3680,27,3840,23.3C4000,20,4160,40,4320,51.7C4480,63,4640,67,4800,71.7C4960,77,5120,83,5280,85C5440,87,5600,83,5760,78.3C5920,73,6080,67,6240,65C6400,63,6560,67,6720,63.3C6880,60,7040,50,7200,50C7360,50,7520,60,7680,55C7840,50,8000,30,8160,30C8320,30,8480,50,8640,55C8800,60,8960,50,9120,48.3C9280,47,9440,53,9600,51.7C9760,50,9920,40,10080,45C10240,50,10400,70,10560,75C10720,80,10880,70,11040,68.3C11200,67,11360,73,11440,76.7L11520,80L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path></svg> */}
                <svg id="waveDash" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(0, 112, 255, 1)" offset="0%"></stop><stop stop-color="rgba(0, 0.157, 255, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient-0)" d="M0,50L80,51.7C160,53,320,57,480,53.3C640,50,800,40,960,38.3C1120,37,1280,43,1440,53.3C1600,63,1760,77,1920,71.7C2080,67,2240,43,2400,33.3C2560,23,2720,27,2880,38.3C3040,50,3200,70,3360,75C3520,80,3680,70,3840,65C4000,60,4160,60,4320,58.3C4480,57,4640,53,4800,43.3C4960,33,5120,17,5280,15C5440,13,5600,27,5760,36.7C5920,47,6080,53,6240,61.7C6400,70,6560,80,6720,83.3C6880,87,7040,83,7200,83.3C7360,83,7520,87,7680,76.7C7840,67,8000,43,8160,33.3C8320,23,8480,27,8640,31.7C8800,37,8960,43,9120,46.7C9280,50,9440,50,9600,56.7C9760,63,9920,77,10080,80C10240,83,10400,77,10560,65C10720,53,10880,37,11040,38.3C11200,40,11360,60,11440,70L11520,80L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path></svg>
                {/* <svg id="waveDash" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(36, 51, 122, 1)" offset="0%"></stop><stop stop-color="rgba(0, 0.157, 255, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient-0)" d="M0,50L80,51.7C160,53,320,57,480,53.3C640,50,800,40,960,38.3C1120,37,1280,43,1440,53.3C1600,63,1760,77,1920,71.7C2080,67,2240,43,2400,33.3C2560,23,2720,27,2880,38.3C3040,50,3200,70,3360,75C3520,80,3680,70,3840,65C4000,60,4160,60,4320,58.3C4480,57,4640,53,4800,43.3C4960,33,5120,17,5280,15C5440,13,5600,27,5760,36.7C5920,47,6080,53,6240,61.7C6400,70,6560,80,6720,83.3C6880,87,7040,83,7200,83.3C7360,83,7520,87,7680,76.7C7840,67,8000,43,8160,33.3C8320,23,8480,27,8640,31.7C8800,37,8960,43,9120,46.7C9280,50,9440,50,9600,56.7C9760,63,9920,77,10080,80C10240,83,10400,77,10560,65C10720,53,10880,37,11040,38.3C11200,40,11360,60,11440,70L11520,80L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path></svg> */}

            </div>
            <div id={menuOpen ? "mobileMenuOpen" : "mobileMenu"}>
                <div id="mobileMenuInner">
                    <div className="mobileMenuItem">
                        <div className="mobileMenuItemTop" onClick={() => setDropOpen1(!dropOpen1)}>
                            <svg id="headerIcon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
                            </svg>
                            <div>
                                POOL CONSTRUCTION
                            </div>
                            <svg id="mobileMenuDropIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        {dropOpen1 ?
                            <div id="menuDropDownArea">
                                <div className="dropDownOption" onClick={() => navigateMobileMenu("/builds")}>
                                    New Pool Construction
                                </div>
                                <div className="dropDownOption" onClick={() => navigateMobileMenu("/renovation")}>
                                    Pool Renovation
                                </div>
                            </div>
                            :
                            null
                        }
                    </div>
                    <div className="mobileMenuItem">
                        <div className="mobileMenuItemTop" onClick={() => setDropOpen2(!dropOpen2)}>
                            <svg id="headerIcon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                            </svg>
                            <div>
                                POOL SERVICES
                            </div>
                            <svg id="mobileMenuDropIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        {dropOpen2 ?
                            <div id="menuDropDownArea">
                                <div className="dropDownOption" onClick={() => navigateMobileMenu("/services")}>
                                    Repairs
                                </div>
                                <div className="dropDownOption" onClick={() => navigateMobileMenu("/services")}>
                                    Cleaning
                                </div>
                                <div className="dropDownOption" onClick={() => navigateMobileMenu("/services")}>
                                    Chemical Tests
                                </div>
                            </div>
                            :
                            null
                        }
                    </div>
                    <div className="mobileMenuItem">
                        <div className="mobileMenuItemTop" onClick={() => setDropOpen3(!dropOpen3)}>
                            <svg id="headerIcon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clip-rule="evenodd" />
                            </svg>
                            <div>
                                LOCATIONS
                            </div>
                            <svg id="mobileMenuDropIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        {dropOpen3 ?
                            <div id="menuDropDownArea">
                                <div className="dropDownOption" onClick={() => navigateMenu("1")}>
                                    Marble Falls
                                </div>
                                <div className="dropDownOption" onClick={() => navigateMenu("2")}>
                                    Westlake
                                </div>
                                <div className="dropDownOption" onClick={() => navigateMenu("3")}>
                                    The Hills
                                </div>
                                <div className="dropDownOption" onClick={() => navigateMenu("4")}>
                                    Spicewood
                                </div>
                                <div className="dropDownOption" onClick={() => navigateMenu("5")}>
                                    Dripping Springs
                                </div>
                                <div className="dropDownOption" onClick={() => navigateMenu("6")}>
                                    Lago Vista
                                </div>
                                <div className="dropDownOption" onClick={() => navigateMenu("7")}>
                                    Lakeway
                                </div>
                            </div>
                            :
                            null
                        }
                    </div>
                    <div className="mobileMenuItem">
                        <div className="mobileMenuItemTop" onClick={() => navigateMobileMenu("/about")}>
                            <svg id="headerIcon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                            </svg>
                            <div>
                                ABOUT
                            </div>
                        </div>
                    </div>
                    <div id="mobileMenuContactBtn" onClick={() => window.location.href = `tel:${5128207434}`}>
                        CALL NOW
                    </div>
                </div>
            </div>
        </>
    );
}