export default function FooterGrid() {
  const sections = [
    {
      title: "Services",
      links: ["Web Development", "AI & ML", "Cloud"]
    },
    {
      title: "Industries",
      links: ["Finance", "Healthcare", "Startups"]
    },
    {
      title: "Company",
      links: ["Contact", "Tech Stack"]
    }
  ];

  return (
    <section style={styles.wrapper}>
      <div style={styles.grid}>
        {sections.map((section, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "translate(6px,6px)")
            }
            onMouseUp={(e) =>
              (e.currentTarget.style.transform = "translate(0,0)")
            }
          >
            <h3 style={styles.title}>{section.title}</h3>

            <ul style={styles.list}>
              {section.links.map((link, idx) => (
                <li key={idx} style={styles.item}>
                  <a href="#" style={styles.link}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    padding: "60px 20px",
    maxWidth: "1100px",
    margin: "0 auto"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px"
  },

  card: {
    border: "4px solid black",
    padding: "24px",
    background: "#fff",
    boxShadow: "8px 8px 0px black",
    transition: "transform 0.2s ease",
    cursor: "pointer"
  },

  title: {
    fontSize: "20px",
    fontWeight: "900",
    marginBottom: "16px"
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0
  },

  item: {
    marginBottom: "10px"
  },

  link: {
    textDecoration: "none",
    color: "#000",
    fontWeight: "600",
    borderBottom: "2px solid black",
    paddingBottom: "2px"
  }
};