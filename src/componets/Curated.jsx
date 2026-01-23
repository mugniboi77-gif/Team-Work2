import img from "../assets/crimg.png"
import "./Curated.css";

const Curated = () => {
  return (
    <>
      <div className="Curated">
        <div className="curated1">
          <h1>Curated and <br /> Convenient</h1>
          <p>
            We've built our offerings on the principle that everyone deserves <br />
            high-quality design without the high cost. We offer elevated rental <br /> 
            inventory, to transform your space. Reuse and recycle - we make the <br />
            decision as light as a “feather”
          </p>
          <button>Get Started</button>
        </div>

        <div className="curated2">
            <img src={img} className="cr_img"/>
        </div>
      </div>
    </>
  );
};

export default Curated;
