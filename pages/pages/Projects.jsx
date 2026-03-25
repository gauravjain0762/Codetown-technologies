import styles from "../styles/Portfolio.module.css";
import { useState } from "react";
import { FaTwitter, FaBriefcase } from "react-icons/fa";

const projects = [
  {
    title: "EmiratiHub",
    category: "Mobile",
    image: "/images/portfolio/EmiratiHub.jpg",
    android: "#",
    ios: "#",
  },
    {
    title: "Helpio - On Demand Services",
    category: "Mobile",
    image: "/images/projects/Helpio.jpg",
    android: "https://play.google.com/store/apps/details?id=com.helpio",
    ios: "https://apps.apple.com/app/helpio-on-demand-services/id6752221770",
  },
  {
    title: "wingstopUAE",
    category: "Mobile",
    image: "/images/projects/WingstopUAE.jpg",
    android: "https://play.google.com/store/apps/details?id=com.inresto.wingstopuae&pcampaignid=web_share",
    ios: "https://apps.apple.com/in/app/wingstop-uae/id1555493814",
    // tags: ["MOBILE APP", "REACT NATIVE"],
  },
  {
    title: "Gear | Unlock New Roads",
    category: "Mobile",
    image: "/images/projects/Gear.jpg",
    android: "https://play.google.com/store/apps/details?id=com.devicebee.gear&hl=en",
    ios: "https://apps.apple.com/in/app/gear-unlock-new-roads/id6747331842",
    // tags: ["MOBILE APP", "REACT NATIVE"],
  },
  {
    title: "National Discount Networks Inc",
    category: "Mobile",
    image: "/images/projects/National Discount Networks Inc.png",
    android: "https://play.google.com/store/apps/details?id=com.nbbi&hl=en_IN",
    ios: "https://apps.apple.com/us/app/national-discount-networks-inc/id1457195898",
    // tags: ["MOBILE APP", "REACT NATIVE"],
  },
  {
    title: "GAT - Global Arabian Trading",
    category: "Mobile",
    image: "/images/projects/GAT.jpg",
    android: "https://play.google.com/store/apps/details?id=com.gat.app&hl=en_IN",
    ios: "https://apps.apple.com/lb/app/gat-global-arabian-trading/id6747101470",
    // tags: ["MOBILE APP", "REACT NATIVE"],
  },
  {
    title: "MyStylist : Book a Stylist",
    category: "Mobile",
    image: "/images/projects/MyStylist.jpg",
    android: "https://play.google.com/store/apps/details?id=com.mystylist.user&hl=en_IN&pli=1",
    ios: "https://apps.apple.com/us/app/mystylist-book-a-stylist/id6475633914",
    // tags: ["MOBILE APP", "REACT NATIVE"],
  },
  {
    title: "My Stylist Partner",
    category: "Mobile",
    image: "/images/projects/My Stylist Partner.jpg",
    android: "https://play.google.com/store/apps/details?id=com.mystylistexpert&hl=en_IN",
    ios: "https://apps.apple.com/us/app/mystylist-partner/id6474432144",
    // tags: ["MOBILE APP", "REACT NATIVE"],
  },
  {
    title: "BTP ASTraM",
    category: "Mobile",
    image: "/images/projects/BTP AsTraM.jpg",
    android: "https://play.google.com/store/apps/details?id=com.BTPASTraM&hl=en_IN&pli=1",
    ios: "https://apps.apple.com/in/app/btp-astram/id6736525283",
    // tags: ["MOBILE APP", "REACT NATIVE"],
  },
  {
    title: "Pesabase",
    category: "Mobile",
    image: "/images/projects/Pesabase.jpg",
    android: "https://play.google.com/store/apps/details?id=com.pesabase.app&hl=en_IN&pli=1",
    ios: "https://apps.apple.com/in/app/pesabase/id1557420579?platform=iphone",
    // tags: ["MOBILE APP", "REACT NATIVE"],
  },
  {
    title: "P2P MOTORS",
    category: "Mobile",
    image: "/images/projects/P2P Motors.jpg",
    // android: "#",
    ios: "https://apps.apple.com/us/app/p2p-motors/id6744048096",
    // tags: ["MOBILE APP", "REACT NATIVE"],
  },
  {
    title: "NGI Health App",
    category: "Mobile",
    image: "/images/projects/NGI Health App.jpg",
    android: "https://play.google.com/store/apps/details?id=com.ngiapp&hl=en",
    ios: "https://apps.apple.com/in/app/ngi-health-app/id6752468976",
    // tags: ["MOBILE APP", "REACT NATIVE"],
  },
  {
    title: "WakeMate Connect",
    category: "Mobile",
    image: "/images/projects/Wakemate connect.jpg",
    // android: "",
    ios: "https://apps.apple.com/gb/app/wakemate-connect/id6504682990",
    // tags: ["MOBILE APP", "REACT NATIVE"],
  },
  {
    title: "Karteco: Circulating Goodness",
    category: "Mobile",
    image: "/images/projects/Karteco.jpg",
    android: "https://play.google.com/store/apps/details?id=com.karteco",
    ios: "https://apps.apple.com/us/app/karteco-circulating-goodness/id6754075415",
    // tags: ["MOBILE APP", "REACT NATIVE"],
  },
  {
    title: "Digits App",
    category: "Mobile",
    image: "/images/projects/Digits.jpg",
    // android: "#",
    ios: "https://apps.apple.com/in/app/digits-app/id6751881395",
    // tags: ["MOBILE APP", "REACT NATIVE"],
  },
  {
    title: "Status Noww",
    category: "Mobile",
    image: "/images/projects/Status noww.jpg",
    android: "https://play.google.com/store/apps/details?id=com.statusnow&hl=en",
    ios: "#",
    // tags: ["MOBILE APP", "REACT NATIVE"],
  },
  {
    title: "Black Out 365",
    category: "Mobile",
    image: "/images/projects/Blackout365.jpg",
    // android: "#",
    ios: "https://apps.apple.com/us/app/blackout365/id1575383474",
    // tags: ["MOBILE APP", "REACT NATIVE"],
  },
  {
    title: "Doctors Plaza",
    category: "Web",
    image: "/images/portfolio/doc1.png",
    web: "https://www.doctorsplaza.in/",
    // tags: ["WEB DEV", "REACT + NODE"],
  },
  {
    title: "Futurepedia",
    category: "Web",
    image: "/images/portfolio/futur.png",
    web: "https://www.futurepedia.io/",
    // tags: ["WEB DEV", "REACT + NODE"],
  },
  {
    title: "Swag",
    category: "Web",
    image: "/images/portfolio/swg.png",
    web: "https://swag.com/",
    // tags: ["WEB DEV", "REACT + NODE"],
  },
  {
    title: "BMB ADMIN",
    category: "Web",
    image: "/images/portfolio/bmb.png",
    web: "https://bmb-admin.vercel.app/",
    // tags: ["WEB DEV", "REACT + NODE"],
  },
  {
    title: "WheneverHome",
    category: "Web",
    image: "/images/portfolio/wh.png",
    web: "https://www.wheneverhome.com/",
    // tags: ["WEB DEV", "REACT + NODE"],
  },
  {
    title: "Bunawat Fashion Store",
    category: "Web",
    image: "/images/portfolio/Bunawat.png",
    web: "https://bunawat-website.vercel.app/",
    // tags: ["WEB DEV", "REACT + NODE"],
  },
  {
    title: "The Healthy Start",
    category: "Web",
    image: "/images/portfolio/health.png",
    web: "https://www.thehealthystart.com",
    // tags: ["WEB DEV", "REACT + NODE"],
  },
  {
    title: "School of Motion",
    category: "Web",
    image: "/images/portfolio/9.png",
    web: "https://www.schoolofmotion.com",
    // tags: ["WEB DEV", "REACT + NODE"],
  },
  {
    title: "Mulberri",
    category: "Web",
    image: "/images/portfolio/mul.png",
    web: "https://www.mulberri.io/",
    // tags: ["WEB DEV", "REACT + NODE"],
  },
  {
    title: "Projects Force",
    category: "Web",
    image: "/images/portfolio/proje.png",
    web: "https://www.projectsforce.com/",
    // tags: ["WEB DEV", "REACT + NODE"],
  },
  {
    title: "Makan",
    category: "Web",
    image: "/images/portfolio/makan1.png",
    web: "https://www.usemakan.com/",
    // tags: ["WEB DEV", "REACT + NODE"],
  },
  {
    title: "A Real Home Away",
    category: "Web",
    image: "/images/portfolio/arh.png",
    web: "https://www.arealhomeaway.com/",
    // tags: ["WEB DEV", "REACT + NODE"],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

 return (
  <section className={styles.projects}>
    {/* FILTER BUTTONS */}
    <div className={styles.topRow}>
    <div className={styles.filters}>
      {["All", "Web", "Mobile", "Python"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={filter === f ? styles.active : ""}
        >
          {f}
        </button>
      ))}
    </div>

    <div className={styles.socialLinks}>
    <a href="https://twitter.com" target="_blank">
      <FaTwitter /> Twitter / X
    </a>

    <a href="https://www.upwork.com/freelancers/~01817e3c2339de8bbf" target="_blank">
      <FaBriefcase /> Upwork
    </a>
  </div>
    </div>

    {/* GRID */}
    <div className={styles.grid}>
      {filtered.map((p, i) => (
        <div key={i} className={styles.card}>
          
          {/* ✅ IMAGE BOX (ONLY CARD AREA) */}
          <div className={styles.imageBox}>
            <img src={p.image} alt={p.title} />

            {/* TAGS ON IMAGE */}
            {Array.isArray(p.tags) && p.tags.length > 0 && (
            <div className={styles.tags}>
              {p.tags.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>
            )}
          </div>

          {/* ✅ TEXT OUTSIDE CARD */}
          <div className={styles.content}>
            {/* <span className={styles.category}>
              {p.category === "Mobile"
                ? "MOBILE APP"
                : "WEB"}
            </span> */}

            <h3>{p.title}</h3>

            {/* ACTION BUTTONS */}
            <div className={styles.actions}>
              {p.android && (
                <a href={p.android} target="_blank" className={styles.btn}>
                  Android
                </a>
              )}
              {p.ios && (
                <a href={p.ios} target="_blank" className={styles.btn}>
                  iOS
                </a>
              )}
              {p.web && (
                <a href={p.web} target="_blank" className={styles.btn}>
                  Visit
                </a>
              )}
            </div>
          </div>

        </div>
      ))}
    </div>
  </section>
);
}