import styles from "./styles/Services.module.css";

const services = [
  {
    title: "Python/AI Backend",
    desc: "Robust data processing units and AI integration via Django and FastAPI.",
    icon: "🤖",
  },
  {
    title: "Mobile Systems",
    desc: "Native-feel cross-platform experiences using Flutter and React Native expertise.",
    icon: "📱",
  },
  {
    title: "Web Architecture",
    desc: "High-scale React & Next.js applications designed for performance.",
    icon: "🌐",
  },
  {
    title: "Premium UI/UX",
    desc: "Immersive editorial design systems that elevate your brand's technical authority.",
    icon: "✨",
  },
  {
    title: "Digital Marketing",
    desc: "Growth-focused campaigns using SEO, ads, and analytics to scale your business.",
    icon: "📈",
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      
      {/* HEADER */}
      <div className={styles.header}>
        <p className={styles.tag}>WHAT WE DO</p>
        <h2>Deep Tech Solutions</h2>
      </div>

      {/* SLIDER */}
      <div className={styles.slider}>
          {services.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
      </div>

    </section>
  );
}