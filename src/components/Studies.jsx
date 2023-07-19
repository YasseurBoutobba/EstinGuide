


const Studies = () => {
    return ( 
        <div data-aos="zoom-in" data-aos-duration="1000"
        className="studies info-sec">
            <p className="big-p">During your journey at estin you will study 5 years divided into :</p>
            <h3>Cycle Préparatoire :</h3>
            <p>During <span>two-year</span> , you will learn the basics of computer science, you will focus on learning the basic concepts of computer engineering, which includes a combination of math and electronics.</p>
            <h3>Cycle Supérieur :</h3>
            <p>During the last <span>three years</span>, you will delve deeper into the world of computer engineering, where you will have the opportunity to select your specialties. </p>
            <p className="big-p">At your first year here you will be studying in total 16 module <br /> ( 8 modules for each semestre ) which are :</p>
            <div className="first-y-modules">
                <div className="semestre">
                    <h3>Semestre 1:</h3>
                    <p>you will learn : <br /> Data Structures and Algorithms ("Static" in C), Analyse 1, Algebra 1, Computer Architecture, Electricity, French (Writing), Office Automation and Web, Introduction to Operating Systems</p>
                </div>
                <div className="semestre">
                    <h3>Semestre 1:</h3>
                    <p>you will learn : <br /> Data Structures and Algorithms (Dynamic), Analyse 2, Algebra 2, Electronique, Intro to OS 2, French (Speaking), Mécanique de Point, English</p>
                </div>
            </div>
            {/* <h2>For more informations about the subject <br /> you can visit  */}
             {/* <a className="estin-bub" href="https://bib.gdsc-estin.com/" target="_blank"> estin bub</a>  or <a className="estin-rep" href="https://rep.estin.dz/" target="_blank">estin rep</a></h2> */}
        </div>
     );
}
 
export default Studies;