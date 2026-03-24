import styles from "./styles/Methodology.module.css";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "Technical audit and market requirement analysis.",
  },
  {
    number: "02",
    title: "Blueprint",
    desc: "System architecture and pixel-perfect prototyping.",
  },
  {
    number: "03",
    title: "Forge",
    desc: "Agile sprint cycles with continuous integration.",
  },
  {
    number: "04",
    title: "Ascend",
    desc: "Cloud deployment and 24/7 technical monitoring.",
  },
];

export default function Methodology() {
  return (
    <section className={styles.methodology}>
      <div className={styles.container}>
        <h2>The Monolith Methodology</h2>
        <p className={styles.subtitle}>
          A rigorous four-stage process designed to ensure your product scales from day one.
        </p>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.line}></div>

          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.circle}>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}