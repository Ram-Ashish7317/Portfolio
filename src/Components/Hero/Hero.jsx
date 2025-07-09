// import React from "react";
// import './Hero.jsx';
// import profile_img from "../../assets/WhatsApp Image 2025-06-26 at 14.05.36_bb17793d.jpg";
// import './Hero.css'
// import AnchorLink from 'react-anchor-link-smooth-scroll';


// const Hero = () => {
//   return (
//     <div className="hero" id="home">
//       <img src={profile_img} alt="Profile" />
//       <h1><span>I'm Ram Ashish,</span> full stack developer</h1>
//       <p>
//         I'm a full stack developer from Greater Noida with
//         2 years of experience in frontend and backend both
//       </p>
//       <div className="hero-action">
//         <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink></div>
//         <div className="hero-resume">My Resume</div>
//       </div>
//     </div>
//   )
// }

// export default Hero;



// src/Components/Hero/Hero.jsx
import React from "react";
import profile_img from "../../assets/WhatsApp Image 2025-06-26 at 14.05.36_bb17793d.jpg";
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profile_img} alt="Profile" className="hero-img" />
      <h1><span>I'm Ram Ashish,</span> Full Stack Developer</h1>
      <p> I enjoy crafting both the frontend interfaces that users interact with and the backend logic that powers the application.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink>
        </div>
       <a href="/Resume.pdf" download={true} target="_blank"> <div className="hero-resume">My Resume</div></a>
      </div>
    </div>
  );
};

export default Hero;
