import React from "react";


function About() {
  return (
    <div>
      <h1>About us</h1>
      <ul className="personsList">
        <li>
          <p> Aleksandra </p>
          <button
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/aleksandra-jab%C5%82o%C5%84ska-justme/",
                "_blank"
              );
            }}
          >
            Linkedin
          </button>
        </li>

        <li>
          <p>Katarzyna</p>
          <button
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/katarzyna-brejna",
                "_blank"
              );
            }}
          >
            Linkedin
          </button>
        </li>

        <li>
          <p>Krzysztof</p>
          <button
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/krzysztof-szmidt-37a69a7b/",
                "_blank"
              );
            }}
          >
            Linkedin
          </button>
        </li>

        <li>
          <p>Mateusz</p>
          <button
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/mateusz-czapiewski-8a866a277/",
                "_blank"
              );
            }}
          >
            Linkedin
          </button>
        </li>

        <li>
          <p>Paweł</p>
          <button
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/kurowski-pawel/",
                "_blank"
              );
            }}
          >
            Linkedin
          </button>
        </li>

        <li>
          <p>Robert</p>
          <button
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/robert-d%C4%85browski-55b097273/",
                "_blank"
              );
            }}
          >
            Linkedin
          </button>
        </li>
      </ul>
    </div>
  );
}

export default About;
