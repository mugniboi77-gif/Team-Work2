import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"


import "./Footer.css"

function Footer(){
    return(
        <>
        <footer>
            <div className="f2">
                <p>Furniture</p>
                <p>Packages</p>
                <p>Living Room</p>
                <p>Bedroom</p>
                <p>Dining</p>
                <p>Home Office</p>
                <p>Decor</p>
                <p>Lighting</p>
                <p>Outdoor</p>
                <p>All Furniture</p>
                <p>Sample Sale</p>
            </div>

            <div className="f3">
                <p>About</p>
                <p>How it Works</p>
                <p>About Feather</p>
                <p>Feather Furniture</p>
                <p>Reviews</p>
                <p>Feather for WeWork</p>
                <p>Feather for Business</p>
                <p>Feather for Staging</p>
                <p>Affiliate Program</p>
                <p>Careers</p>
                <p>In Your Area</p>

            </div>
            <div className="f4">
                <p>Help</p>
                <p>FAQs</p>
                <p>Contact us</p>
                <p>Privacy Policy</p>
                <p>Terms</p>
                <p>FloorFound Terms</p>
            </div>
            
            <div className="f5">
                <p>Feather on Social Media</p>
                <div className="f_img">
                    <img src={img1}/>
                    <img src={img2}/>
                    <img src={img3}/>
                    <img src={img4}/>
                    <img src={img5}/>
                    <img src={img6}/>
                </div>
                <p>Join our newsletter</p>
            </div>
        </footer>
        </>
    )
}
export default Footer