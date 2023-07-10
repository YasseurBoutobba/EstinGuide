import event_1 from "./assets/event_1.png"
import event_2 from "./assets/event_2.png"
import event_3 from "./assets/event_3.png"
import event_4 from "./assets/event_4.png"
import event_5 from "./assets/event_5.png"
import event_6 from "./assets/event_6.png"
import event_7 from "./assets/event_7.png"
import event_8 from "./assets/event_8.png"

import { useRef, useEffect } from "react";
import {motion, useInView, useAnimation} from "framer-motion"
const OurEvents = () => {
    const refer = useRef(null)
    const isintheView = useInView(refer, { once:true})
    const eventsCntroller = useAnimation()
    useEffect(()=>{
        if(isintheView){
            eventsCntroller.start("visible")
        }
    }, [isintheView])
    return ( 
        <div className="our-events" ref={refer} id="our-events">
            <motion.div
            variants={{
                hidden:{opacity: 0 , x: -100},
                visible:{opacity: 1, x: 0},
            }}
            initial="hidden"
            animate={eventsCntroller}
            transition={{duration: .8, delay: 0}}
            >
                <h1 className="title">Our <span>events</span> & <span>workShops</span></h1>
            </motion.div>
            <motion.div className="events" 
            variants={{
                hidden:{opacity: 0 , y: 200},
                visible:{opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={eventsCntroller}
            transition={{duration: 1.8, delay: 0}}
            >
                <div className="event">
                    <img src={event_1} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates?</p>
                    </div>
                </div>
                <div className="event">
                    <img src={event_2} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates?</p>
                    </div>
                </div>
                <div className="event">
                    <img src={event_3} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates?</p>
                    </div>
                </div>
                <div className="event">
                    <img src={event_4} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates?</p>
                    </div>
                </div>
                <div className="event">
                    <img src={event_5} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates?</p>
                    </div>
                </div>
                <div className="event">
                    <img src={event_6} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates?</p>
                    </div>
                </div>
                <div className="event">
                    <img src={event_7} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates?</p>
                    </div>
                </div>
                <div className="event">
                    <img src={event_8} alt="event img" />
                    <div className="text">
                        <h3>Code Rally</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates?</p>
                    </div>
                </div>
            </motion.div>
        </div>
     );
}
 
export default OurEvents;