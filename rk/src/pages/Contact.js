import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/contact.css'

function ContactPage() {
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

  const [gender, setGender] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };


  return (
    <div className="c_container">
      <div className="card">
        {/* <div className="left">
          <img src={require("../assets/img/contact-2.jpg")} alt="Background" />
        </div> */}
        <div className="right-col">
          <div className="inner" style={{ zIndex: 12, position: 'relative' }}>
            <h1>Registration</h1>
          </div>
          <form onSubmit={handleSubmit} style={{ zIndex: 12, position: 'relative' }}>
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
              <label htmlFor="age" className="formbold-form-label">
                Age
              </label>

              <input
                type="age"
                name="age"
                id="age"
                min="1"
                max="120"
                placeholder="Enter your Age"
                className="formbold-form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formbold-mb-5 formbold-pt-3">
              <label className="formbold-form-label formbold-form-label-2">
                Select Your Gender
              </label>
              <div className="flex flex-wrap formbold--mx-3">
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <label htmlFor="male" className="formbold-form-label">
                      <input type="radio" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
                      Male
                    </label>
                    <label htmlFor="female" className="formbold-form-label">
                      <input type="radio" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
                      Female
                    </label>
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <label htmlFor="age" className="formbold-form-label">
                    Age
                  </label>
                  <div className="formbold-mb-5">
                    <input
                      type="age"
                      name="age"
                      id="age"
                      min="1"
                      max="120"
                      placeholder="Enter your Age"
                      className="formbold-form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

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


            <div className="formbold-mb-5 formbold-pt-3">
              
              <div className="flex flex-wrap formbold--mx-3">
              <div className="w-full sm:w-half formbold-px-3">
              <label htmlFor="photoshoot" className="formbold-form-label">
            <p>Type of photoshoot  they want </p>
              </label>
                  <div className="formbold-mb-5">
                  <label htmlFor="NewBorn" className="formbold-form-label">
                    <input type="checkbox" value="NewBorn" onChange={handleGenderChange} />
                    NewBorn 
                  </label>
                  <label htmlFor="Maternity" className="formbold-form-label">
                    <input type="checkbox" value="Maternity" onChange={handleGenderChange} />
                    Maternity 
                  </label>
                  <label htmlFor="Kids" className="formbold-form-label">
                    <input type="checkbox" value="Kids" onChange={handleGenderChange} />
                    Kids  
                  </label>
                  <label htmlFor="Other" className="formbold-form-label">
                    <input type="checkbox" value="Other" onChange={handleGenderChange} />
                    Other   
                  </label>
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                <label htmlFor="package" className="formbold-form-label">
            <p>Type of package they would prefer to buy </p>
              </label>
                  <div className="formbold-mb-5">
                  <label htmlFor="Bronze" className="formbold-form-label">
                    <input type="checkbox" value="Bronze" onChange={handleGenderChange} />
                    Bronze  
                  </label>
                  <label htmlFor="Silver" className="formbold-form-label">
                    <input type="checkbox" value="Silver" onChange={handleGenderChange} />
                    Silver  
                  </label>
                  <label htmlFor="Gold" className="formbold-form-label">
                    <input type="checkbox" value="Gold" onChange={handleGenderChange} />
                    Gold   
                  </label>
                  <label htmlFor="Diamond" className="formbold-form-label">
                    <input type="checkbox" value="Diamond" onChange={handleGenderChange} />
                    Diamond   
                  </label>
                  </div>
                </div>

              </div>
            </div>
            <div>
              <div className="usersubmit">
                <input type="submit" value="Register" />
              </div>
            </div>
          </form>

          <div id="error">{errorMessage}</div>
          <div id="success-msg">{successMessage}</div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
