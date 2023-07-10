import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import campus_1 from "./assets/campus_1.png"
import campus_2 from "./assets/campus_2.png"
import campus_3 from "./assets/campus_3.png"

const LifeinCampus = () => {
    const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const isInViewArray = [useInView(refs[0], { once: true }), useInView(refs[1], { once: true }), useInView(refs[2], { once: true }), useInView(refs[3], { once: true })];
    const animationControllers = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
    useEffect(() => {
        isInViewArray.forEach((isInView, index) => {
            if (isInView) {
            animationControllers[index].start("visible");
            }
        });
    }, isInViewArray);
    const lefttoRightVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    }
    const righttoLeftVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    }
    return ( 
        <div className="life-in-campus" id='life-in-campus'>
            <motion.h1 ref={refs[0]}
            variants={lefttoRightVariants}
            initial="hidden"
            animate={animationControllers[0]}
            transition={{ duration: 1, delay: 0 }}
            className="title">life in <span>campus</span></motion.h1>

            <motion.div ref={refs[1]}
            variants={lefttoRightVariants}
            initial="hidden"
            animate={animationControllers[1]}
            transition={{ duration: 1.6, delay: 0 }}
            className="campus-sec">
                <div className="text">
                    <h2>Campus</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio consequuntur saepe illo possimus reiciendis, accusamus perferendis. Voluptates dicta earum aliquam saepe hic ducimus culpa consequatur dignissimos maiores! Sit, reiciendis non? Autem non nisi voluptatibus!</p>
                </div>
                <img src={campus_1} alt="campus image" />
            </motion.div>
            <motion.div ref={refs[2]}
            variants={righttoLeftVariants}
            initial="hidden"
            animate={animationControllers[2]}
            transition={{ duration: 1.6, delay: 0 }}
            className="campus-sec">
                <img src={campus_2} alt="campus image" />
                <div className="text">
                    <h2>Campus</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio consequuntur saepe illo possimus reiciendis, accusamus perferendis. Voluptates dicta earum aliquam saepe hic ducimus culpa consequatur dignissimos maiores! Sit, reiciendis non? Autem non nisi voluptatibus!</p>
                </div>
            </motion.div>
            <motion.div ref={refs[3]}
            variants={lefttoRightVariants}
            initial="hidden"
            animate={animationControllers[3]}
            transition={{ duration: 1.6, delay: 0 }}
            className="campus-sec">
                <div className="text">
                    <h2>Campus</h2>
                    <p>Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, earum!ipsum dolor sit amet consectetur adipisicing elit. Animi optio consequuntur saepe illo possimus reiciendis, accusamus perferendis. Voluptates dicta earum aliquam saepe hic ducimus culpa consequatur dignissimos maiores! Sit, reiciendis non? Autem non nisi voluptatibus!</p>
                </div>
                <img src={campus_3} alt="campus image" />
            </motion.div>
        </div>
        
        
     );
}
 
export default LifeinCampus;