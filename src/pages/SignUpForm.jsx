import React, { useState } from 'react';
import styles from "styles/Partners.module.sass";

const SignUpForm = () => {
  const [formData, setFormData] = useState({ name:'',academicYear:1,Major:'',email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Form Data:', formData); // Log the form data
  
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Rest of your code...
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

 

  return (
    <section className={styles.programPageContainer}style={{border: "2px solid navy"}}
    >
			<div className={styles.headerContainer}>
				<div className={styles.leftColumn}>
    <form onSubmit={handleSubmit} style={{marginLeft:"auto",marginRight:"auto"}}>
      <label>Email:</label>
      <br/>

      <input type="email" name="email" value={formData.email} onChange={handleChange} style={{border: "2px solid navy"}}/>
      <br/>
      <label>Full Name:</label>
      <br/>

      <input type="text" name="name" value={formData.name} onChange={handleChange} style={{border: "2px solid navy"}}/>
      <br/>
      <label>Major:</label>
      <br/>

      <input type="text" name="Major" value={formData.Major} onChange={handleChange} style={{border: "2px solid navy"}}/>
      <br/>

      <label>Academic Year:</label>
      <br/>

      <input type="Int" name="academicYear" value={formData.academicYear} onChange={handleChange} style={{border: "2px solid navy"}}/>
      <br/>

      <label>Password:</label>
      <br/>

      <input type="password" name="password" value={formData.password} onChange={handleChange} style={{border: "2px solid navy"}}/>
      <br/>


      <button type="submit"style={{background:'navy',color:'white',marginTop:"10px",marginLeft:"50px",padding:"15px",border: "2px solid navy", borderRadius: "8px",marginBottom:"20px"}}>Sign Up</button>
    </form>
    </div>
    </div>
    </section>
  );
};

export default SignUpForm;
