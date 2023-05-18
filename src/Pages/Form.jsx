import React, { useState, useEffect } from 'react';


const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    Fname: '',
    Lname: '',
    email: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    // Display the form after 5 seconds
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    } else {
      newErrors.name = '';
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (isValid) {
      // Form is valid, perform additional actions (e.g., API calls)
      console.log('Form data:', formData);
    }

    setErrors(newErrors);
  };

  return (
    <>
     

      {showForm && (
        <form onSubmit={handleSubmit}>
          <h2>Connect with us</h2>
          <p>for outstanding protective overlaminates</p>

          <div>
            <label> First Name</label>
            <input
              type="text"
              name="Fname"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <label> Last Name</label>
            <input
              type="text"
              name="Lname"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
 
          </div>
          

          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default Form;