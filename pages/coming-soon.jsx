import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function ComingSoonPage() {
  const router = useRouter();
  const title =
    typeof router.query.title === "string" && router.query.title.trim()
      ? router.query.title
      : "This Project";

  return (
    <>
      <Head>
        <title>Coming Soon - Codetown</title>
      </Head>

      <div className="coming-page">
        <Navbar />

        <main className="coming-main">
          <section className="coming-hero">
            <div className="glow glow-one" />
            <div className="glow glow-two" />

            <div className="label">PROJECT PREVIEW</div>
            <h1>
              {title} is <span>Coming Soon</span>
            </h1>
            <p className="lead">
              We are shaping the next version of this product with premium UI,
              powerful features, and a polished experience. The launch is being
              prepared right now.
            </p>

            <div className="action-row">
              <Link href="/contact" className="primary-btn">
                Talk To Us
              </Link>
              <Link href="/OurProducts" className="secondary-btn">
                Back To Products
              </Link>
            </div>
          </section>

          <section className="coming-grid">
            <article className="info-card">
              <span>01</span>
              <h3>Design in Progress</h3>
              <p>
                We are refining the user flow, layout, and visual details to
                make it feel premium.
              </p>
            </article>

            <article className="info-card">
              <span>02</span>
              <h3>Smart Features</h3>
              <p>
                The final build will include clean interactions, scalable
                architecture, and modern functionality.
              </p>
            </article>

            <article className="info-card">
              <span>03</span>
              <h3>Launching Soon</h3>
              <p>
                Stay tuned. This project is being prepared for a future public
                release.
              </p>
            </article>
          </section>
        </main>

        <Footer />
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #050816;
          color: #fff;
          font-family: Arial, sans-serif;
        }

        .coming-page {
          background:
            radial-gradient(circle at top left, rgba(14, 165, 233, 0.18), transparent 35%),
            radial-gradient(circle at top right, rgba(37, 99, 235, 0.18), transparent 32%),
            #050816;
          min-height: 100vh;
        }

        .coming-main {
          width: 100%;
        }

        .coming-hero {
          position: relative;
          overflow: hidden;
          padding: 130px 20px 90px;
          text-align: center;
          max-width: 1100px;
          margin: 0 auto;
        }

        .glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(18px);
          opacity: 0.75;
          pointer-events: none;
        }

        .glow-one {
          width: 260px;
          height: 260px;
          background: rgba(14, 165, 233, 0.22);
          top: 40px;
          left: -40px;
        }

        .glow-two {
          width: 320px;
          height: 320px;
          background: rgba(37, 99, 235, 0.22);
          bottom: -80px;
          right: -50px;
        }

        .label {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 999px;
          border: 1px solid rgba(125, 211, 252, 0.35);
          color: #7dd3fc;
          letter-spacing: 3px;
          font-size: 12px;
          margin-bottom: 22px;
          background: rgba(255, 255, 255, 0.03);
        }

        .coming-hero h1 {
          font-size: clamp(44px, 8vw, 84px);
          line-height: 1.05;
          margin: 0 auto 22px;
          max-width: 900px;
          font-weight: 800;
        }

        .coming-hero h1 span {
          color: #38bdf8;
        }

        .lead {
          max-width: 780px;
          margin: 0 auto;
          color: #cbd5e1;
          font-size: 18px;
          line-height: 1.8;
        }

        .action-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .primary-btn,
        .secondary-btn {
          padding: 14px 26px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: inline-block;
        }

        .primary-btn {
          color: #fff;
          background: linear-gradient(135deg, #0ea5e9, #2563eb);
          box-shadow: 0 16px 40px rgba(37, 99, 235, 0.3);
        }

        .secondary-btn {
          color: #fff;
          border: 1px solid rgba(125, 211, 252, 0.35);
          background: rgba(255, 255, 255, 0.03);
        }

        .primary-btn:hover,
        .secondary-btn:hover {
          transform: translateY(-3px);
        }

        .coming-grid {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px 100px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 22px;
        }

        .info-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 28px;
          backdrop-filter: blur(12px);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.16);
        }

        .info-card span {
          display: inline-block;
          color: #7dd3fc;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        .info-card h3 {
          margin: 0 0 12px;
          font-size: 24px;
        }

        .info-card p {
          margin: 0;
          color: #cbd5e1;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .coming-hero {
            padding-top: 110px;
            padding-bottom: 70px;
          }

          .lead {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
