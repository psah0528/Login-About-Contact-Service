import React from "react";
import "./Contact.css";
// import contact from '../assets/contact.jpg'
const Contact = () => {
  return (
    <div className="cont">
      {/* <img src={contact} alt="" /> */}
      <section className="main">
        <h2>Contact Us </h2>
        <div className="content">
          <form>
            <span>Name *</span>
            <br />
            <input type="text" required="required" />
            <br />
            <span>Phone *</span>
            <br />
            <input type="phone" required="required" />
            <br />
            <span>Email Address *</span>
            <br />
            <input type="email" required="required" />
            <br />
            <span>Message *</span>
            <br />
            <textarea> Write Message </textarea>
            <br />
            <button className="btn">Submit </button>
          </form>
        </div>
      </section>
     
      <div className="card">

      <div className="cards">
       <div className="icon"> <i class="fa-solid fa-location-dot"></i></div>
    <h2>Contact Address</h2>
    <p>301 The Greenhouse,  <br />Custard
Factory, London, E2 8DY.</p>
      </div>

      <div className="cards">
       <div className="icon"> <i class="fa-solid fa-phone"></i></div>
    <h2>Let's Talk</h2>
    <p>8923805789 <br />4273895423
    </p>
      </div>


      <div className="cards">
       <div className="icon"> <i class="fa-solid fa-envelope"></i> </div>
    <h2>Email Us</h2>
    <p>Supportlab@gmail.com  <br />userlab@gmail.com
    </p>
      </div>


    </div>
    </div>
  );
};

export default Contact;
