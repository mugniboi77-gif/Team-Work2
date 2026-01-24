import './Apartment.css'
import font1 from "../assets/font1.png"
import font2 from "../assets/font2.png"
import font3 from "../assets/font3.png"
import font4 from "../assets/font4.png"
import font5 from "../assets/font5.png"
import girl8 from "../assets/girl8.png"

export const Apartment = () => {
  return (
    <>
    <section className='apartment'>
        <h1>Ease the pain of <br /> moving from <br /> apartment to <br /> apartment.</h1><br /><br /><br />
        <div className='fontfams'>
            <img src={font1} alt="" />
            <img src={font2} alt="" />
            <img src={font3} alt="" />
            <img src={font4} alt="" />
            <img src={font5} alt="" />
        </div>
        
    </section>
    <div className="girl8">
        <img src={girl8} alt="" />
        <p>Feather is the stress-free <br /> way to furnish your home</p>
        <button>Shop Furniture</button>
        </div>
        </>
  )
}
