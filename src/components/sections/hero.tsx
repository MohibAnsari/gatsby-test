import React, { FC, Fragment } from "react";
import ReactHtmlParser from "react-html-parser";
// Gastby Image
// import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
// CSS
import "./home.css";
// Components
import Button from "../shared/button";


const Hero: FC<IProps> = ({ data }) => {

  return (
    <Fragment>
      <div className="heroWrapper">
        <div className="heroContentWrapper">
          <div className="heroContent">
            <h2>Hi, Welcome!</h2>
            <h1>Grade is good at explaining what I'm doing</h1>
            <div>
              <Button marginTop="24px" text="Book an appointment" />
            </div>
          </div>
        </div>
        <div className="heroImage">
          <div className="heroSquare1"></div>
          <div className="heroSquare2"></div>
          <StaticImage
            src="../../assets/images/main.jpg"
            placeholder="blurred"
            alt="KelaridisPic"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
