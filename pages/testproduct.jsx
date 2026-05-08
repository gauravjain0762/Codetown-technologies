import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function OurProductsPage() {
  const products = [
    {
      title: "Hospital Management System",
      category: "Healthcare SaaS",
      description:
        "Complete platform for doctors, patients, appointments, prescriptions, and consultations.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="products-page">
      <Navbar />

      <section className="hero-section">
        <div className="overlay" />

        <div className="hero-content">
          <p className="small-heading">INNOVATIVE DIGITAL SOLUTIONS</p>

          <h1>
            Building Premium <span>Software Products</span> For Modern
            Businesses
          </h1>

          <p className="hero-text">
            We design and develop scalable web platforms, AI products, mobile
            applications, and enterprise solutions for startups and businesses.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="primary-btn">
              Explore Products
            </a>
            <Link href="/contact" className="secondary-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <h2>25+</h2>
          <p>Projects Delivered</p>
        </div>

        <div className="stat-card">
          <h2>12+</h2>
          <p>Industries Served</p>
        </div>

        <div className="stat-card">
          <h2>99%</h2>
          <p>Client Satisfaction</p>
        </div>
      </section>

      <section className="products-section" id="products">
        <div className="section-heading">
          <p>OUR PRODUCTS</p>
          <h2>Technology Solutions Crafted By Experts</h2>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="image-wrapper">
                <img src={product.image} alt={product.title} />
              </div>

              <div className="card-content">
                <span>{product.category}</span>
                <h3>{product.title}</h3>
                <p>{product.description}</p>

                <Link
                  href={`/coming-soon?title=${encodeURIComponent(product.title)}`}
                  className="project-btn"
                >
                  Explore Product →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-section">
        <div className="why-left">
          <p className="small-heading">WHY CHOOSE US</p>
          <h2>We Create Products That Feel Premium</h2>

          <p>
            Our company focuses on clean UI/UX, scalable architecture, modern
            technologies, and AI-powered experiences to build products that
            help businesses grow faster.
          </p>
        </div>

        <div className="why-right">
          <div className="feature-box">
            <h3>Modern UI Design</h3>
            <p>Premium interfaces designed for better user engagement.</p>
          </div>

          <div className="feature-box">
            <h3>AI Integration</h3>
            <p>Smart AI-powered features for automation and productivity.</p>
          </div>

          <div className="feature-box">
            <h3>Fast Performance</h3>
            <p>Optimized frontend and backend for smooth experiences.</p>
          </div>

          <div className="feature-box">
            <h3>Scalable Architecture</h3>
            <p>Built for startups and enterprises with future scalability.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Have An Idea? Let&apos;s Build Something Amazing Together.</h2>
        <Link href="/contact" className="primary-btn">
          Start Your Project
        </Link>
      </section>

      <Footer />

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #050816;
        }

        .products-page {
          background: #050816;
          color: white;
          overflow-x: hidden;
        }

        .hero-section {
          position: relative;
          height: 100vh;
          background-image: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }

        .small-heading {
          color: #7dd3fc;
          letter-spacing: 2px;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .hero-content h1 {
          font-size: 70px;
          line-height: 1.1;
          margin-bottom: 25px;
          font-weight: 800;
        }

        .hero-content h1 span {
          color: #38bdf8;
        }

        .hero-text {
          font-size: 18px;
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 35px;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .primary-btn,
        .secondary-btn,
        .project-btn {
          padding: 14px 30px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          font-size: 15px;
          transition: 0.3s ease;
          font-weight: bold;
          display: inline-block;
          text-decoration: none;
          text-align: center;
        }

        .primary-btn,
        .project-btn {
          background: linear-gradient(135deg, #0ea5e9, #2563eb);
          color: white;
        }

        .primary-btn:hover {
        border-color: #22d3ee;
      }

        .secondary-btn {
          background: transparent;
          border: 1px solid #38bdf8;
          color: white;
        }

        .primary-btn:hover,
        .secondary-btn:hover,
        .project-btn:hover {
          transform: translateY(-3px);
        }

        .secondary-btn:hover {
color: #ffffff;
  transform: translateY(-2px) scale(1.03);
}

        .stats-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
          padding: 80px 10%;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 40px;
          border-radius: 24px;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .stat-card h2 {
          font-size: 50px;
          color: #38bdf8;
          margin-bottom: 10px;
        }

        .stat-card p {
          color: #cbd5e1;
        }

        .products-section {
          padding: 100px 10%;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-heading p {
          color: #38bdf8;
          margin-bottom: 15px;
          letter-spacing: 2px;
        }

        .section-heading h2 {
          font-size: 50px;
          max-width: 800px;
          margin: auto;
        }

        .products-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 30px;
        }

        .product-card {
          width: 380px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: 0.4s ease;
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0px 20px 60px rgba(14, 165, 233, 0.2);
        }

        .image-wrapper {
          height: 250px;
          overflow: hidden;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.4s ease;
        }

        .product-card:hover img {
          transform: scale(1.08);
        }

        .card-content {
          padding: 30px;
        }

        .card-content span {
          color: #38bdf8;
          font-size: 14px;
        }

        .card-content h3 {
          font-size: 28px;
          margin: 15px 0;
        }

        .card-content p {
          color: #cbd5e1;
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .project-btn {
          width: 100%;
        }

        .why-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          padding: 100px 10%;
          align-items: center;
        }

        .why-left h2 {
          font-size: 50px;
          margin-bottom: 25px;
        }

        .why-left p {
          color: #cbd5e1;
          line-height: 1.8;
        }

        .why-right {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .feature-box {
          background: rgba(255, 255, 255, 0.04);
          border-radius: 22px;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .feature-box h3 {
          margin-bottom: 15px;
          color: white;
        }

        .feature-box p {
          color: #cbd5e1;
          line-height: 1.7;
        }

        .cta-section {
          padding: 120px 10%;
          text-align: center;
          background: linear-gradient(135deg, #0f172a, #111827);
        }

        .cta-section h2 {
          font-size: 55px;
          max-width: 900px;
          margin: auto;
          margin-bottom: 40px;
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 42px;
          }

          .section-heading h2,
          .why-left h2,
          .cta-section h2 {
            font-size: 34px;
          }

          .hero-text {
            font-size: 16px;
          }

          .stats-section,
          .products-section,
          .why-section,
          .cta-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .project-btn {
            width: auto;
          }
        }
      `}</style>
    </div>
  );
}
