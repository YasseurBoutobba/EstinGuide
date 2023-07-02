import estinPic1 from "./assets/estin-pic-1.png"
import estinPic2 from "./assets/estin-pic-2.png"
import estinPic3 from "./assets/estin-pic-3.png"
import estinPic4 from "./assets/estin-pic-4.png"
import estinPic from "./assets/estin-pic.png"
const WhatIsEstin = () => {
    return ( 
        <div className="what-is-estin" id="whatsestin">
            <div className="text">
                <h1 className="title">What is <span>Estin ?</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, corporis. Vel, voluptatum aliquid nobis nemo explicabo eligendi. Enim accusantium numquam necessitatibus perspiciatis blanditiis cupiditate! Reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, reprehenderit natus sequi soluta, iure explicabo earum dolorem molestias quasi illum aliquid accusamus architecto accusantium tempore aperiam optio quisquam doloribus ipsum at neque. Suscipit quibusdam unde soluta tempora odio ex, rerum omnis ipsam odit, sequi labore, repudiandae incidunt doloremque blanditiis impedit atque assumenda fuga corrupti dignissimos? Esse dolorem, nobis tenetur ad iste ullam! Deserunt nisi laboriosam, quod laudantium asperiores praesentium? Numquam minus maiores at. Esse autem illo voluptate deserunt vero.</p>
            </div>
            <div className="images">
                {/* <img src={estinPic1} alt="estin pic" />
                <img src={estinPic2} alt="estin pic" />
                <img src={estinPic3} alt="estin pic" />
                <img src={estinPic4} alt="estin pic" /> */}
                <img src={estinPic} alt="" />
            </div>

        </div>
     );
}
 
export default WhatIsEstin;