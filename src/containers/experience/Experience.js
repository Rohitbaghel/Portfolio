import React from "react";
import "./Experience.css";
import Fade from "../../components/Fade/Fade";
import { experience } from "../../portfolio";
import { highlightMetrics } from "../../utils/highlightMetrics";

function CompanyName({ exp, theme }) {
  if (exp.companyUrl) {
    return (
      <a
        className="experience-company-link"
        href={exp.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: theme.accentColor }}
      >
        {exp.company}
      </a>
    );
  }

  return (
    <span className="experience-company" style={{ color: theme.accentColor }}>
      {exp.company}
    </span>
  );
}

export default function Experience(props) {
  const theme = props.theme;

  if (!experience.data.length) {
    return null;
  }

  return (
    <div className="main" id="experience">
      <div className="experience-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="experience-header" style={{ color: theme.text }}>
            {experience.title}
          </h2>
        </Fade>
      </div>
      <div className="experience-body-div">
        {experience.data.map((exp) => (
          <Fade bottom duration={1500} distance="30px" key={exp.id}>
            <article
              className="experience-card"
              style={{
                backgroundColor: theme.projectCard,
                borderLeft: `4px solid ${theme.accentBright}`,
              }}
            >
              <div className="experience-card-header">
                <h3 className="experience-role" style={{ color: theme.text }}>
                  {exp.role}
                </h3>
                <span
                  className="experience-date"
                  style={{ color: theme.secondaryText }}
                >
                  {exp.date}
                </span>
              </div>
              <div className="experience-meta">
                <CompanyName exp={exp} theme={theme} />
                {exp.location && (
                  <span
                    className="experience-location"
                    style={{ color: theme.secondaryText }}
                  >
                    {exp.location}
                  </span>
                )}
              </div>
              {exp.summary && (
                <p
                  className="experience-summary subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {highlightMetrics(exp.summary, theme.accentColor)}
                </p>
              )}
              {exp.sections &&
                exp.sections.map((section) => (
                  <div className="experience-section" key={section.title}>
                    <h4
                      className="experience-section-title"
                      style={{ color: theme.text }}
                    >
                      {section.title}
                    </h4>
                    <ul className="experience-list">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="experience-list-item subTitle"
                          style={{ color: theme.secondaryText }}
                        >
                          {highlightMetrics(bullet, theme.accentColor)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              {exp.bullets && (
                <ul className="experience-list">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="experience-list-item subTitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {highlightMetrics(bullet, theme.accentColor)}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </Fade>
        ))}
      </div>
    </div>
  );
}
