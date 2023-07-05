import estinPic from "./assets/estin-pic.png"
import { useRef , useEffect } from "react";
import {motion, useInView, useAnimation} from "framer-motion"
const WhatIsEstin = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once:true})
    const mainControls1 = useAnimation()
    const mainControls2 = useAnimation()
    useEffect(()=>{
        if(isInView){
            mainControls1.start("visble")
            mainControls2.start("visble")
        }
    }, [isInView])
    return ( 
        <div ref={ref} className="what-is-estin" id="whatsestin">
            <motion.div 
            variants={{
                hidden:{opacity:0, x:-100},
                visble:{opacity:1.4, x:0},
            }}
            initial="hidden"
            animate={mainControls1}
            transition={{duration:1, delay:0}}
            className="text">
                <h1 className="title">What is <span>Estin ?</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, corporis. Vel, voluptatum aliquid nobis nemo explicabo eligendi. Enim accusantium numquam necessitatibus perspiciatis blanditiis cupiditate! Reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, reprehenderit natus sequi soluta, iure explicabo earum dolorem molestias quasi illum aliquid accusamus architecto accusantium tempore aperiam optio quisquam doloribus ipsum at neque. Suscipit quibusdam unde soluta tempora odio ex, rerum omnis ipsam odit, sequi labore, repudiandae incidunt doloremque blanditiis impedit atque assumenda fuga corrupti dignissimos? Esse dolorem, nobis tenetur ad iste ullam! Deserunt nisi laboriosam, quod laudantium asperiores praesentium? Numquam minus maiores at. Esse autem illo voluptate deserunt vero.</p>
            </motion.div>
            <motion.div 
            variants={{
                hidden:{opacity: 0 , scale: 0},
                visble:{opacity: 1, scale: 1},
            }}
            initial="hidden"
            animate={mainControls2}
            transition={{duration:1.4}}
            className="images">
                <img src={estinPic} alt="" />
            </motion.div>

        </div>
     );
}
 
export default WhatIsEstin;