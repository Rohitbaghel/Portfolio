import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";

export default function Greeting(props) {
  const theme = props.theme;

  const buttonStyles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
    ":focus-visible": {
      outline: `2px solid ${theme.text}`,
      outlineOffset: "2px",
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-name" style={{ color: theme.text }}>
                {greeting.full_name}
              </h1>
              <p
                className="greeting-headline"
                style={{ color: theme.accentColor }}
              >
                {greeting.headline}
              </p>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div greeting-actions">
                <a
                  {...buttonStyles}
                  className="button resume-button"
                  href={greeting.resumeLink}
                  download={greeting.resumeFileName}
                >
                  Download Résumé
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div" aria-hidden="true">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
