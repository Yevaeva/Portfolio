import React from "react";
import Main from "../main/Main";
import "./About.scss";
import Pulse from "react-reveal/Pulse";

const About = () => {
  return (
    <div>
      <Main />
      <div id="about">
        <div className="cover"></div>
        <Pulse right>
          <div className="about">
            <h2>Who am I</h2>
            <p>
              Hi, I am a Web developer with a passion for web application
              development. Skilled at writing well-designed, testable and
              efficient code using current best practices in Web development.
              I'm always in for learning new stuff, seeking to improve and grow
              as a professional and as a person. I enjoy solving complex
              problems. As an energetic and imaginative young web developer I am
              able to work alongside another talented IT professionals for
              creating websites.
            </p>
          </div>
        </Pulse>
        <div className="bgImage"></div>
      </div>
    </div>
  );
};
export default About;
