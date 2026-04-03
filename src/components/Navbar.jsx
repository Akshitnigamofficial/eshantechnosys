import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-container glass squircle">

        {/* LOGO */}
        <div className="logo">Eshan</div>

        {/* DESKTOP LINKS */}
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/industries">Industries</a>
          <a href="/contact">Contact</a>
        </div>

        {/* CTA */}
        <div className="nav-cta">
          <a href="/contact" className="btn-primary">Get Started</a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu glass squircle-lg">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/industries">Industries</a>
          <a href="/contact">Contact</a>
        </div>
      )}

    </nav>
  );
}