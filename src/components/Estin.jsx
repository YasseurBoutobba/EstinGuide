import estinPic from "../assets/pic/estin-pic.png"



const Estin = () => {
      
    return ( 
        <div className="what-is-estin" id="whatsestin">
            <div 
            data-aos="fade-right" data-aos-duration="1000"
            className="text">
                <h1 className="title">What is <span>Estin ?</span></h1>
                <p>ESTIN, which stands for "École supérieure en sciences et technologies de l'informatique et du numérique", is a new addition to the Higher Schools of Computer Science in Algeria, specifically ESI Alger and ESI-SBA. 
                    <br/>
                    <br/>
                    ESTIN offers a comprehensive five-year program in Computer Engineering with an  'ingénieur d'État' degree .
                    <br/>
                    <br/>
                     The curriculum is designed to provide students with a strong foundation in computer science and technology, preparing them for a successful career in the field.In addition to the core computer engineering courses.
                    <br/> <br /> ESTIN introduces two new specializations to its students:
                    <span>AI and data science</span> & <span>Cyber Security</span>.


                </p>
            </div>
            <div 
            data-aos="fade-left" data-aos-duration="1000"
            className="images">
                <img  src={estinPic} alt="estin pics" />
            </div>

        </div>
     );
}
 
export default Estin;