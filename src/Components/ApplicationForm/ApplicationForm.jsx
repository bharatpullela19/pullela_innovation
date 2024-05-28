import React from 'react'
import './ApplicationForm.css'

const ApplicationForm = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5c5ebdf4-f4d1-4f67-acd2-58af260523e8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='application'>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input type="text" name='name' placeholder='Enter your name' required />
        
        <label>Email</label>
        <input type="email" name='email' placeholder='Enter your email' required />
        
        <label>Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter your phone number' required />
        
        <label>Full Time (40 hours) or Part-Time (20 hours)</label>
        <input type="text" name='employment' placeholder='Enter your preference' required />
        
        <label>Skills</label>
        <input type="text" name='skills' placeholder='Enter any relevant skills' required />
        
        <button type='submit' className='btn'>Submit Now</button>
      </form>
      <span>{result}</span>
    </div>
  )
}

export default ApplicationForm
