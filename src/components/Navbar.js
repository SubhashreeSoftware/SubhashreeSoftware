import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo1 from "../assets/logo.png";
import logo2 from "../assets/logoblack.png";

function Navbar() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="navbar__left">
        <img className="navbar__logo" src={logo2} alt="Logo" style={{ width: '16%' }} />
      </div>
      <nav ref={navRef} className={isOpen ? 'responsive_nav' : ''}>
        <a href="/#">Home</a>
        <a href="/#">Portfolio</a>
        <a href="/#">Blog</a>
        <a href="/#">About me</a>
        <button className="nav-btn nav-close-btn" onClick={toggleNav}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleNav}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
