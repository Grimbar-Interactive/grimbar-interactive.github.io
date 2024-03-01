import ReviewCard from 'components/reviews/reviewCard';
import { clientReviews } from 'config/reviews';
import React, { useState } from 'react';
import 'styles/services.css';


export function Services() {
    const [status, setStatus] = useState("Submit");
    const serverURL: string = "https://portfolio-site-server-aeg.herokuapp.com";

    const reviews = clientReviews.map((m,i) => <ReviewCard key={m.client} review={m} />)

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

  return (
    <div className="services-page">
        <div className="feature-banner light" style={{backgroundImage: 'url("./images/Homepage-Cover.jpg")'}}>
            <div></div>
            <div className="feature-banner-contents">
                <p>
                    In addition to working on our own projects, we are available
                    for hire and can provide services such as <span className='bold'>design</span>,
                    <span className='bold'> prototyping</span>, and <span className='bold'>development</span>.
                    <br/><br/>
                    Below are some of the technologies we work with most commonly.
                    <br/><br/>
                    Interested in working together?  Please reach out, we would
                    love to discus your project with you!
                </p>
            </div>
        </div>
        <div className="card-banner">
            <div className='card'>
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
            </div>
        </div>
        <div className="contactContainer light">
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
            <h3 className='bold'>Don't take our word for it... Here are some reviews from our clients!</h3>
            <div className="reviewGallery">
                {reviews}
            </div>
        </div>
    </div>
  );
}