import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import Fade from "../Fade/Fade";

export default function ProjectCard({ repo, theme }) {
  const demoUrl = repo.url;
  const githubUrl = repo.github;
  const primaryLink = demoUrl || githubUrl;
  const isClickable = Boolean(primaryLink);

  function handleClick() {
    if (primaryLink) {
      window.open(primaryLink, "_blank", "noopener,noreferrer");
    }
  }

  function handleKeyDown(event) {
    if (isClickable && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      handleClick();
    }
  }

  const cardStyle = {
    color: theme.text,
    backgroundColor: theme.projectCard,
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: isClickable ? "pointer" : "default",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
  };

  const cardProps = {
    className: `project-card${isClickable ? " project-card--clickable" : ""}`,
    style: cardStyle,
    onClick: isClickable ? handleClick : undefined,
    onKeyDown: isClickable ? handleKeyDown : undefined,
    role: isClickable ? "link" : undefined,
    tabIndex: isClickable ? 0 : undefined,
  };

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        {isClickable ? (
          <div {...cardProps}>
            <ProjectCardContent repo={repo} theme={theme} isClickable={isClickable} />
          </div>
        ) : (
          <article {...cardProps}>
            <ProjectCardContent repo={repo} theme={theme} isClickable={isClickable} />
          </article>
        )}
      </Fade>
    </div>
  );
}

function ProjectCardContent({ repo, theme, isClickable }) {
  return (
    <>
      <div className="repo-name-div">
        <h3 className="repo-name" style={{ color: theme.text }}>
          {repo.name}
        </h3>
        {!isClickable && repo.output && (
          <span className="repo-badge" style={{ color: theme.secondaryText }}>
            Shipped
          </span>
        )}
      </div>
      <p className="repo-description" style={{ color: theme.text }}>
        {repo.description}
      </p>
      {repo.output && (
        <p className="repo-output" style={{ color: theme.accentColor }}>
          <strong>OUTPUT:</strong> {repo.output}
        </p>
      )}
      <div className="repo-details">
        <ProjectLanguages logos={repo.languages} />
      </div>
    </>
  );
}
