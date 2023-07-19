import bytecraft from "../assets/svg/bytecraft.svg"
import gdsc from "../assets/logo/gdsc.webp"
import soai from "../assets/logo/soai.jpg"
import suiris from"../assets/logo/suiris.jpg"

export default function Clubs() {
  return (   
    <div className="clubs" >
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
       
  )
}
