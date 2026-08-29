import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import { FaGithub, FaLinkedinIn, FaGoogle, FaFacebookF } from "react-icons/fa";

const socialLinks = [
  {
    key: "github",
    href: socialMediaLinks.github,
    label: "GitHub",
    className: "github",
    Icon: FaGithub,
  },
  {
    key: "linkedin",
    href: socialMediaLinks.linkedin,
    label: "LinkedIn",
    className: "linkedin",
    Icon: FaLinkedinIn,
  },
  {
    key: "gmail",
    href: socialMediaLinks.gmail ? `mailto:${socialMediaLinks.gmail}` : null,
    label: "Email",
    className: "google",
    Icon: FaGoogle,
  },
  {
    key: "facebook",
    href: socialMediaLinks.facebook,
    label: "Facebook",
    className: "facebook",
    Icon: FaFacebookF,
  },
];

function isValidLink(href) {
  return href && href !== "#" && href.trim() !== "";
}

export default function SocialMedia() {
  return (
    <div className="social-media-div">
      {socialLinks
        .filter((link) => isValidLink(link.href))
        .map(({ key, href, label, className, Icon }) => (
          <a
            key={key}
            href={href}
            className={`icon-button ${className}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon aria-hidden="true" />
          </a>
        ))}
    </div>
  );
}
