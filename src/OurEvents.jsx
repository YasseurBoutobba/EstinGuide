import event_1 from "./assets/event_1.png"
import event_2 from "./assets/event_2.png"
import event_3 from "./assets/event_3.png"
import event_4 from "./assets/event_4.png"
import event_5 from "./assets/event_5.png"
import event_6 from "./assets/event_6.png"
import event_7 from "./assets/event_7.png"
import event_8 from "./assets/event_8.png"
import 'aos/dist/aos.css';
const OurEvents = () => {
    return ( 
        <div className="our-events" id="our-events">
            <div data-aos="fade-right" data-aos-duration="1000" >
                <h1 className="title">Our <span>events</span> & <span>workShops</span></h1>
            </div>
            <div className="events" >
                <div className="event" data-aos="fade-up" data-aos-duration="900">
                    <img src={event_1} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates?</p>
                    </div>
                </div>
                <div className="event" data-aos="fade-up" data-aos-duration="900">
                    <img src={event_2} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates?</p>
                    </div>
                </div>
                <div className="event" data-aos="fade-up" data-aos-duration="900">
                    <img src={event_3} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates?</p>
                    </div>
                </div>
                <div className="event" data-aos="fade-up" data-aos-duration="900">
                    <img src={event_4} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates?</p>
                    </div>
                </div>
                <div className="event" data-aos="fade-up" data-aos-duration="900">
                    <img src={event_5} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates?</p>
                    </div>
                </div>
                <div className="event" data-aos="fade-up" data-aos-duration="900">
                    <img src={event_6} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates?</p>
                    </div>
                </div>
                <div className="event" data-aos="fade-up" data-aos-duration="900">
                    <img src={event_7} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates?</p>
                    </div>
                </div>
                <div className="event" data-aos="fade-up" data-aos-duration="900">
                    <img src={event_8} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates?</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default OurEvents;