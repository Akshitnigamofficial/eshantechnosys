export default function ServicesPreview() {
  const services = [
    {
      title: "Digital Transformation",
      desc: "Enterprise software, cloud migration and automation solutions."
    },
    {
      title: "AI & Machine Learning",
      desc: "RPA, OCR, ML models and intelligent automation."
    },
    {
      title: "Product Engineering",
      desc: "Agile development, UI/UX and scalable architecture."
    }
  ];

  return (
    <section className="section">

      <h2 className="title" style={{ textAlign: "center" }}>
        Our Services
      </h2>

      <div className="services-preview-grid">
        {services.map((service, i) => (
          <div key={i} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}