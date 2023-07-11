import estinPic from "./assets/estin-pic.png"
import 'aos/dist/aos.css';
const WhatIsEstin = () => {
      
    return ( 
        <div className="what-is-estin" id="whatsestin">
            <div 
            data-aos="fade-right" data-aos-duration="1000"
            className="text">
                <h1 className="title">What is <span>Estin ?</span></h1>
                <p>ESTIN stands for "École supérieure en sciences et technologies de l'informatique et du numérique", it's another grand school of Computer Science, It introduces three new specialities which are AI, IoT & Cyber Security along with Information System. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, nesciunt?</p>
            </div>
            <div 
            data-aos="fade-left" data-aos-duration="1000"
            className="images">
                <img  src={estinPic} alt="estin pics" />
            </div>

        </div>
     );
}
 
export default WhatIsEstin;