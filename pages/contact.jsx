import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
import withWebLayout from "../component/layout/web/withWebLayout";
import styles from "./styles/Contact.module.css";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid").required("Required"),
      phone: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (data.success) {
          alert("Message sent 🚀");
          resetForm();
        }
      } catch (err) {
        alert("Error sending message ❌");
      }
    },
  });

  return (
    <>
    <Navbar />
      <Head>
        <title>Contact - Codetown</title>
      </Head>

      <div className={styles.cfWrapper}>

        <Container>
          <Row className="align-items-center">

            {/* LEFT CONTENT */}
            <Col lg={6}>
              <div className={styles.cfLeft}>

                <span className={styles.cfTag}>CONNECTIVITY ENGINE</span>

                <h1 className={styles.cfTitle}>
            Let’s Architect Your <br />
            <span>Digital Future</span>
          </h1>

                <p className={styles.cfDesc}>
            Bridge the gap between vision and execution...
          </p>

                {/* FORM */}
                <div className={styles.cfFormBox}>

                  <Form onSubmit={formik.handleSubmit}>

                    <div className={styles.cfRow}>
                      <input
                        type="text"
                        name="full_name"
                        placeholder="Full Name"
                        onChange={formik.handleChange}
                        value={formik.values.full_name}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>

                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />

                    <select
                      name="service"
                      onChange={formik.handleChange}
                      value={formik.values.service}
                    >
                      <option>Python/AI Backend</option>
                      <option>Mobile App</option>
                      <option>Web Development</option>
                      <option>UI/UX Design</option>
                      <option>Digital Marketing</option>
                    </select>

                    <textarea
                      name="message"
                      placeholder="Project Details"
                      rows="4"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                    />

                    <button type="submit" className={styles.cfBtn}>
                      Transmit Requirements →
                    </button>

                  </Form>
                </div>

              </div>
            </Col>

            {/* RIGHT CONTENT */}
            <Col lg={6}>
              <div className={styles.cfRight}>

                <div className={styles.cfCard}>
                  <h6>HQ HEADQUARTERS</h6>
                  <p>Basement of HDFC Bank, Nakoda Complex, Rajlaxmi Building, Main Rd, near Hansa Palace Road, Sector 4, Hiran Magri <br /> Udaipur, Rajasthan 313002</p>
                </div>

                <div className={styles.cfCard}>
                  <h6>DIRECT COMMUNICATION</h6>
                  <p>hr@codeTownTechnologies.com</p>
                </div>

                <div className={styles.cfCard}>
                  <h6>NETWORK UPLINK</h6>
                  <p>+91 7627037613</p>
                </div>

                <div className={styles.cfMap}>
                  <img src="/images/contact/map.png" alt="map" />
                </div>

              </div>
            </Col>

          </Row>
        </Container>

        {/* BOTTOM BAR */}
        <div className={styles.cfBottom}>
          <Container className="d-flex justify-content-between align-items-center">
            <p>Our Support Desk operates 24/7 global rotation for enterprise partners</p>

            <div>
              <button className={styles.cfSupport}>Support Portal</button>
        <button className={styles.cfDocs}>Documentation</button>
            </div>
          </Container>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Contact;