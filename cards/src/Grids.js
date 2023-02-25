
import './Grids.scss'
import { useState } from 'react';

function CardComp() {
    const [cards] = useState([
        {
        title : 'Treating hearing loss starts here' ,
        text : 'When you visit in person for a risk-free evaluation, you’ll receive an in-ear examination as well as a comprehensive hearing test, including Otoscopy, Tympanometry, Tone Test, Bone Conduction and Speech Discrimination. Can’t make it to the office? Meet with us curbside or virtually!'
        },
        {
            title : 'Comprehensive & holistic care' ,
            text : 'Unlike other clinics that are limited to offering hearing aids from one brand, we offer solutions and technology from a wide range of top-tier brands, enabling our providers to find the perfect device and fit for each patient.'
        },
        {
            title : 'Tinnitus testing & treatment  ' ,
            text : 'While there is no cure for tinnitus, it can improve greatly with treatment. A full examination including diagnostic testing often pinpoints the underlying cause of the tinnitus, and various treatments are available to help with the symptoms.'
        },
        {
            title : 'Hearing aids & treatment' ,
            text : 'Our clinicians are extremely knowledgeable on the latest technology and will work with you to find the best solution to fit your lifestyle. We offer a wide range of hearing aid brands, with styles, and technology to fit your needs and budget.'
        },
        {
            title : 'Insurance counseling  ' ,
            text : 'Navigating your insurance benefits is no easy task. That’s why we have insurance specialists on-staff who are happy to verify your benefits and take the time to explain them. Relax in the knowledge that we work with most major insurance brands — and let us handle the hard stuff.'
        },
        {
            title : 'Hearing protection ' ,
            text : 'We specialize in hearing protection for recreation and high-noise jobs, with different levels of attenuation and protection available. From custom in-ear monitors to filtered ear plugs, we have multiple options for protection'
        }

    ])
    return (
       <div>
        <section>
            <div className="container">
                {/* <div className='title'></div> */}
                <h1>What we offer</h1> 
                {/* <div className="space" ></div> */}
                <br></br>
                <div className="cards">
                    { cards.map((card,i) => (
                        <div key = {i} className="card">
                        <h3> {card.title} </h3>
                        <p>{card.text}</p>
                    </div>  
                    ))}
                </div>
            </div>
        </section>
       </div>
      );

}

export default CardComp;