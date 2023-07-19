import event_1 from "../assets/pic/event_1.png"
import event_2 from "../assets/pic/event_2.png"
import event_3 from "../assets/pic/event_3.png"
import event_4 from "../assets/pic/event_4.png"
import event_5 from "../assets/pic/event_5.png"
import event_6 from "../assets/pic/event_6.png"
import event_7 from "../assets/pic/event_7.png"
import event_8 from "../assets/pic/event_8.png"
import 'aos/dist/aos.css';


const OurEvents = () => {
    
      
    return ( 
        <div className="our-events" id="our-events">
            <div data-aos="fade-right" data-aos-duration="1000" >
                <h1 className="title">Our <span>events</span> & <span>workShops</span></h1>
            </div>
            <div className="events" >
                <div className="event" data-aos="fade-up" data-aos-duration="1000">
                    <img src={event_1} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>"Code Rally" is a hackathon event organized by Beytcraft.</p>
                    </div>
                </div>
                <div className="event" data-aos="fade-up" data-aos-duration="1000">
                    <img src={event_2} alt="event img" />
                    <div className="text">
                        <h3>GDSC Hack Day</h3>
                        <p>"GDSC Hack Day" is a Capture The Flag (CTF) event organized by GDSC.</p>
                    </div>
                </div>
                <div className="event" data-aos="fade-up" data-aos-duration="1000">
                    <img src={event_3} alt="event img" />
                    <div className="text">
                        <h3>IdeaTech 2</h3>
                        <p>"IdeaTech 2" is an ideathon event organized by Beytcraft.</p>
                    </div>
                </div>
                <div className="event" data-aos="fade-up" data-aos-duration="1000">
                    <img src={event_4} alt="event img" />
                    <div className="text">
                        <h3>Chesstin</h3>
                        <p>"Chesstin" is a chess game competition organized by Beytcraft.</p>
                    </div>
                </div>
                <div className="event" data-aos="fade-up" data-aos-duration="1000">
                    <img src={event_5} alt="event img" />
                    <div className="text">
                        <h3>Design Camp</h3>
                        <p>"Design Camp" is a three-day bootcamp for beginners in design organized by Beytcraft.</p>
                    </div>
                </div>
                <div className="event" data-aos="fade-up" data-aos-duration="1000">
                    <img src={event_6} alt="event img" />
                    <div className="text">
                        <h3>BrainOn</h3>
                        <p>"BrainOn" is an ideathon event organized by SOAI (School of AI).</p>
                    </div>
                </div>
                <div className="event" data-aos="fade-up" data-aos-duration="1000">
                    <img src={event_7} alt="event img" />
                    <div className="text">
                        <h3>Learn It</h3>
                        <p>"Learn It" is a series of accelerated workshops covering a variety of tech topics organized by SOAI (School of AI).</p>
                    </div>
                </div>
                <div className="event" data-aos="fade-up" data-aos-duration="1000">
                    <img src={event_8} alt="event img" />
                    <div className="text">
                        <h3>GDSC School</h3>
                        <p>"GDSC School" offers workshops by GDSC in web dev, mobile dev, motion design, and more.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default OurEvents;