import 'aos/dist/aos.css';
const Studies = () => {
    return ( 
        <div data-aos="zoom-in" data-aos-duration="1000"
        className="studies info-sec">
            <p className="big-p">During your journey at estin you will study 5 years divided into :</p>
            <h3>Cycle Préparatoire :</h3>
            <p>During <span>two-year</span> , you will embark on a comprehensive journey into the world of computer science, where you will delve deep into the fundamental principles and intricacies of this dynamic field.</p>
            <h3>Cycle supérieur :</h3>
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
             <a className="estin-bub" href="https://bib.gdsc-estin.com/" target="_blank"> estin bub</a>  or <a className="estin-rep" href="https://rep.estin.dz/" target="_blank">estin rep</a></h2>
        </div>
     );
}
 
export default Studies;