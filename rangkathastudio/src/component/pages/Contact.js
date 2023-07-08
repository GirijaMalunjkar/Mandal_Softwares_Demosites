import React from 'react';
import "./Style.css"

function ContactForm() {
  return (
    <>

      <section id='contact' className='container-wrapper'>
        <div className='content'>
          <h2>Contact Us</h2>
          <p>रंगकथा Studio
            Photographer
            New Born | Maternity | Kids | Portrait
            Makeup ~ costume ~ Photo
            Founder~@aniket_kadlak_photography_
            Dm For Bookings And Enquiries </p>
        </div>
        <div className='container bottom-wrapper'>
          <div className='contactInfo'>
            <div className='box'>
              <div className='contact-Icon'><i className="fa-solid fa-location-dot"></i></div>
              <div className='text'>
                <h3>Address</h3>
                <p>Flat No 01, Shreenathji building
                  Talegaon-Chakan Road
                  above Axis bank
                  Vatan Nagar
                  Talegaon Dabhade, Maharashtra 410507
                  India</p>
              </div>
            </div>
            <div className='box'>
              <div className='contact-Icon'><i className="fa-regular fa-envelope"></i></div>
              <div className='text'>
                <h3>Email</h3>
                <p>aniketkadlak@gmail.com</p>
              </div>
            </div>
            <div className='box'>
              <div className='contact-Icon'><i className="fa-light fa-phone"></i></div>
              <div className='text'>
                <h3>Phone</h3>
                <i></i>
                <p>+91 8308287358 </p>
              </div>
            </div>
          </div>
          <div className='contactForm'>
            <form action='https://formsubmit.co/e1mandalsoft@gmail.com' method='post'>
              <h2>Send Message</h2>
              <div className='inputBox'>
                <input type='text' name='full_name' required="required" />
                <span>Full Name</span>
              </div>
              <div className='inputBox'>
                <input type='eamil' name='email' required="required" />
                <span>Email</span>
              </div>
              <div className='inputBox'>
                <textarea name='message' required="required"></textarea>
                <span>Type Your Message...</span>
              </div>
              <div className='inputBox'>
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>

      </section>

    </>
  );

}

export default ContactForm;
