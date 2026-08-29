import React from "react";
import "./Footer.css";
import Fade from "../Fade/Fade";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img" aria-label="love">❤️</span> by{" "}
          {greeting.full_name}
        </p>
      </Fade>
    </div>
  );
}
