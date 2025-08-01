import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';


const Contact=()=>{

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "64c8f203-0fc4-4288-b33e-e6c0164e3a93");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
    return(
        <div className="contact" id="contact" >
           <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
           </div>
           <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free
                  to send me a message about anything that you want. You can  contact me anytime
                </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>ashishram681@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>9555167438</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Greater Noida, Uttar Pradesh</p>
                    </div>
                </div>
            </div>
            <form className="contact-right" onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text"  placeholder="Enter Your Name" name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter Your Email" name='email'/>
                <label htmlFor="">Write Your Message here</label>
                <textarea name="message" rows="8" placeholder="Enter Your Message"></textarea>
                <button className="contact-submit" type="submit">Submit Now</button>
            </form>
           </div>
        </div>
    )
}

export default Contact;