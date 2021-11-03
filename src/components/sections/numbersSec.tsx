import React, { FC, Fragment } from "react";


const NumbersSec: FC<IProps> = ({ data }) => {
  return (
    <Fragment>
      <div style={{ position: "relative" }} className="wrapper">
        <div className="numberSecWrapper sectionSpace  sectionPadding">
            <div className="numbersCard">
              <h1>20</h1>
              <p>Years of experience</p>
            </div>
            <div className="numbersCard">
              <h1>4000+</h1>
              <p>Happy Cases</p>
            </div>
            <div className="numbersCard">
              <h1>15</h1>
              <p>Awards achived</p>
            </div>
        </div>
        <div className="numbersSecSquare1"></div>
        <div className="numbersSecSquare2"></div>
      </div>
    </Fragment>
  );
};

export default NumbersSec;
