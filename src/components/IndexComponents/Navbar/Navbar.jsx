import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = ({about , contactUs,services ,scrollToSection}) => {
  const [navx, setnavx] = useState(false);
  const menuRef = useRef(null);
  const hamRef = useRef(null);

  // const handleNav = () => {
  //   setnavx((prev) => !prev);
  //   let pm = document.getElementsByClassName("NavMenu")[0];
  //   let ham = document.getElementsByClassName("holaaaa")[0];
  //   if (navx) {
  //     pm.style.left = "transform:translateX()";
  //     ham.src = "close.webp";
  //   } else {
  //     pm.style.left = "100%";
  //     ham.src = "hamm.png";
  //   }
  // };
  // const handleNav = () => {
  //   setnavx((prev) => {
  //     const newNavState = !prev;
  //     let pm = document.getElementsByClassName("NavMenu")[0];
  //     let ham = document.getElementsByClassName("holaaaa")[0];
      
  //     if (newNavState) {
  //       pm.style.left = "0px";  // Show menu
  //       ham.src = "close.webp";
  //     } else {
  //       pm.style.left = "100%"; // Hide menu
  //       ham.src = "hamm.png";
  //     }
      
  //     return newNavState;
  //   });
  // };

  const handleNav = () => {
    const newNavState = !navx;
    setnavx(newNavState);

    if (newNavState) {
      menuRef.current.style.left = "0px";  // Show menu
      hamRef.current.src = "close.webp";
    } else {
      menuRef.current.style.left = "100%";  // Hide menu
      hamRef.current.src = "hamm.png";
    }
  };
  
  return (
    <div className="NavBarParent" data-aos="fade">
      <div className="MainLogo">
        <NavLink to="/">
          <img
            style={{ width: "100%" }}
            src="Images/IndexPageImages/ACE1.png"
            alt="acelogz"
          />
        </NavLink>
      </div>
      <div className="NavMenu" ref={menuRef} onClick={handleNav}>
        <NavLink className="buttonunderline">Home</NavLink>
        <NavLink className="buttonunderline" onClick={()=>{scrollToSection(services)}}>Services</NavLink>
        <NavLink className="buttonunderline" onClick={()=>{scrollToSection(about)}}>About</NavLink>
        <NavLink className="buttonunderline" onClick={()=>{scrollToSection(contactUs)}}>Contact Us</NavLink>
        <NavLink to="/login">
          <button className="SecOneMeetLawBtnS">
            Sign in
            <svg
              className="opentabicon"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z" />
            </svg>
          </button>
        </NavLink>
      </div>
      <div onClick={handleNav} data-nav-open className="hamburger">
        <img
          className="holaaaa"
          ref = {hamRef}
          style={{ width: "24px", zIndex: "10000" }}
          src="hamm.png"
          alt="="
        />
      </div>
    </div>
  );
};

export default Navbar;
