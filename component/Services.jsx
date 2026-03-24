import styles from "./styles/Services.module.css";

const services = [
  {
    title: "Web Architecture",
    desc: "High-scale React & Next.js applications designed for performance and global reach.",
    icon: "🌐",
  },
  {
    title: "Mobile Systems",
    desc: "Native-feel cross-platform experiences using Flutter and React Native expertise.",
    icon: "📱",
  },
  {
    title: "Python/AI Backend",
    desc: "Robust data processing units and AI integration via Django and FastAPI.",
    icon: "🤖",
  },
  {
    title: "Premium UI/UX",
    desc: "Immersive editorial design systems that elevate your brand's technical authority.",
    icon: "✨",
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      {/* Header */}
      <div className={styles.header}>
        <p className={styles.tag}>WHAT WE DO</p>
        <h2>Deep Tech Solutions</h2>
      </div>

      {/* Cards */}
      <div className={styles.grid}>
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