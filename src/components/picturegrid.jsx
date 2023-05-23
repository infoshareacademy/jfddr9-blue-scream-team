import telko from "../images/telko.jpg";
export const PictureGrid = () => {
  return (
    <div className="row-img">
      <div className="column-img">
        <img src={telko} style={{ width: "100%" }} />
        <img src={telko} style={{ width: "100%" }} />
        <img src={telko} style={{ width: "100%" }} />
        <img src={telko} style={{ width: "100%" }} />
      </div>
      <div className="column-img">
        <img src={telko} style={{ width: "100%" }} />
        <img src={telko} style={{ width: "100%" }} />
        <img src={telko} style={{ width: "100%" }} />
        <img src={telko} style={{ width: "100%" }} />
      </div>
      <div className="column-img">
        <img src={telko} style={{ width: "100%" }} />
        <img src={telko} style={{ width: "100%" }} />
        <img src={telko} style={{ width: "100%" }} />
        <img src={telko} style={{ width: "100%" }} />
      </div>
    </div>
  );
};
