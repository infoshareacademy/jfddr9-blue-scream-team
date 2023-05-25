import React from "react";
import HomeButton from "../components/HomeButton";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1 className="about">About us</h1>
      <ul className="personsList">
        <li className="about-us">
          <p className="name"> Aleksandra </p>
          <img
            src="https://media.licdn.com/dms/image/D4D35AQGZ7Me2rqI1uw/profile-framedphoto-shrink_200_200/0/1681246290333?e=1685624400&v=beta&t=nvJ3L6TPVqBHwE9SkciyKyVyQ9CkdfEs9uu9cqzp_BA"
            width="100"
            height="100"
            className="img-link"
          ></img>
          <button
            className="firstbutton"
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

        <li className="about-us">
          <p className="name"> Katarzyna </p>
          <img
            src="https://media.licdn.com/dms/image/D5635AQGKZ_AFkPDkmA/profile-framedphoto-shrink_200_200/0/1682314414571?e=1685624400&v=beta&t=EHJ4g3qe98fg78LDFA0k3Ya6aubvk8L4OvePTG5J3gE"
            width="100"
            height="100"
            className="img-link"
          ></img>
          <button
            className="firstbutton"
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

        <li className="about-us">
          <p className="name"> Krzysztof </p>
          <img
            src="https://media.licdn.com/dms/image/C4D03AQFUcZ9zU45E_A/profile-displayphoto-shrink_200_200/0/1544175272003?e=1690416000&v=beta&t=VgLjxW2U7HwUfxBTHelmCPUKRM0Q27GbMypWNVsZsAs"
            width="100"
            height="100"
            className="img-link"
          ></img>
          <button
            className="firstbutton"
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

        <li className="about-us">
          <p className="name"> Mateusz </p>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQGYwCnzJ-dwxg/profile-displayphoto-shrink_200_200/0/1684408470765?e=1690416000&v=beta&t=Z5ya4mVsywdXK3Wyva6Dy_aXsfP0tFpVu67ZzA90szA"
            width="100"
            height="100"
            className="img-link"
          ></img>
          <button
            className="firstbutton"
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

        <li className="about-us">
          <p className="name"> Paweł </p>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQEO7UInUc6qvw/profile-displayphoto-shrink_200_200/0/1683018766351?e=1690416000&v=beta&t=SY9zItKqJ6yOIemqxWR61LJJK5xNkacMpSEQGjV601E"
            width="100"
            height="100"
            className="img-link"
          ></img>
          <button
            className="firstbutton"
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

        <li className="about-us">
          <p className="name"> Robert </p>
          <img
            src="https://media.licdn.com/dms/image/D4E35AQHGn49boT3yIQ/profile-framedphoto-shrink_200_200/0/1681941664182?e=1685624400&v=beta&t=UERkpoUhbTMRB-tH72Vimk-TaAQ-zKBRrStY43JgBOo"
            width="100"
            height="100"
            className="img-link"
          ></img>
          <button
            className="firstbutton"
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

      <button className="firstbutton" type="submit" onClick={navigateToHome}>
        Home
      </button>
    </div>
  );
}

export default About;
