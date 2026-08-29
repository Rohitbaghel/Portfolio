import React from "react";
import "./ProjectLanguages.css";

function ProjectLanguages(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {props.logos.map((logo) => (
            <li
              key={logo.name}
              className="software-skill-inline-languages"
              title={logo.name}
              aria-label={logo.name}
            >
              <span
                className="iconify"
                data-icon={logo.iconifyClass}
                data-inline="false"
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectLanguages;
