import { ServicesCard } from 'components';
import ReviewCard from 'components/services/reviewCard';
import { clientReviews } from 'config/reviews';
import { offeredServices } from 'config/services';
import React, { useState, useRef } from 'react';
import 'styles/services.css';
import 'styles/services-mobile.css'


export function Services() {
    const [status, setStatus] = useState("Submit");
    const serverURL: string = "https://portfolio-site-server-aeg.herokuapp.com";

    const services = offeredServices.map((m,i) => <ServicesCard key={m.title} service={m} />);
    const reviews = clientReviews.map((m,i) => <ReviewCard key={m.client} review={m} />);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch(`${serverURL}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

	const myRef = useRef(null);

    const scrollToContact = () => {
		myRef.current.scrollIntoView();
	}

    return (
        <div className="services-page">
            <div className="hero">
                <div className="page-content">
                    <div className="hero-content">
                        <div className="text-box">
                            <p>
                                In addition to working on our own projects, we are available
                                for hire and offer <span className='bold'>design</span>,
                                <span className='bold'> prototyping</span>, and <span className='bold'>development</span> services.
                                <br/><br/>
                                Below are some of the technologies we work with most commonly.
                                <br/><br/>
                                Interested in working together?  Please <u className="text-link" onClick={scrollToContact}>reach out</u>, we would
                                love to discus your project with you!
                            </p>
                        </div>
                        <img id="large-logo" alt="Grimbar Interactive" src="./images/HeroLogo.png"/>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="card-banner">
                    {services}
                    {/* <div className='card'>
                        <img alt="Unity" src="./images/services/unity.png" className="png"/>
                        <h4>Unity Development</h4>
                    </div>
                    <div className='card'>
                        <img alt="Figma" src="./images/services/figma.png" className="png"/>
                        <h4>Figma Design & Prototype</h4>
                    </div>
                    <div className='card'>
                        <img alt="React" src="./images/services/react.png" className="png"/>
                        <h4>React Development</h4>
                    </div>
                    <div className='card'>
                        <img alt="Kajabi" src="./images/services/kajabi.png" className="png"/>
                        <h4>Kajabi Development & Management</h4>
                    </div> */}
                </div>
                <div className="contactContainer light" ref={myRef}>
                    <div>
                        <h2 className="bold">Ready to get started on that project?</h2>
                        <p>We would love to discus it with you!  Fill out the form below and we will be in touch shortly.</p>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input type="text" id="name" placeholder='Name' required />
                            </div>
                            <div>
                                <input type="email" id="email" placeholder='Email' required />
                            </div>
                            <div>
                                <textarea id="message" rows={5} placeholder='Message' required />
                            </div>
                            <button className="button" type="submit">{status}</button>
                        </form>
                    </div>
                    <img alt="projectCollage" src="./images/projectCollage.png"/>
                </div>
                <div className="reviews">
                    <h2>Testimonials</h2>
                    <div className="reviewGallery">
                        {reviews}
                    </div>
                </div>
            </div>
        </div>
    );
    }