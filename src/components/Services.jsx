import { useEffect, useRef } from "react";

const services = [
  "Web Development",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Cyber Security"
];

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      card.style.opacity = 0;
      card.style.transform = "translateY(60px) scale(0.95)";

      setTimeout(() => {
        card.style.transition =
          "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.7s ease";
        card.style.opacity = 1;
        card.style.transform = "translateY(0) scale(1)";
      }, i * 150); // 🔥 stagger effect
    });
  }, []);

  return (
    <section style={styles.wrapper}>
      <h2 style={styles.heading}>Our Services</h2>

      <div style={styles.grid}>
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            style={styles.card}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "translate(4px,4px)")
            }
            onMouseUp={(e) =>
              (e.currentTarget.style.transform = "translate(0,0)")
            }
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    padding: "80px 20px",
    maxWidth: "1100px",
    margin: "0 auto"
  },

  heading: {
    fontSize: "32px",
    fontWeight: "900",
    marginBottom: "30px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  },

  card: {
    border: "3px solid black",
    padding: "20px",
    background: "#fff",
    fontWeight: "800",
    boxShadow: "6px 6px 0px black",
    cursor: "pointer",
    transition: "transform 0.2s ease"
  }
};