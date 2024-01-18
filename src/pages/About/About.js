import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Waves1,Waves2} from "../../components/WavesComp";
import "./aboutStyle.css";
export default function About() {
  return (
    <>
      <Header page={"about"} />

      {/* About Content */}
      <div id="aboutContent">
        {/* hero */}
        <div id="aboutHero">
          <h2>About Us</h2>
          <p>
            Redefining luxury, one pool at a time! Call now at (512)200-4244
          </p>
          {/* call btn here */}
        </div>
        {/* Why we created Texas Pool Services? */}
        <div id="whyConatiner">
          {/* Wave SVG */}
          <div id="waveSVGheader">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 1280 140"
              preserveAspectRatio="none"
            >
              <g fill="white">
                <path d="M320 28C160 28 80 49 0 70V0h1280v70c-80 21-160 42-320 42-320 0-320-84-640-84z" />
              </g>
            </svg>
          </div>

          {/* sub */}
          <h4>Why we created Texas Pool Services?</h4>
          {/* title */}
          <h3>Why we created Texas Pool Services?</h3>
          {/* store */}
          <p>
            Texas Pool Services was created to fill a void in the Austin area
            "Pool Company". Most companies focus on one area of excellence but
            we believe that doing it all sets us apart, so we specialize in it
            all. Texas Pool Services also believes education in this market is
            and has been lacking. Most "Pool Guys" will tell you their opinion
            and not follow the proven science your pool needs. We focus on
            education, not only ours but yours too! The more we all know the
            longer your hard earned money will last. Call Today to learn the
            Texas Pool Services way!
          </p>
        </div>
        {/* Our Service Areas */}
        <div id="ourAboutServiceConatiner">
                  {/* Wave SVG */}
          <Waves1 fill="#24337A"/>
          <h3>Our Service Areas</h3>
          {/* 1 */}
          <div>
            <h4>New Pool Construction</h4>
            <p>
              Austin , Georgetown, Round Rock, Cedar Park, Leander,
              Pflugerville, Salado, Copperas Cove, Liberty Hill, Burnet, Marble
              Falls, Dripping Springs, Wimberly, Blanco, Buda, Kyle, New
              Braunfels, Bastrop, Dale, Elgin, Manor.
            </p>
          </div>
          {/* 2 */}
          <div>
            <h4>Swimming Pool Renovations</h4>
            <p>
              Austin , Georgetown, Round Rock, Cedar Park, Leander,
              Pflugerville, Salado, Copperas Cove, Liberty Hill, Burnet, Marble
              Falls, Dripping Springs, Wimberly, Blanco, Buda, Kyle, New
              Braunfels, Bastrop, Dale, Elgin, Manor.
            </p>
          </div>
          {/* 3 */}
          <div>
            <h4>Maintenance Service Areas</h4>
            <p>
              Austin , Georgetown, Round Rock, Cedar Park, Leander,
              Pflugerville.
            </p>
          </div>
          {/* 4 */}
          <div>
            <h4>Repairs</h4>
            <p>
              Austin , Georgetown, Round Rock, Cedar Park, Leander,
              Pflugerville, Salado, Copperas Cove, Liberty Hill, Burnet, Marble
              Falls, Dripping Springs, Wimberly, Blanco, Buda, Kyle, New
              Braunfels, Bastrop, Dale, Elgin, Manor.
            </p>
          </div>
        </div>
        {/* National Plaster Council */}
        <div>
          <h3>National Plaster Council</h3>
          <p>
            The NPC professionals have spent years of their lives studying and
            documenting why things happen, the reactions of cements with certain
            water, the chemical science behind pools, and more. We use their
            knowledge and case studies to make sure our staff is trained to
            respond to your pools issues. Which in turns will keep your pool
            looking beautiful for years to come!
          </p>
          {/* button */}
          <div>LEARN MORE </div>
        </div>
        {/* footer shit */}
      </div>
      <Footer />
    </>
  );
}
