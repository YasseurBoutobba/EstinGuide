import club_1 from "./assets/club_1.png"
import club_2 from "./assets/club_2.png"
import club_3 from "./assets/club_3.png"
import club_4 from "./assets/club_4.png"
import club_5 from "./assets/club_5.png"
import club_6 from "./assets/club_6.png"
import club_7 from "./assets/club_7.png"
import bytecraft from "./assets/bytecraft.svg"
import { useRef, useEffect } from "react";
import {motion, useInView, useAnimation} from "framer-motion"
const OurClubs = () => {
    const refer = useRef(null)
    const refcol = useRef(null)
    const clubref = useRef(null)
    const isintheView = useInView(refer, { once:true})
    const isColinView = useInView(refcol, { once:true})
    const isClubsinView = useInView(clubref, { once:true})
    const ourClubsCntroler = useAnimation()
    const middelColControler = useAnimation()
    const sideColsController = useAnimation()
    const clubsCardController = useAnimation() 
    useEffect(()=>{
        if(isintheView){
            ourClubsCntroler.start("visible")
        }
        if(isColinView){
            middelColControler.start("visible")
            sideColsController.start("visible")
        }
        if(isClubsinView){
            clubsCardController.start("visible")
        }
    }, [isintheView, isColinView , isClubsinView])
    return ( 
        <div className="our-clubs">
            <motion.div
            ref={refer}
            variants={{
                hidden:{opacity: 0 , x: -200},
                visible:{opacity: 1, x: 0},
            }}
            initial="hidden"
            animate={ourClubsCntroler}
            transition={{duration: 1, delay: 0}}>
                <h1 className="title">Our <span>clubs</span></h1>
                <p className="desc">Here, you will discover our clubs where <span>creativity</span>  and <span>knowledge</span>  converge, enhancing the enchantment of Estin, making it a truly <span>delightful experience.</span> </p>
            </motion.div>
            <div className="imgs-grid" ref={refcol}>
                <motion.div 
                variants={{
                    hidden:{opacity: 0 , scale: 0.2},
                    visible:{opacity: 1, scale: 1},
                }}
                initial="hidden"
                animate={sideColsController}
                transition={{duration: 1, delay: 1}}
                className="col col-1">
                    <img src={club_4} alt="club img" />
                    <img src={club_1} alt="club img" />
                </motion.div>
                <motion.div 
                variants={{
                    hidden:{opacity: 0 , y: 200},
                    visible:{opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={middelColControler}
                transition={{duration: 1.6, delay: 0}}
                className="col col-2">
                    <img src={club_3} alt="club img" />
                    <img src={club_5} alt="club img" />
                    <img src={club_7} alt="club img" />
                </motion.div>
                <motion.div
                variants={{
                    hidden:{opacity: 0 , scale: 0.2},
                    visible:{opacity: 1, scale: 1},
                }}
                initial="hidden"
                animate={sideColsController}
                transition={{duration: 1, delay: 1}}
                className="col col-3">
                    <img src={club_2} alt="club img" />
                    <img src={club_6} alt="club img" />
                </motion.div>
            </div>
            <motion.div className="clubs" ref={clubref}
            variants={{
                hidden:{opacity: 0 , y: 100},
                visible:{opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={clubsCardController}
            transition={{duration: 1, delay: 0}}
            >
                <div className="club" onClick={()=> window.open("https://www.google.com", "_blank")}>
                    <div className="text">
                        <h3>Bytecraft</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga tempore reiciendis ut nobis ea omnis, dignissimos sunt magnam deserunt.</p>
                        <div className="nums">
                            <p>+300 memebers</p>
                            <p>+5 events</p>
                        </div>
                    </div>
                    <div className="logo">
                        <img src={bytecraft} alt="" />
                    </div>
                </div>
                <div className="club" onClick={()=> window.open("https://www.google.com", "_blank")}>
                    <div className="text">
                        <h3>Bytecraft</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga tempore reiciendis ut nobis ea omnis, dignissimos sunt magnam deserunt.</p>
                        <div className="nums">
                            <p>+300 memebers</p>
                            <p>+5 events</p>
                        </div>
                    </div>
                    <div className="logo">
                        <img src={bytecraft} alt="" />
                    </div>
                </div>
                <div className="club" onClick={()=> window.open("https://www.google.com", "_blank")}>
                    <div className="text">
                        <h3>Bytecraft</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga tempore reiciendis ut nobis ea omnis, dignissimos sunt magnam deserunt.</p>
                        <div className="nums">
                            <p>+300 memebers</p>
                            <p>+5 events</p>
                        </div>
                    </div>
                    <div className="logo">
                        <img src={bytecraft} alt="" />
                    </div>
                </div>
                <div className="club" onClick={()=> window.open("https://www.google.com", "_blank")}>
                    <div className="text">
                        <h3>Bytecraft</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga tempore reiciendis ut nobis ea omnis, dignissimos sunt magnam deserunt.</p>
                        <div className="nums">
                            <p>+300 memebers</p>
                            <p>+5 events</p>
                        </div>
                    </div>
                    <div className="logo">
                        <img src={bytecraft} alt="" />
                    </div>
                </div>
            </motion.div>
        </div>
     );
}
 
export default OurClubs;