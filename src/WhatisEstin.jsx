import estinPic from "./assets/estin-pic.png"
import { useRef , useEffect } from "react";
import {motion, useInView, useAnimation} from "framer-motion"
const WhatIsEstin = () => {
    const reftxt = useRef(null)
    const refimg = useRef(null)
    const isTextInView = useInView(reftxt, { once:true})
    const isImgInView = useInView(refimg, { once:true })
    const textControls = useAnimation()
    const imgControls = useAnimation()
    useEffect(()=>{
        if(isTextInView){
            textControls.start("visble")
        }
        if(isImgInView){
            imgControls.start("visble")
        }
    }, [isTextInView, isImgInView])
    return ( 
        <div className="what-is-estin" id="whatsestin">
            <motion.div ref={reftxt}
            variants={{
                hidden:{opacity:0, x:-100},
                visble:{opacity:1.4, x:0},
            }}
            initial="hidden"
            animate={textControls}
            transition={{duration:1, delay:0}}
            className="text">
                <h1 className="title">What is <span>Estin ?</span></h1>
                <p>ESTIN stands for "École supérieure en sciences et technologies de l'informatique et du numérique", it's another grand school of Computer Science, It introduces three new specialities which are AI, IoT & Cyber Security along with Information System. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, nesciunt?</p>
            </motion.div>
            <motion.div 
            variants={{
                hidden:{opacity: 0 , scale: 0},
                visble:{opacity: 1, scale: 1},
            }}
            initial="hidden"
            animate={imgControls}
            transition={{duration:1.4}}
            className="images">
                <img  ref={refimg} src={estinPic} alt="estin pics" />
            </motion.div>

        </div>
     );
}
 
export default WhatIsEstin;