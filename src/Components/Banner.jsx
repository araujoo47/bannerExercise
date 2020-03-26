import React, { Fragment, useLayoutEffect, useState } from "react";
import "../Styles/Banner.less";

function Banner(props) {
  let bannerColor;
  const [visible, setVisible] = useState(true);
  const [clicked, setClicked] = useState(false);

  useLayoutEffect(() => {
    bannerColor = document.getElementsByClassName("bannerText")[0];
    bannerColor.style.backgroundColor = props.backgroundColor;
  });

  return(
    <Fragment>
      <div className = "bannerContainer">
        <button
          className = {`bannerButton ${visible ? "" : "buttonSlide"}`}
          onClick = {() => {
            setVisible(false);
            setClicked(true);
            setTimeout(() => setVisible(true), 3000);
            setTimeout(() => setClicked(false), 3000);
          }}
        > X </button>

        <div className = {`bannerText ${clicked ? "bannerTextSlide" : ""}`}>
          <p>{props.children}</p>
        </div>
        
      </div>
    </Fragment>
  );

}

export default Banner;