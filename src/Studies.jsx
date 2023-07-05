import { useRef, useEffect } from "react";
import {motion, useInView, useAnimation} from "framer-motion"
const Studies = () => {
    const refer = useRef(null)
    const isintheView = useInView(refer, { once:true})
    const studiesCntroler = useAnimation()
    useEffect(()=>{
        if(isintheView){
            studiesCntroler.start("visible")
        }
    }, [isintheView])
    return ( 
        <motion.div ref={refer}
        variants={{
            hidden:{opacity: 0 , scale: 0.3},
            visible:{opacity: 1, scale: 1},
        }}
        initial="hidden"
        animate={studiesCntroler}
        transition={{duration: .8, delay: 0}}
        className="studies info-sec">
            <p className="big-p">During your journey at estin you will study 5 years divided into :</p>
            <h3>Classe Prepa :</h3>
            <p>You will study for two years , you will learn the basic  of computer enge bla bla bla bla </p>
            <h3>Classe Prepa :</h3>
            <p>You will study for two years , you will learn the basic  of computer enge bla bla bla bla </p>
            <p className="big-p">At your first year here you will be studying in total 16 module <br /> ( 8 modules for each semestre ) which are :</p>
            <div className="first-y-modules">
                <div className="semestre">
                    <h3>Semestre 1:</h3>
                    <p>you will learn : <br /> algo ( in c) , Analyse , algebra ....</p>
                </div>
                <div className="semestre">
                    <h3>Semestre 1:</h3>
                    <p>you will learn : <br /> algo ( in c) , Analyse , algebra ....</p>
                </div>
            </div>
            <h2>For more informations about the subject <br /> you can visit 
             <a className="estin-bub" href="" target="_blank"> estin bub</a>  or <a className="estin-rep" href="" target="_blank">estin rep</a></h2>
        </motion.div>
     );
}
 
export default Studies;