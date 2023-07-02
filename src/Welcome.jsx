// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { FaAnglesDown } from "react-icons/fa6";
import { SlSocialFacebook, SlSocialInstagram, SlSocialYoutube, SlSocialLinkedin } from "react-icons/sl";
const Welcome = () => {
    return ( 
        <motion.div
        variants={{
            hidden:{opacity: 0 , scale: 0.5},
            visible:{opacity: 1, scale: 1},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 1, delay: .8}}
        className="welcome-cont">
            <div className="welcome">
                <h1>Marhba Bikom</h1>
                <h2>Future <span>students</span></h2>
                <p>Welcome to our website! This platform is designed specifically for individuals like you, aiming to provide valuable insights and information about our esteemed school.</p>
                <a href='#whatsestin'>Let's discover it together</a>
                <FaAnglesDown className='arrow-down'/>
                <motion.div
                variants={{
                    hidden:{opacity: 0 , y: -20},
                    visible:{opacity: 1, y: 0},
                }}
                initial="hidden"
                animate="visible"
                transition={{duration: 1, delay: 1.8}} 
                className="social-media">
                    <a target='_blank' href='https://www.instagram.com/estin__bejaia/?igshid=MzRlODBiNWFlZA%3D%3D&fbclid=IwAR2ujBVSaHOCXXW0Fl2vu9xwIwPSjyf_MTp8xnmNYZqTmMT637M_osvxqvY'><SlSocialInstagram className='social-icon'/></a>
                    <a target='_blank' href='https://www.youtube.com/watch?v=MnpuK0MK4yo'><SlSocialFacebook className='social-icon'/></a>
                    <a target='_blank' href='https://www.youtube.com/@estinbejaia'><SlSocialYoutube className='social-icon'/></a>
                    <a target='_blank' href='https://www.linkedin.com/school/estin-bejaia/?fbclid=IwAR3sycqlv5Krnmh9Rhk7ugovpnMFLkRIBrxCLFcj1TL7RgMKyqqUQIN5XIU'><SlSocialLinkedin className='social-icon'/></a>
                </motion.div>
            </div>
        </motion.div>
     );
}
 
export default Welcome;