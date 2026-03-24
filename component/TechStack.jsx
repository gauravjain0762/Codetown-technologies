import { useState } from "react";
import styles from "./styles/Home.module.css";

// ICONS
import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaWordpress,
  FaPhp,
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
} from "react-icons/fa";

import {
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiAndroid,
  SiTypescript,
  SiVuedotjs,
  SiHtml5,
  SiNextdotjs,
  SiWix,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiRealm,
  SiPostgresql,
  SiRedis,
  SiSupabase,
  SiOracle,
  SiGoogleads,
  SiFacebook,
  SiInstagram,
  SiMailchimp,
  SiHubspot,
  SiGooglecloud,
  SiJenkins,
  SiGithub,
  SiKubernetes,
  SiDigitalocean,
} from "react-icons/si";

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("Mobile");

  const data = {
    Mobile: [
      { name: "iOS", icon: <SiSwift /> },
      { name: "Android", icon: <SiAndroid /> },
      { name: "React Native", icon: <FaReact /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Swift", icon: <SiSwift /> },
      { name: "Kotlin", icon: <SiKotlin /> },
    ],

    Frontend: [
      { name: "ReactJS", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Vue", icon: <SiVuedotjs /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "Wix", icon: <SiWix /> },
    ],

    Backend: [
      { name: "PHP", icon: <FaPhp /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Python", icon: <FaPython /> },
    ],

   Database: [
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Supabase", icon: <SiSupabase /> },
],

    "Digital Marketing": [
      { name: "Google Ads", icon: <SiGoogleads /> },
      { name: "Facebook", icon: <SiFacebook /> },
      { name: "Instagram", icon: <SiInstagram /> },
      { name: "SEO", icon: <SiGoogleads /> },
      { name: "Mail Marketing", icon: <SiMailchimp /> },
      { name: "HubSpot", icon: <SiHubspot /> },
    ],

    "Infra & DevOps": [
      { name: "AWS", icon: <FaAws /> },
      { name: "Google Cloud", icon: <SiGooglecloud /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "DigitalOcean", icon: <SiDigitalocean /> },
    ],
  };

  return (
    <section className={styles.techDNA}>
      {/* LEFT */}
      <div className={styles.left}>
        <h2>Our Engineering DNA</h2>
        <p>
          We don’t just use tools; we master the underlying protocols. Explore
          the core technologies that power our monoliths.
        </p>

        <div className={styles.menu}>
          {Object.keys(data).map((item) => (
            <div
              key={item}
              className={`${styles.menuItem} ${
                activeTab === item ? styles.active : ""
              }`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        {data[activeTab].map((tech, index) => (
          <div key={index} className={styles.techCard}>
            <div className={styles.icon}>{tech.icon}</div>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}