import React from "react";
import "./Skills.css";
import { skills } from "../../portfolio";
import Fade from "../../components/Fade/Fade";

export default function SkillSection(props) {
  const theme = props.theme;

  return (
    <div className="skills-groups">
      {skills.groups.map((group) => (
        <Fade bottom duration={1500} distance="20px" key={group.title}>
          <div
            className="skills-group-card"
            style={{ backgroundColor: theme.projectCard }}
          >
            <h3 className="skills-group-title" style={{ color: theme.text }}>
              {group.title}
            </h3>
            <p
              className="skills-group-items subTitle"
              style={{ color: theme.secondaryText }}
            >
              {group.items.join(", ")}
            </p>
          </div>
        </Fade>
      ))}
    </div>
  );
}
