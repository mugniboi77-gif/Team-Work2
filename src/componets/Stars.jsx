import './Stars.css'
import star1 from "../assets/star1.png"
import star2 from "../assets/star2.png"
import star3 from "../assets/star3.png"



export const Stars = () => {
  return (
    <section className='Starssec'>
        <h1>The Reviews are In</h1><br /><br />
        <div className='stars'>
          <div className='star1'>
         <div className="padd1">
             <div className="whitestar">
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star1} alt="" />
            </div><br />
            <h3>Honestly BEST EXPERIENCE moving <br /> ever.</h3><br />
            <p>Julie, San Francisco, CA</p>
          </div>
          </div>
          <div className='star2'>
           <div className="padd1">
             <div className="whitestar">
              <img src={star2} alt="" />
              <img src={star2} alt="" />
              <img src={star2} alt="" />
              <img src={star2} alt="" />
              <img src={star2} alt="" />
            </div><br />
            <h3>Extremely easy! Browsed for furniture <br /> and it was in my new apartment within <br /> a week.</h3><br />
            <p>Julie, San Francisco, CA</p>
           </div>
          </div>
          <div className='star3'>
          <div className="padd1">
              <div className="whitestar">
              <img src={star3} alt="" />
              <img src={star3} alt="" />
              <img src={star3} alt="" />
              <img src={star3} alt="" />
              <img src={star3} alt="" />
            </div><br />
            <h3>THIS JUST MAKES SENSE. <br /> Truly obsessed with Feather.</h3><br />
            <p>Julie, San Francisco, CA</p>
          </div>
          </div>
          
        </div>
    </section>
  )
}
