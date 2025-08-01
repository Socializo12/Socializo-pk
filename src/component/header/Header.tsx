"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "@/component/style.css"; // apka custom css
// import TextEffect from "./TextEffect";
import Image from "next/image"
// import dynamic from 'next/dynamic'
import Link from "next/link";

// const TextEffect = dynamic(() => import('@/component/slider/TextEffect'), {
//   ssr: false, // <-- disables server-side render for just this component
// })
const sections = ["home", "services", "faq","blog","about", "contact"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section detection
      const scrollPosition = window.scrollY + 100;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reusable nav link
  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <a href={`#${href}`}
      className={`${
        activeSection === href ? "text-blue-500 font-bold underline" : "text-black"
      } transition duration-200`}
      onClick={() => setIsMenuOpen(false)} >
      {label}
    </a>
  );
  const PageLink = ({ href, label }: { href: string; label: string }) => (
    <a href={`/${href}`}
      className={`${
        activeSection === href ? "text-blue-500 font-bold underline" : "text-black"
      } transition duration-200`}
      onClick={() => setIsMenuOpen(false)} >
      {label}
    </a>
  );

  return (
    <div className="container " id="home">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="morphing-shapes">
        <div className="morph"></div>
        <div className="morph"></div>
      </div>

      <div className="sparkle-container">
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </div>
      <nav className={`sticky-navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link href="/">
            <Image src="/assets/logo1.png" alt="Logo" width={280} height={90} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <ul className="nav-links flex gap-6">
              <li><Link href="/" className="text-[white]" >Home</Link></li>
              <li><NavLink href="services" label="Services" /></li>
              <li><NavLink href="faq" label="FAQ" /></li>
             <li><Link href="blog" className="text-[white]" >Blog</Link></li>
              {/* <li><NavLink href="about" label="About" /></li> */}
              <li><NavLink href="contact" label="Contact" /></li>
            </ul>
            <button className="cta-button">Lets Talk</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-links flex flex-col gap-4">
            <li><Link href="/" className="text-[white]" >Home</Link></li>
            <li><NavLink href="services" label="Services" /></li>
            <li><NavLink href="faq" label="FAQ" /></li>
            <li><NavLink href="blog" label="Blog" /></li>
            {/* <li><NavLink href="about" label="About" /></li> */}
            <li><NavLink href="contact" label="Contact" /></li>
          </ul>
          <button className="mobile-cta-button mt-4" onClick={toggleMenu}>
            Lets Talk
          </button>
        </div>
      </nav>
    
    </div>
  );
};

export default Header;
