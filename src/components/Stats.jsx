import { useEffect, useRef } from "react";

export default function Stats() {
  const cardsRef = useRef([]);

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "300+", label: "Clients Served" },
    { value: "12+", label: "Years Experience" },
    { value: "150+", label: "Design Thinkers" }
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      card.style.opacity = 0;
      card.style.transform = "translateY(60px)";

      setTimeout(() => {
        card.style.transition = "all 0.6s ease";
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, i * 150);
    });
  }, []);

  return (
    <section className="section">
      <div className="stats-grid">
        {stats.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="stat-card"
          >
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}