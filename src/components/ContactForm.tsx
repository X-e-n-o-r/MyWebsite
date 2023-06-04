import { TypeAnimation } from 'react-type-animation';
import '../Styles/ContactForm.css'
import '../Styles/Links.css'
import Links from './Links'
import emailjs from '@emailjs/browser';
import React from 'react';

export default function ContactMe() {
  const form = React.useRef<any>(null);

  const sendEmail = (_e: any) => {

    emailjs.sendForm('service_fycoczd', 'template_u9f1avk', form.current, 'eXi6qU1y0OLsw9roG')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='footer' id='footer'>
      <div className="contact-section contact-wrapper">
      <div className="fake-big"></div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="contact-heading">
          <div id="header">
            <h2>
Contact me
            </h2>
          </div>
          <p>
            I’m interested in jop opportunities. Open for relocation. However, if you have other request or question,
            don’t hesitate to use the form.
          </p>
        </div>

        <div className="form-input-wrapper">
          <div className="form-input-group">
            <input type="text" placeholder="Name" name="name" className="name" />
            <span></span>
          </div>
          <div className="form-input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="email"
            />
            <span></span>
          </div>
        </div>
        <div className="form-input-group">
          <input
            type="text"
            placeholder="Subject"
            className="subject"
            name="subject"
          />
          <span></span>
        </div>
        <div className="form-input-group">
          <textarea
            autoComplete='off'
            placeholder="Message"
            className="textarea"
            name="message"
            spellCheck='false'>
          </textarea>
          <span></span>
        </div>
        <div className="message"></div>
        <button type="submit" className="contact-button submit-button">
          Send Message
        </button>
      </form>
    </div>
    <Links/>
    </div>
  )
}
