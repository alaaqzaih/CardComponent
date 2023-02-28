
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function GridsBootstrap() {
    const [cards] = useState([
        {
            title: 'Treating hearing loss starts here',
            text: 'When you visit in person for a risk-free evaluation, you’ll receive an in-ear examination as well as a comprehensive hearing test, including Otoscopy, Tympanometry, Tone Test, Bone Conduction and Speech Discrimination. Can’t make it to the office? Meet with us curbside or virtually!'
        },
        {
            title: 'Comprehensive & holistic care',
            text: 'Unlike other clinics that are limited to offering hearing aids from one brand, we offer solutions and technology from a wide range of top-tier brands, enabling our providers to find the perfect device and fit for each patient.'
        },
        {
            title: 'Tinnitus testing & treatment  ',
            text: 'While there is no cure for tinnitus, it can improve greatly with treatment. A full examination including diagnostic testing often pinpoints the underlying cause of the tinnitus, and various treatments are available to help with the symptoms.'
        },
        {
            title: 'Hearing aids & treatment',
            text: 'Our clinicians are extremely knowledgeable on the latest technology and will work with you to find the best solution to fit your lifestyle. We offer a wide range of hearing aid brands, with styles, and technology to fit your needs and budget.'
        },
        {
            title: 'Insurance counseling  ',
            text: 'Navigating your insurance benefits is no easy task. That’s why we have insurance specialists on-staff who are happy to verify your benefits and take the time to explain them. Relax in the knowledge that we work with most major insurance brands — and let us handle the hard stuff.'
        },
        {
            title: 'Hearing protection ',
            text: 'We specialize in hearing protection for recreation and high-noise jobs, with different levels of attenuation and protection available. From custom in-ear monitors to filtered ear plugs, we have multiple options for protection'
        }
    ])
    return (
        <><h1 className='text-center text-success my-5'> What we offer</h1>
        <div className="container d-flex justify-content-center">
            <div className="row ">
                {cards.map((card, i) => (
                    <div className="col-md-6 p-2">
                        <div className="card ">
                            <div className="card-body">
                                <h5 className="card-title">  {card.title} </h5>
                                <p className="card-text"> {card.text} </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div></>
    );
}
export default GridsBootstrap;

