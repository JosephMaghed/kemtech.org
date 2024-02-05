import React, { useState } from 'react';

const SignInForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <br/>

      <input type="email" name="email" value={formData.email} onChange={handleChange} style={{border: "2px solid navy"}}/>
      <br/>

      <label>Password:</label>
      <br/>

      <input type="password" name="password" value={formData.password} onChange={handleChange} style={{border: "2px solid navy"}}/>
      <br/>

      <button type="submit"style={{background:'navy',color:'white',marginTop:"10px",marginLeft:"50px",padding:"15px",border: "2px solid navy", borderRadius: "8px",marginBottom:"20px"}}>Sign In</button>
    </form>
  );
};

export default SignInForm;
