// import React, {useState} from 'react'
// //import React from 'react'
// import './Navbar.css'
// //import logo from'../../assets/logo.svg'
// import underline from '../../assets/nav_underline.svg'
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import menu_open from '../../assets/menu_open.svg'
// import menu_close from '../../assets/menu_close.svg'


// const  Navbar=()=>{
//     const [menu,setMenu]=useState("home");
//     return(
        
//         <div className='navbar'>
        
//         <img src={menu_open}alt="" />
//         <ul className="nav-menu">
//             <img src={menu_close} alt="" className="nav-mob-close" />
//             <li><AnchorLink className="anchor-link" href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
//             <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
//             <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=''/>:<></>}</li>
//             <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
//             <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
//         </ul>
//         <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
//         </div>
//     )
// }
// export default  Navbar;




// src/Components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
  };

  const handleMenuClick = (section) => {
    setMenu(section);
    setOpenMenu(false); // close menu on mobile
  };

  return (
    <div className='navbar'>
      <img
        src={menu_open}
        alt="open"
        className='nav-mob-open'
        onClick={handleMenuToggle}
      />
      <ul className="nav-menu" style={{ right: openMenu ? '0' : '-350px' }}>
        <img
          src={menu_close}
          alt="close"
          className="nav-mob-close"
          onClick={handleMenuToggle}
        />
        {[
          { label: "Home", id: "home" },
          { label: "About Me", id: "about" },
         
          { label: "Portfolio", id: "work" },
          { label: "Contact", id: "contact" },
        ].map((item) => (
          <li key={item.id}>
            <AnchorLink className="anchor-link" offset={50} href={`#${item.id}`}>
              <p onClick={() => handleMenuClick(item.id)}>{item.label}</p>
            </AnchorLink>
            {menu === item.id && <img src={underline} alt='underline' />}
          </li>
        ))}
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
