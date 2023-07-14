import club_1 from "./assets/club_1.png"
import club_2 from "./assets/club_2.png"
import club_3 from "./assets/club_3.png"
import club_4 from "./assets/club_4.png"
import club_5 from "./assets/club_5.png"
import club_6 from "./assets/club_6.png"
import club_7 from "./assets/club_7.png"
import bytecraft from "./assets/bytecraft.svg"
import gdsc from "./assets/gdsc.webp"
import soai from "./assets/soai.jpg"
import suiris from"./assets/suiris.jpg"
import 'aos/dist/aos.css';
import { BrowserView, MobileView } from 'react-device-detect';




const OurClubs = () => {
    // the slider part 

    return ( 
        <div className="our-clubs" id="our-clubs">
            <div data-aos="fade-right" data-aos-duration="1000">
                <h1 className="title">Our <span>clubs</span></h1>
                <p className="desc">Here, you will discover our clubs where <span>creativity</span>  and <span>knowledge</span>  converge, enhancing the enchantment of Estin, making it a truly <span>delightful experience.</span> </p>
            </div>
            <BrowserView>
            <div 
            className="imgs-grid" >
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200"
                className="col col-1">
                    <img src={club_4} alt="club img" />
                    <img src={club_1} alt="club img" />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000"
                className="col col-2">
                    <img src={club_3} alt="club img" />
                    <img src={club_5} alt="club img" />
                    <img src={club_7} alt="club img" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200"
                className="col col-3">
                    <img src={club_2} alt="club img" />
                    <img src={club_6} alt="club img" />
                </div>
            </div>
            </BrowserView>
            <MobileView>
                <div className="slider">
                    <div className="slide-track" >
                        <div className="slide"><img src={club_4} alt="club img" /></div>
                        <div className="slide"><img src={club_1} alt="club img" /></div>
                        <div className="slide"><img src={club_3} alt="club img" /></div>
                        <div className="slide"><img src={club_5} alt="club img" /></div>
                        <div className="slide"><img src={club_7} alt="club img" /></div>
                        <div className="slide"><img src={club_2} alt="club img" /></div>
                      <div className="slide"><img src={club_6} alt="club img" /></div>
                    </div>
                </div>
            
            </MobileView>
            <div 
            className="clubs" >
                <div data-aos="fade-up" data-aos-duration="900" 
                className="club" onClick={()=> window.open("https://www.instagram.com/bytecraft.estin/?hl=fr", "_blank")}>
                    <div className="text">
                        <h3>Bytecraft</h3>
                        <p>Beytcraft is a tech club where you can learn web development, game development, and design.</p>
                        <div className="nums">
                            <p>+300 memebers</p>
                            <p>+5 events</p>
                        </div>
                    </div>
                    <div className="logo">
                        <img src={bytecraft} alt="" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="900" 
                className="club" onClick={()=> window.open("https://www.instagram.com/gdsc_estin/?hl=fr", "_blank")}>
                    <div className="text">
                        <h3>GDSC</h3>
                        <p>Google Developer Student Club where u will use  Google tech stacks on your development journey.</p>
                        <div className="nums">
                            <p>+200 memebers</p>
                            <p>+2 events</p>
                        </div>
                    </div>
                    <div className="logo">
                        <img src={gdsc} alt="" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="900" 
                className="club" onClick={()=> window.open("https://www.instagram.com/soai_bejaia/?hl=fr", "_blank")}>
                    <div className="text">
                        <h3>SOAI-BEJAIA</h3>
                        <p>School of AI where u can dive deep into AI, DS, and Machine Learning concepts.</p>
                        <div className="nums">
                            <p>+160 memebers</p>
                            <p>+2 events</p>
                        </div>
                    </div>
                    <div className="logo">
                        <img src={soai} alt="" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="900" 
                className="club" onClick={()=> window.open("https://www.instagram.com/sirius.estin/?hl=fr", "_blank")}>
                    <div className="text">
                        <h3>Siruis</h3>
                        <p>A hardware club focused on robotics and computer hardware, u will dive into the world of hardware technology.</p>
                        <div className="nums">
                            <p>+60 memebers</p>
                            <p>+1 events</p>
                        </div>
                    </div>
                    <div className="logo">
                        <img src={suiris} alt="" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default OurClubs;