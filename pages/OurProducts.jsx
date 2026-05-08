import Link from "next/link";
import Navbar from "../component/Navbar";

export default function OurProductsPage() {
  return (
    <div className="products-page">
      <Navbar />

      <main className="coming-wrap">
        <section className="coming-card">
          <p className="eyebrow">OUR PRODUCTS</p>
          <h1>Products Coming Soon</h1>
          <p className="description">
            We are working on a collection of modern digital products and
            software solutions. This page will be updated soon with live
            product details, features, and previews.
          </p>

          <div className="actions">
            <Link href="/contact" className="primary-btn">
              Contact Us
            </Link>
            <Link href="/" className="secondary-btn">
              Back to Home
            </Link>
          </div>
        </section>
      </main>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background:
            radial-gradient(circle at top, rgba(34, 211, 238, 0.18), transparent 30%),
            linear-gradient(180deg, #050816 0%, #07111f 100%);
          color: #fff;
        }

        .products-page {
          min-height: 100vh;
          background: transparent;
        }

        .coming-wrap {
          min-height: calc(100vh - 90px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px 60px;
        }

        .coming-card {
          width: 100%;
          max-width: 760px;
          text-align: center;
          padding: 54px 28px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.22);
        }

        .eyebrow {
          margin: 0 0 18px;
          color: #7dd3fc;
          letter-spacing: 3px;
          font-size: 12px;
          font-weight: 700;
        }

        .coming-card h1 {
          margin: 0;
          font-size: clamp(40px, 7vw, 72px);
          line-height: 1.05;
          font-weight: 800;
        }

        .description {
          max-width: 600px;
          margin: 20px auto 0;
          color: #cbd5e1;
          font-size: 17px;
          line-height: 1.8;
        }

        .actions {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 32px;
        }

        .primary-btn,
        .secondary-btn {
          display: inline-block;
          padding: 14px 26px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.25s ease, background 0.25s ease,
            border-color 0.25s ease;
        }

        .primary-btn {
          background: linear-gradient(135deg, #0ea5e9, #2563eb);
          color: #fff;
        }

        .secondary-btn {
          background: transparent;
          color: #fff;
          border: 1px solid rgba(125, 211, 252, 0.35);
        }

        .primary-btn:hover,
        .secondary-btn:hover {
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .coming-wrap {
            padding-top: 110px;
          }

          .coming-card {
            padding: 40px 22px;
          }

          .description {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
