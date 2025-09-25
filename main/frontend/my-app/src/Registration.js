import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    gender: ''
  });

  // Handle input changes for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation check
    if (!formData.username || !formData.password || !formData.email || !formData.gender) {
      alert('Please fill in all fields and select a gender.');
      return;
    }
    alert(`Registration Info:
    Username: ${formData.username}
    Password: ${formData.password}
    Email: ${formData.email}
    Gender: ${formData.gender}`);
  };

  return (
    <div className="Registration">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input 
            type="text" 
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        
        <label>
          Password:
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        
        <label>
          Gmail:
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        
        <h3>Select Gender</h3>
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          />
          Female
        </label>
        <br />
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="Other"
            checked={formData.gender === 'Other'}
            onChange={handleChange}
          />
          Other
        </label>
        <br />
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
