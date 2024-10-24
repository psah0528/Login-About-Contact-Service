import image2 from '../assets/image2.jpg';
import image4 from '../assets/image4.jpg';
import image3 from '../assets/image3.jpg';


import "./About.css";
const About = () => {
  return (
    <div className="conts">
      <div className="about">
        <h2>About Us </h2>
      </div>

      <div className="LR1">
      <div className="LR2">
        <img src={image2}  />
        </div>
          <div className="LR3">
          <h2>Lab Reporting Software</h2>
          <p>
            Now BloPath is an established name in the field <br /> of healthcare
            industries and provides the complete A to Z software 
           <br /> solution to all
            size lab & hospitals. We have our presence across all <br /> over India
            with more than 2500+ clients.
          </p>
          </div>   
      </div>

      <div className="Knowus1">
        <div className="knowus2">
        <h2>Know Us </h2>
        <p>  
          In year 2002, a team of innovative brains bring with an idea to
          develop the solution for small and medium size healthcare industry. <br />
          These visionary decides to develop a complete solution for an
          unorganized healthcare industry <br /> which have been deeply rooted in urban
          India. In 2005, team decided to give a perception to their vision and
          came up with a name "BloPath". <br /> BloPath is a sanskrit word and its meaning
          is "Simple and Easy". Now SaralPro Technologies Pvt. <br /> Ltd.is an
          established name in the field of healthcare IT services and provides
          the complete solution to all size pathology labs & hospitals. <br /> We have
          our presence across all over India with more than 2500 clients.
        </p>
        </div>
      </div>

      <div className="MV">

        <div className="imgs">
          <img src={image4} alt="" />
        </div>

        <div className="mv2">
        <h2>Mission & Vision</h2>
        <p>
          The company has a simple vision, to help Pathology-labs and hospitals
          to optimize and expand their businesses via a series of easy to using
          the Saral-Path software. The Saral Soft Pro team aims to outmatch our
          customer's expectations by providing products and services of the
          highest level in quality, reliability, and cost effectiveness. We
          believe in providing innovative applications and groundbreaking data
          to our customers. Our team creates product and provides service that
          will increase efficiency and revenue for all size pathology-labs and
          hospitals to optimize and create growth.
        </p>
        </div>
      </div>

      <div className="tm1">

        <div className="tm2">
          <img src={image3} alt="" />
        </div>
        <div className="tm3">
        <h2>Our Team</h2>
        <p>
          It is founded by an experienced management team with diverse industry
          and technology experience built on leading, developing and maintaining
          large-scale integrated solutions. Technical team members have in-depth
          experience in consultancy, IT solution, and software management with
          the exposure of highly tense situations. Company have own Saral
          support center to provide support and services within given service
          TAT time and maintain service feed back to improve our services.
        </p>
      </div>

      </div>

    </div>
  );
};

export default About;
