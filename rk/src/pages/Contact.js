import React, { useState } from 'react';
import "../assets/css/contact.css";

function ContactPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

   const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    area: '',
    city: '',
    state: '',
    pinCode: '',
     gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={`contact-container`}>

      <div className="left-col">
        <img className='site-logo' src={require("../assets/images/logos/Rangkatha1.webp")} alt='Rangkatha1.webp' />
      </div>
      <div className="right-col">
      <div className="bg-image"></div>

      <div className="inner">
          <h1>Registration</h1>
          <div className="border"></div>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="formbold-mb-5">
            <label htmlFor="name" className="formbold-form-label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="formbold-form-input"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="formbold-mb-5">
            <label htmlFor="phone" className="formbold-form-label">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="formbold-form-input"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="formbold-mb-5">
            <label htmlFor="email" className="formbold-form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="formbold-form-input"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="formbold-mb-5">
            <label className="formbold-form-label">Gender</label>
            <div className="formbold-form-input">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />{' '}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />{' '}
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={handleChange}
                />{' '}
                Other
              </label>
            </div>
          </div>


          <div className="formbold-mb-5 formbold-pt-3">
            <label className="formbold-form-label formbold-form-label-2">
              Address Details
            </label>
            <div className="flex flex-wrap formbold--mx-3">
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <input
                    type="text"
                    name="area"
                    id="area"
                    placeholder="Enter area"
                    className="formbold-form-input"
                    value={formData.area}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter city"
                    className="formbold-form-input"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Enter state"
                    className="formbold-form-input"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <input
                    type="text"
                    name="pinCode"
                    id="post-code"
                    placeholder="Post Code"
                    className="formbold-form-input"
                    value={formData.pinCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <button type="submit" className="formbold-btn">
              Register
            </button>
          </div>
        </form>
      
        <div id="error">{errorMessage}</div>
        <div id="success-msg">{successMessage}</div>
        </div>
       
        


      
    </div>
  );
}

export default ContactPage;
