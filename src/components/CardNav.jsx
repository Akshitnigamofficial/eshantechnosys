import { useState } from "react";

export default function CardNav() {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.wrapper}>
      
      {/* TOP BAR */}
      <div style={styles.nav}>
        <div style={styles.logo}>ESHAN</div>

        <button style={styles.menuBtn} onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* DROPDOWN */}
      {open && (
        <div style={styles.menu}>

          <div style={styles.card}>
            <h3>Services</h3>
            <a href="/services">Web Development</a>
            <a href="/services">AI & ML</a>
            <a href="/services">Cloud</a>
          </div>

          <div style={styles.card}>
            <h3>Industries</h3>
            <a href="/industries">Finance</a>
            <a href="/industries">Healthcare</a>
            <a href="/industries">Startups</a>
          </div>

          <div style={styles.card}>
            <h3>Company</h3>
            <a href="/contact">Contact</a>
            <a href="/tech">Tech Stack</a>
          </div>

        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    position: "sticky",
    top: 0,
    zIndex: 1000
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 20px",
    background: "#fff",
    borderBottom: "4px solid black"
  },

  logo: {
    fontWeight: "900",
    fontSize: "22px",
    border: "3px solid black",
    padding: "6px 12px",
    boxShadow: "4px 4px 0px black"
  },

  menuBtn: {
    fontSize: "20px",
    border: "3px solid black",
    background: "#ffd600",
    padding: "6px 12px",
    cursor: "pointer",
    boxShadow: "4px 4px 0px black"
  },

  menu: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
    background: "#f6f6f6",
    borderBottom: "4px solid black"
  },

  card: {
    border: "3px solid black",
    padding: "16px",
    background: "#fff",
    boxShadow: "6px 6px 0px black",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }
};