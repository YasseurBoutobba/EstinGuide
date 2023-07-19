

const Specialities = () => {
    return ( 
        <div data-aos="zoom-in" data-aos-duration="1000"
        className="specialities info-sec" id='specialities'>
            <div>
                <p>Within the "cycle supérieur" of your academic program, you will have the opportunity to choose the specializations you want to focus on for the remainder of your studies. This decision will be made during the second semester of your second year. The school offers two specialization options: Artificial Intelligence (AI) and Data Science (DS), as well as Cybersecurity.</p>
                <div className="spec-two">
                    <div className="spec ai-ds">
                        <h2>Ai and Data Science</h2>
                        <p>AI (Artificial Intelligence) is a field where machines learn to perform tasks that usually require human intelligence. It involves creating smart algorithms that can understand, reason, and learn from data and Data Science (DS) is the practice of extracting insights and knowledge from data using techniques like statistics, machine learning, and data visualization.</p>
                    </div>
                    <div className="spec cyber-s">
                        <h2>Cyber Securty Science</h2>
                        <p>Cybersecurity focuses on protecting computer systems and networks from unauthorized access, data breaches, and other threats. As a Cybersecurity engineer, you'll develop strategies to safeguard sensitive information, detect and respond to attacks, and ensure the confidentiality, integrity, and availability of digital assets.</p>
                    </div>
                </div>
                <q>Unleash the potential of AI and Data Science while fortifying the digital frontier with Cybersecurity expertise.</q> 
            </div>
        </div>
     );
}
 
export default Specialities;