import React, { useEffect, useState, useRef } from "react";
import hightLightCards from "../assets/hightLightCards.json";

import "./styles/hoverCardStyle.css";

export default function HoverCardDiv() {
    const [highlight, setHighlight] = useState(0);

  return (
    <>
      <div id="section1">
        <div id="section1TopText">Our Service Areas</div>
        <div id="section1ImgFlex">
          <div id="section1ImgArea">
            {hightLightCards.map((hightlightInfo, key) => {
              return (
                <div
                  className="section1Highlight" 
                  id={highlight === hightlightInfo.number ? "highlightOpen" : ""}
                  onMouseEnter={() => setHighlight(hightlightInfo.number)}
                  onMouseLeave={() => setHighlight(0)}
                >
                  <div className="highlightBlur">
                    <div className="highlightFade">
                      <div className="highlightTitle">
                        {hightlightInfo.title}
                      </div>
                    </div>
                    <div className="learnMoreHighlight">
                      <div className="highlightInfo">
                        {hightlightInfo.info}
                      </div>
                    </div>
                    <div className="learnMoreBtn">
                      <div>show {highlight === hightlightInfo.number ? "less" : "more"}</div>
                      <svg
                        id="learnMoreIcon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
