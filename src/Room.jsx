import img from "./assets/room1.png";
import img2 from "./assets/room2.png";
import img3 from "./assets/room3.png";
import img4 from "./assets/room4.png";

import "./Room.css";

const Room = () => {
  return (
    <>
      <div className="Room">
        <div className="rom_text">
          <p>Shop by Room</p>
        </div>
        <div className="rom_img">
          <div className="r_img1">
            <img src={img} />
            <p>Living Room</p>
          </div>
          <div className="r_img2">
            <img src={img2} />
            <p>Bedroom</p>
          </div>
          <div className="r_img3">
            <img src={img3} />
            <p>Home Office</p>
          </div>
          <div className="r_img4">
            <img src={img4} />
            <p>Dining Room</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;
