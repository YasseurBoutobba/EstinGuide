import club_1 from "./assets/club_1.png"
import club_2 from "./assets/club_2.png"
import club_3 from "./assets/club_3.png"
import club_4 from "./assets/club_4.png"
import club_5 from "./assets/club_5.png"
import club_6 from "./assets/club_6.png"
import club_7 from "./assets/club_7.png"
import bytecraft from "./assets/bytecraft.svg"
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
                className="club" onClick={()=> window.open("https://www.google.com", "_blank")}>
                    <div className="text">
                        <h3>Bytecraft</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga tempore reiciendis ut nobis ea omnis, dignissimos sunt magnam deserunt.</p>
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
                className="club" onClick={()=> window.open("https://www.google.com", "_blank")}>
                    <div className="text">
                        <h3>Bytecraft</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga tempore reiciendis ut nobis ea omnis, dignissimos sunt magnam deserunt.</p>
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
                className="club" onClick={()=> window.open("https://www.google.com", "_blank")}>
                    <div className="text">
                        <h3>Bytecraft</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga tempore reiciendis ut nobis ea omnis, dignissimos sunt magnam deserunt.</p>
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
                className="club" onClick={()=> window.open("https://www.google.com", "_blank")}>
                    <div className="text">
                        <h3>Bytecraft</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga tempore reiciendis ut nobis ea omnis, dignissimos sunt magnam deserunt.</p>
                        <div className="nums">
                            <p>+300 memebers</p>
                            <p>+5 events</p>
                        </div>
                    </div>
                    <div className="logo">
                        <img src={bytecraft} alt="" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default OurClubs;