import { useEffect, useRef } from "react";
import Navibar from "../components/Navbar.jsx";

const services = [
  // CORE
  {
    title: "Custom Software Development",
    desc: "Enterprise-grade applications tailored to your business workflows.",
    icon: "💻"
  },
  {
    title: "Web Development",
    desc: "Fast, scalable, and modern websites using latest frameworks.",
    icon: "🌐"
  },
  {
    title: "Mobile App Development",
    desc: "iOS & Android apps with seamless performance and UX.",
    icon: "📱"
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces focused on user experience.",
    icon: "🎨"
  },

  // CLOUD + DEVOPS
  {
    title: "Cloud Infrastructure",
    desc: "Scalable cloud architecture on AWS, Azure, and GCP.",
    icon: "☁️"
  },
  {
    title: "DevOps & CI/CD",
    desc: "Automated pipelines for faster and reliable deployments.",
    icon: "⚙️"
  },
  {
    title: "System Integration",
    desc: "Connect all your systems into a seamless ecosystem.",
    icon: "🔗"
  },

  // AI + DATA
  {
    title: "AI & Machine Learning",
    desc: "Smart systems that automate and optimize operations.",
    icon: "🤖"
  },
  {
    title: "Data Analytics",
    desc: "Transform raw data into actionable business insights.",
    icon: "📊"
  },
  {
    title: "Big Data Solutions",
    desc: "Handle massive datasets with high performance systems.",
    icon: "🧠"
  },

  // SECURITY
  {
    title: "Cyber Security",
    desc: "Protect your infrastructure with advanced security systems.",
    icon: "🔐"
  },
  {
    title: "Penetration Testing",
    desc: "Identify vulnerabilities before attackers do.",
    icon: "🛡️"
  },

  // BUSINESS
  {
    title: "IT Consulting",
    desc: "Strategic technology guidance for business growth.",
    icon: "📈"
  },
  {
    title: "Outsourcing Solutions",
    desc: "End-to-end tech outsourcing for startups & enterprises.",
    icon: "🏢"
  },
  {
    title: "Maintenance & Support",
    desc: "Reliable ongoing support and system monitoring.",
    icon: "🛠️"
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
      }, i * 80); // smoother stagger
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
          End-to-end technology solutions for modern businesses
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

              <a href="/contact" className="btn-primary">
                Get Service
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}