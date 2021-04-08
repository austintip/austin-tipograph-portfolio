import React from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_h960bdn', 'template_dvgjquv', e.target, 'user_4ViuowBu4gGvwHEjgDzIo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return (
        <> 
        <h1 className="page-header">Say Hi!</h1>
        <div className="contactContainer">
        <form className="contact-form" onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" className="form-control" name="name" />
            <label>Email</label>
            <input type="email" className="form-control" name="email" />
            <label>Subject</label>
            <input type="text" className="form-control" name="subject" />
            <label>Message</label>
            <textarea className="form-control" name="message" />
            <input className="submit-btn" type="submit" value="Send" />
        </form>
        </div>
        </>
    );
}

export default Contact;