import logo from '../assets/logo/logo-estin.png'
import { FaDiscord } from "react-icons/fa6";
import { SlSocialFacebook, SlSocialInstagram, SlSocialYoutube, SlSocialLinkedin } from "react-icons/sl";
import { Link } from 'react-router-dom';


const Footer = () => {
    return ( 
        <div data-aos="fade-up" data-aos-duration="1000"
        className='footer-cont'>
        <div className="footer">
            <div className="join-discord">
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, doloribus!</p>
                <a href="">
                    <p className="dis-text">Discord server</p>
                    <FaDiscord className='discord-icon'></FaDiscord>
                </a>
            </div>
            <div className="all-links">
                <div className="see-more">
                    <h3>see more</h3>
                    <div className="links">
                        <ul className="links-1">
                            <li><a href="/">home</a></li>
                            <li><a href="#our-clubs">clubs</a></li>
                            <li><a href="#our-events">events</a></li>
                            <li><a href="#life-in-campus">life in campus</a></li>
                        </ul>
                        <ul className="links-1">
                            <li><Link to="#studies">studies</Link></li>
                            <li><a href="#specialities">specialities</a></li>
                            <li><a href="#admissions">admissoins</a></li>
                            <li><a href="#more-q">more questions</a></li>
                        </ul>
                    </div>
                </div>
                <div className="social-links">
                    <h3>follow us </h3>
                    <div>
                        <Link href="https://www.instagram.com/estin__bejaia/?igshid=MzRlODBiNWFlZA%3D%3D&fbclid=IwAR00SgDXsKNchkbbhI3SWnGcJOR1AejPRHjegwB23S1WrfOiOCOipavlQn4" target='_blank'><SlSocialInstagram className='icon'></SlSocialInstagram></Link>
                    <Link href="https://www.youtube.com/@estinbejaia" target='_blank'><SlSocialYoutube className='icon'></SlSocialYoutube></Link>
                    <Link href="https://www.facebook.com/groups/694051234569729" target='_blank'><SlSocialFacebook className='icon'></SlSocialFacebook></Link>
                    <Link href="https://www.linkedin.com/school/estin-bejaia/?fbclid=IwAR0wnHe0Ty5IupeFMHr6m1t_bwjV8XG3T7Q2RuzLi42Hq5seITyoYt0Msjc" target='_blank'><SlSocialLinkedin className='icon'></SlSocialLinkedin></Link>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <div className="copy-rights">
            <p>all rights are reserved </p>
            <p>designed by hiba bellatreche ✨</p>
        </div>
        </div>
        
     );
}
 
export default Footer;