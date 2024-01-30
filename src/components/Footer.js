import React from "react";
import { useNavigate } from 'react-router-dom';
import f from "../assets/facebook.png";
import i from "../assets/instagram.png";
import y from "../assets/yelp.png";
import "./styles/footerStyle.css";

export default function Footer() {
    const navigate = useNavigate();

    return (
        <div id="footer">
            <div id="footerInner">
                {/* <img src={logo}></img> */}
                <div id="logoflex">
                    <div id="logoFlexInner">
                        <div className="footerLogoBtn">
                            <img alt="facebook" className="footerLogoImg" src={f}></img>
                        </div>
                        <div className="footerLogoBtn">
                            <img alt="instagram" className="footerLogoImg" src={i}></img>
                        </div>
                        <div className="footerLogoBtn">
                            <img alt="yelp" className="footerLogoImg" src={y}></img>
                        </div>
                    </div>
                </div>
                <div id="footerText1">
                    COPYRIGHT © 2024 TEXAS POOL SERVICES LLC - ALL RIGHTS RESERVED.
                </div>
                <div id="footerBtns">
                    <div className="footerBtn" onClick={() => navigate("/")}>
                        HOME
                    </div>
                    <div className="footerBtn" onClick={() => navigate("/builds")}>
                        BUILDS
                    </div>
                    <div className="footerBtn" onClick={() => navigate("/services")}>
                        SERVICES
                    </div>
                    <div className="footerBtn" onClick={() => navigate("/renovation")}>
                        RENOVATION
                    </div>
                    <div className="footerBtn" onClick={() => navigate("/about")}>
                        ABOUT
                    </div>
                </div>
                <div id="footerText2">
                    512 820 7434 | INFO@TEXASPOOLSERVICES.COM
                </div>
            </div>
        </div>
    );
}