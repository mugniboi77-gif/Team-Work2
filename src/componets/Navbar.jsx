import "./Navbar.css";
import img from "../assets/Savat.png";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div className="nav">
          <div className="nav2">
            <ul>
              <li>
                <a href="">Furniture</a>
              </li>
              <li>
                <a href="">Why Feather</a>
              </li>
              <li>
                <a href="">Feather for Business</a>
              </li>
            </ul>
          </div>
          <div className="nav_h1">
            <h1>feather</h1>
          </div>

          <div className="nav2">
            <ul>
              <li>
                <a href="">Check if We Deliver</a>
              </li>
              <li>
                <a href="">Search</a>
              </li>
              <li>
                <a href="">Account</a>
              </li>
              <img src={img} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
