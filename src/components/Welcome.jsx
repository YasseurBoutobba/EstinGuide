import { FaAnglesDown } from "react-icons/fa6";
import { SlSocialFacebook, SlSocialInstagram, SlSocialYoutube, SlSocialLinkedin } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Welcome = () => {
    return ( 
        <div
        data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800"
        className="welcome-cont">
            <div className="welcome">
                <h1>Marhba Bikom</h1>
                <h2>Future <span>students</span></h2>
                <p>Welcome to our website! This platform is designed specifically for individuals like you, aiming to provide valuable insights and information about our esteemed school.</p>
                <a href='#whatsestin'>Let's discover it together</a>
                <FaAnglesDown className='arrow-down'/>
                <div
                data-aos="fade-down" data-aos-duration="900" data-aos-delay="1600"
                className="social-media">
                    <Link target='_blank' to='https://www.instagram.com/estin__bejaia/?igshid=MzRlODBiNWFlZA%3D%3D&fbclid=IwAR2ujBVSaHOCXXW0Fl2vu9xwIwPSjyf_MTp8xnmNYZqTmMT637M_osvxqvY'><SlSocialInstagram className='social-icon'/></Link>
                    <Link target='_blank' to='https://www.facebook.com/groups/694051234569729'><SlSocialFacebook className='social-icon'/></Link>
                    <Link target='_blank' to='https://www.youtube.com/@estinbejaia'><SlSocialYoutube className='social-icon'/></Link>
                    <Link target='_blank' to='https://www.linkedin.com/school/estin-bejaia/?fbclid=IwAR3sycqlv5Krnmh9Rhk7ugovpnMFLkRIBrxCLFcj1TL7RgMKyqqUQIN5XIU'><SlSocialLinkedin className='social-icon'/></Link>
                </div>
            </div>
        </div>
     );
}
 
export default Welcome;