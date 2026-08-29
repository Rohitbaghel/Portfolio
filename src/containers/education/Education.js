import React from "react";
import "./Education.css";
import { Fade } from "react-reveal";
import { education } from "../../portfolio";

export default function Education(props) {
  const theme = props.theme;

  return (
    <div className="main" id="education">
      <div className="education-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="education-header" style={{ color: theme.text }}>
            {education.title}
          </h2>
        </Fade>
      </div>
      <div className="education-body-div">
        {education.data.map((item) => (
          <Fade bottom duration={1500} distance="30px" key={item.id}>
            <article
              className="education-card"
              style={{
                backgroundColor: theme.projectCard,
                borderLeft: `4px solid ${theme.accentBright}`,
              }}
            >
              <div className="education-card-header">
                <h3 className="education-degree" style={{ color: theme.text }}>
                  {item.degree}
                </h3>
                <span
                  className="education-date"
                  style={{ color: theme.secondaryText }}
                >
                  {item.date}
                </span>
              </div>
              <p
                className="education-school subTitle"
                style={{ color: theme.secondaryText }}
              >
                {item.school}, {item.location}
              </p>
            </article>
          </Fade>
        ))}
      </div>
    </div>
  );
}
