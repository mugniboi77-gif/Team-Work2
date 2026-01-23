import img from "../assets/r1.png";
import img2 from "../assets/r2.png";
import img3 from "../assets/r3.png";
import img4 from "../assets/r4.png";
import "./Keeping.css";

const Keeping = () => {
  return (
    <>
      <div className="Keeping">
        <div className="ke_text">
          <p className="k_p1">
            “Keeping Furniture in Homes and out of Landfills."
          </p>
          <p className="k_p2">
            This isn’t just another rental company - We’re elevating the future
            of furniture by <br /> replacing the commitment of ownership with a
            culture of sharing in a way that’s <br /> curated, convenient, and
            sustainable.
          </p>
        </div>
      </div>
      <div>
        <div className="b1">
          <div className="b1_text">
            <h3>
              Enjoy a fully furnished <br /> space in less than week
            </h3>
            <p>
              Feather furniture is available to be delivered and <br />{" "}
              assembled in New York City, Los Angeles and San <br /> Francisco.
            </p>
            <span>Explore Furniture</span>
          </div>
          <div>
            <img src={img} className="b1_img" />
          </div>
        </div>

        <div className="b1">
          <div>
            <img src={img2} className="b1_img" />
          </div>
          <div className="b1_text">
            <h3>Garage Sale - 40% & Up</h3>
            <p>
              Our Garage Sale is open! Savings start at 40% on <br /> favorite
              retired pieces. Find dressers, sofas, decor, and <br /> more to
              make the year one to remember.
            </p>
            <p>Terms and conditions apply. View here.</p>
            <span>Shop Now</span>
          </div>
        </div>

        <div className="b1">
          <div className="b1_text">
            <h3>
              Furniture for business, <br /> made simple.
            </h3>
            <p>
              Say goodbye to cost, complexity, and commitment of <br />{" "}
              furniture. Feather makes it easy with affordable rental <br />{" "}
              plans, white glove delivery and best-in-class account <br />{" "}
              service.
            </p>
            <span>Visit Feather For Business</span>
          </div>
          <div>
            <img src={img3} className="b1_img" />
          </div>
        </div>

        <div className="b1">
          <div>
            <img src={img4} className="b1_img" />
          </div>
          <div className="b1_text">
            <h3>
              Never assemble furniture <br /> again.
            </h3>
            <p>
              We move a lot. There are countless floor plans and  <br />roommates (oh,
              and your evolving tastes) between <br /> here and there. With Feather,
              furnish your space <br /> without breaking a sweat or reaching for a <br />
              screwdriver.
            </p>
            <span>How Feather Works</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Keeping;
