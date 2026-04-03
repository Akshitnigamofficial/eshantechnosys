import { useEffect, useRef } from "react";
import Navibar from "../components/Navbar.jsx";

const services = [
  {
    title: "Web Development",
    desc: "Modern, scalable web apps built with cutting-edge technologies.",
    icon: "💻"
  },
  {
    title: "AI & Machine Learning",
    desc: "Intelligent systems that automate and optimize business workflows.",
    icon: "🤖"
  },
  {
    title: "Cloud & DevOps",
    desc: "Secure, scalable infrastructure and seamless deployment pipelines.",
    icon: "☁️"
  },
  {
    title: "Cyber Security",
    desc: "Advanced protection for your systems, data, and infrastructure.",
    icon: "🔐"
  }
];

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      card.style.opacity = 0;
      card.style.transform = "translateY(40px)";

      setTimeout(() => {
        card.style.transition =
          "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, i * 150);
    });
  }, []);

  return (
    <>
      <Navibar />

      <section className="services-page">
        <h2 className="services-heading">
          Our <span className="gradient-text">Services</span>
        </h2>

        <p className="services-sub">
          Comprehensive technology solutions designed to scale your business
        </p>

        <div className="services-grid">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="service-glass-card"
            >
              <div className="icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <a href="/services" className="btn-primary">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}