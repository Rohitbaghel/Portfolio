import React from "react";
import "./Achievements.css";
import Fade from "../../components/Fade/Fade";
import { achievements } from "../../portfolio";

export default function Achievements(props) {
  const theme = props.theme;

  return (
    <div className="main" id="achievements">
      <div className="achievements-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="achievements-header" style={{ color: theme.text }}>
            {achievements.title}
          </h2>
        </Fade>
      </div>
      <div className="achievements-grid">
        {achievements.data.map((item) => (
          <Fade bottom duration={1500} distance="30px" key={item.id}>
            <article
              className="achievement-card"
              style={{ backgroundColor: theme.projectCard }}
            >
              <h3 className="achievement-claim" style={{ color: theme.text }}>
                {item.claim}
              </h3>
              <p
                className="achievement-support subTitle"
                style={{ color: theme.secondaryText }}
              >
                {item.support}
              </p>
            </article>
          </Fade>
        ))}
      </div>
    </div>
  );
}
