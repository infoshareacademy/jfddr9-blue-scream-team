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
        <img src={fotka1} style={{ width: "100%" }} />
        <img src={fotka2} style={{ width: "100%" }} />
      </div>
      <div className="column-img">
        <img src={fotka4} style={{ width: "100%" }} />
        <img src={fotka5} style={{ width: "100%" }} />
        <img src={fotka8} style={{ width: "100%" }} />
      </div>
      <div className="column-img">
        <img src={fotka7} style={{ width: "100%" }} />
        <img src={fotka6} style={{ width: "100%" }} />
        <img src={fotka9} style={{ width: "100%" }} />
      </div>
    </div>
  );
};
