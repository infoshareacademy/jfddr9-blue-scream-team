import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { AboutButton } from "./AboutButton";

const Footer = () => {
  const socialMediaLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      icon: faFacebook,
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com",
      icon: faTwitter,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      icon: faInstagram,
    },
  ];

  return (
    <footer>
      <div className="footerimg">
        <AboutButton />
        <ul>
          {socialMediaLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={link.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div
    </footer>
  );
};

export default Footer;
