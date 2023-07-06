import { RiFacebookCircleLine , RiDiscordLine } from "react-icons/ri";
import { useRef, useEffect } from "react";
import {motion, useInView, useAnimation} from "framer-motion"
const JoinUs = () => {
    const refer = useRef(null)
    const isintheView = useInView(refer, { once:true})
    const eventsCntroller = useAnimation()
    useEffect(()=>{
        if(isintheView){
            eventsCntroller.start("visible")
        }
    }, [isintheView])
    return ( 
        <div className="join-us">
            <motion.h1 ref={refer}
            variants={{
                hidden:{opacity: 0 , x: -100},
                visible:{opacity: 1, x: 0},
            }}
            initial="hidden"
            animate={eventsCntroller}
            transition={{duration: .8, delay: 0}}
            className="title">for more <span>questions </span></motion.h1>
            <motion.div 
            variants={{
                hidden:{opacity: 0 , y: 200},
                visible:{opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={eventsCntroller}
            transition={{duration: 1.8, delay: 0}}
            className="join-us-cont">
                <p className="join">Join Our community </p>
                <div className="face-dis">
                    <div className="face">
                        <a href=""><RiFacebookCircleLine className="facebook-icon" /></a>
                    </div>
                    <div className="line"></div>
                    <div className="dis">
                        <a href=""><RiDiscordLine className="discord-icon" /></a>
                    </div>
                </div>
                <p className="join">or download this PDF file</p>
                <button className="download">Download</button>
            </motion.div>
            
        </div>
     );
}
 
export default JoinUs;