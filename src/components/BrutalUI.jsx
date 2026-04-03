export default function BrutalUI() {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>

      {/* ALERT */}
      <div className="brutal-card brutal-green" style={{ padding: "20px", marginBottom: "30px" }}>
        <strong>Success! Your changes have been saved</strong>
        <p>This is an alert with icon, title and description.</p>
      </div>

      {/* ACCORDION */}
      <div className="brutal-card" style={{ overflow: "hidden", marginBottom: "30px" }}>
        <div className="brutal-green" style={{ padding: "20px", fontWeight: "bold" }}>
          Is it accessible?
        </div>

        <div style={{ padding: "20px", background: "#fff" }}>
          Yes. It adheres to the WAI-ARIA design pattern.
        </div>
      </div>

      {/* BUTTONS */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <button className="brutal-btn">Button</button>
        <button className="brutal-btn">Button</button>
        <span className="brutal-btn">Badge</span>

        <select className="brutal-btn">
          <option>Blueberry</option>
          <option>Apple</option>
        </select>
      </div>

    </div>
  );
}