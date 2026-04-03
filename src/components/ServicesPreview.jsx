export default function ServicesPreview() {
  const services = [
    {
      title: "Custom Software",
      desc: "Enterprise-grade applications tailored to your business.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      title: "Cloud Solutions",
      desc: "Secure and scalable cloud infrastructure.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    },
    {
      title: "System Integration",
      desc: "Connect all your tools into one ecosystem.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
    },
    {
      title: "IT Consulting",
      desc: "Strategic guidance to scale your business.",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
    }
  ];

  return (
    <section className="services-preview">

      <h2 className="section-title">
        Our <span className="gradient-text">Services</span>
      </h2>

      <p className="section-subtitle">
        Built for scale, speed and innovation
      </p>

      <div className="services-alt">

        {services.map((s, i) => (
          <div
            key={i}
            className={`service-card-alt ${i % 2 !== 0 ? "reverse" : ""}`}
          >

            {/* IMAGE */}
            <div className="service-image">
              <img src={s.img} alt={s.title} />
            </div>

            {/* CONTENT */}
            <div className="service-content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>

              <a href="/services" className="btn-primary">
                Learn More
              </a>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}