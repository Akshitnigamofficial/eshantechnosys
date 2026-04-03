export default function Hero() {
  return (
    <section className="hero-wrapper">

      {/* BACKGROUND GLOW */}
      <div className="bg-glow"></div>

      {/* HERO CARD */}
      <div className="hero-card glass squircle-lg">

        {/* TAG */}
        <p className="hero-tag">
          ✨ ENTERPRISE SOFTWARE EXCELLENCE
        </p>

        {/* TITLE */}
        <h1 className="hero-title">
          Building Tomorrow's <br />
          <span className="gradient-text">
            Digital Infrastructure
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="hero-subtitle">
          We deliver cutting-edge enterprise software solutions and robust
          infrastructure systems for corporate and government clients worldwide.
        </p>

        {/* BUTTONS */}
        <div className="hero-actions">
          <a href="/contact" className="btn-primary squircle-pill">
            Get Started →
          </a>

          <a href="/services" className="btn-secondary squircle-pill">
            Learn More
          </a>
        </div>

      </div>

    </section>
  );
}