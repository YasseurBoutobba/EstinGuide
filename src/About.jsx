import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {motion, useInView, useAnimation} from "framer-motion"
const About = () => {
    const [activeElement, setActiveElement] = useState("link_1");

    const handleClick = (elementId) => {
        setActiveElement(elementId);
    };
    const refer = useRef(null)
    const isintheView = useInView(refer, { once:true})
    const linksControler = useAnimation()
    useEffect(()=>{
        if(isintheView){
            linksControler.start("visble")
        }
    }, [isintheView])
    return ( 
        <motion.div ref={refer}
        variants={{
            hidden:{opacity:0, x:-200},
            visble:{opacity:1, x:0},
        }}
        initial="hidden"
        animate={linksControler}
        transition={{duration:1.6, delay:0}}
        className="about">
            <Link onClick={() => handleClick("link_1")} id="link_1" className={activeElement === 'link_1' ? 'active' : ''} to="/studies" >Studies</Link>
            <Link onClick={() => handleClick("link_2")} id="link_2" className={activeElement === 'link_2' ? 'active' : ''} to="/specialities">Specialities</Link>
            <Link onClick={() => handleClick("link_3")} id="link_3" className={activeElement === 'link_3' ? 'active' : ''} to="/admissions">Admissions</Link>
        </motion.div>
     );
}
 
export default About;