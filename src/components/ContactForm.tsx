import '../Styles/ContactForm.css'
import '../Styles/Links.css'
import Links from './Links'

export default function ContactMe() {
  return (
    <div className='footer'>
      <div className="contact-section contact-wrapper">
      <div className="fake-big"></div>
      <form className="contact-form">
        <div className="contact-heading">
          <div id="header">
            <h2>Contact me</h2>
          </div>
          <p>
            I’m interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
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
            //type="text"
            placeholder="Message"
            className="textarea"
            name="message"
          ></textarea>
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
