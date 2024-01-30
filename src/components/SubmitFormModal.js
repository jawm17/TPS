import React from "react";
import icon from "../assets/pngicon.png"
import "./styles/submitFormModalStyle.css";

export default function SubmitFormModal(props) {

    return (
        <>
            <div id="modalBlur">

            </div>
            <div id="modalMain">
                <div id="modalTop">
                
                    {/* <img src={icon}></img> */}
                    {/* <svg id="waveTop" viewBox="0 0 1440 150" version="1.1" xmlns="https://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(36, 51, 122, 1)" offset="0%"></stop><stop stop-color="rgba(36, 51, 122, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient-0)" d="M0,45L80,52.5C160,60,320,75,480,70C640,65,800,40,960,32.5C1120,25,1280,35,1440,50C1600,65,1760,85,1920,92.5C2080,100,2240,95,2400,90C2560,85,2720,80,2880,70C3040,60,3200,45,3360,35C3520,25,3680,20,3840,27.5C4000,35,4160,55,4320,72.5C4480,90,4640,105,4800,95C4960,85,5120,50,5280,37.5C5440,25,5600,35,5760,42.5C5920,50,6080,55,6240,67.5C6400,80,6560,100,6720,97.5C6880,95,7040,70,7200,52.5C7360,35,7520,25,7680,20C7840,15,8000,15,8160,25C8320,35,8480,55,8640,67.5C8800,80,8960,85,9120,90C9280,95,9440,100,9600,107.5C9760,115,9920,125,10080,122.5C10240,120,10400,105,10560,92.5C10720,80,10880,70,11040,67.5C11200,65,11360,70,11440,72.5L11520,75L11520,150L11440,150C11360,150,11200,150,11040,150C10880,150,10720,150,10560,150C10400,150,10240,150,10080,150C9920,150,9760,150,9600,150C9440,150,9280,150,9120,150C8960,150,8800,150,8640,150C8480,150,8320,150,8160,150C8000,150,7840,150,7680,150C7520,150,7360,150,7200,150C7040,150,6880,150,6720,150C6560,150,6400,150,6240,150C6080,150,5920,150,5760,150C5600,150,5440,150,5280,150C5120,150,4960,150,4800,150C4640,150,4480,150,4320,150C4160,150,4000,150,3840,150C3680,150,3520,150,3360,150C3200,150,3040,150,2880,150C2720,150,2560,150,2400,150C2240,150,2080,150,1920,150C1760,150,1600,150,1440,150C1280,150,1120,150,960,150C800,150,640,150,480,150C320,150,160,150,80,150L0,150Z"></path></svg> */}
                    <svg id="waveTop2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#24337a" fill-opacity="1" d="M0,160L80,138.7C160,117,320,75,480,96C640,117,800,203,960,229.3C1120,256,1280,224,1360,208L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                    <svg id="waveTop3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0693e3" fill-opacity="1" d="M0,160L80,138.7C160,117,320,75,480,96C640,117,800,203,960,229.3C1120,256,1280,224,1360,208L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
          
                </div>
                <div id="line1Form">
                    Thank you for contacting us
                </div>
                <div id="line2Form">
                    We will reach out to you ASAP
                </div>
                <div id="closeModalBtn" onClick={() => props.close()}>
                    close
                </div>
            </div>
        </>
    );
}