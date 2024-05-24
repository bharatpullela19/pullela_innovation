import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
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
    <div className='contact'>
        <div className="contact-col">
            <h3>Have any issues or questions?</h3>
            <p>Thank you for visiting us! We're committed to providing you with exceptional service and support. Whether you have a question about our services, need assistance with a service, or just want to share your feedback, we're here to listen.</p>
            <ul>
                <li>pullelainnovation@gmail.com</li>
                <li>1-224-804-2185</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type = "text" name = 'name' placeholder='Enter your name' required></input>
                <label>Your Email</label>
                <input type = "email" name = 'email' placeholder='Enter your email' required></input>
                <label>Your Phone Number</label>
                <input type = "tel" name = 'phone' placeholder='Enter your phone number' required></input>
                <label>Type your message and we will get back to you within a few business days.</label>
                <textarea name="message" rows = "6" placeholder='Write your message' required></textarea> 
                <button type='submit' className='btn'>Submit Now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default ContactUs