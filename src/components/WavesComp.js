import React from "react";
import "./styles/waveStyle.css";
function Wave(props) {
  return (
    <>
      {/* Wave SVG */}
      <div id={props.idName} className="waveSVGcontainer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1280 140"
          preserveAspectRatio="none"
        >
          <g fill={props.fill}>
            <path d="M320 28C160 28 80 49 0 70V0h1280v70c-80 21-160 42-320 42-320 0-320-84-640-84z" />
          </g>
        </svg>
      </div>
    </>
  );
}

export { Wave };
