import fotka1 from "../images/fotka1.jpg";
import fotka2 from "../images/fotka2.jpg";
import fotka3 from "../images/fotka3.jpg";
import fotka4 from "../images/fotka4.jpg";
import fotka5 from "../images/fotka5.jpg";
import fotka6 from "../images/fotka6.jpg";
import fotka7 from "../images/fotka7.jpg";
import fotka8 from "../images/fotka8.jpg";
import fotka9 from "../images/fotka9.jpg";

export const PictureGrid = () => {
  return (
    <div className="row-img">
      <div className="column-img">
        <a href="https://pl.wikipedia.org/wiki/Koloseum">
          <img title="Colloseum" src={fotka1} style={{ width: "100%" }} />
        </a>
        <a href="https://pl.wikipedia.org/wiki/Wie%C5%BCa_Eiffla">
          <img title="Eiffle Tower" src={fotka2} style={{ width: "100%" }} />
        </a>
      </div>
      <div className="column-img">
        <a href="https://pl.wikipedia.org/wiki/Krzywa_Wie%C5%BCa_w_Pizie">
          <img title="Piza" src={fotka4} style={{ width: "100%" }} />
        </a>
        <a href="https://pl.wikipedia.org/wiki/Giza">
          <img title="Giza" src={fotka5} style={{ width: "100%" }} />
        </a>
        <a href="https://en.wikipedia.org/wiki/Triumphal_arch">
          <img title="Triumphal Arch" src={fotka8} style={{ width: "100%" }} />
        </a>
      </div>
      <div className="column-img">
        <a href="https://www.filmweb.pl/film/W%C5%82adca+Pier%C5%9Bcieni%3A+Dru%C5%BCyna+Pier%C5%9Bcienia-2001-1065">
          <img
            title="House of Bilbo Baggins"
            src={fotka7}
            style={{ width: "100%" }}
          />
        </a>
        <a href="https://pl.wikipedia.org/wiki/Golden_Gate_Bridge">
          <img title="Golden Gate" src={fotka6} style={{ width: "100%" }} />
        </a>
        <a href="https://infoshareacademy.com/">
          <img
            title="Infoshare Head Office"
            src={fotka9}
            style={{ width: "100%" }}
          />
        </a>
      </div>
    </div>
  );
};
