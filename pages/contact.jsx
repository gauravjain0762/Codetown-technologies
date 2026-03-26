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
  full_name: Yup.string()
    .min(3, "Too short")
    .required("Full name is required"),

  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers allowed")
    .min(10, "Must be at least 10 digits")
    .max(15, "Too long")
    .required("Phone number is required"),

  service: Yup.string()
    .required("Please select a service"),

  message: Yup.string()
    .min(10, "Too short")
    .required("Message is required"),
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

                    {/* FULL NAME + EMAIL */}
                    <div className={styles.cfRow}>
                      <div>
                        <input
                          type="text"
                          name="full_name"
                          placeholder="Full Name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.full_name}
                        />
                        {/* ERROR */}
                        {formik.touched.full_name && formik.errors.full_name && (
                          <p className={styles.error}>{formik.errors.full_name}</p>
                        )}
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                        {/* ERROR */}
                        {formik.touched.email && formik.errors.email && (
                          <p className={styles.error}>{formik.errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* PHONE */}
                    <div>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formik.values.phone}
                        onBlur={formik.handleBlur}
                        onChange={(e) => {
                          // ✅ allow only numbers
                          const value = e.target.value.replace(/\D/g, "");
                          formik.setFieldValue("phone", value);
                        }}
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <p className={styles.error}>{formik.errors.phone}</p>
                      )}
                    </div>

                    {/* SERVICE */}
                    <div>
                      <select
                        name="service"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.service}
                      >
                        <option value="">Select Service</option>
                        <option value="Python/AI Backend">Python/AI Backend</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Web Development">Web Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                      </select>

                      {formik.touched.service && formik.errors.service && (
                        <p className={styles.error}>{formik.errors.service}</p>
                      )}
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <textarea
                        name="message"
                        placeholder="Project Details"
                        rows="4"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                      />
                      {formik.touched.message && formik.errors.message && (
                        <p className={styles.error}>{formik.errors.message}</p>
                      )}
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      className={styles.cfBtn}
                      disabled={!formik.isValid || formik.isSubmitting} // ✅ disable until valid
                    >
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
                  <h6>Office</h6>
                  <p>Basement of HDFC Bank, Nakoda Complex, Rajlaxmi Building, Main Rd, near Hansa Palace Road, Sector 4, Hiran Magri <br /> Udaipur, Rajasthan 313002</p>
                </div>

                <div className={styles.cfCard}>
                  <h6>DIRECT COMMUNICATION</h6>
                  <p>hr@codeTownTechnologies.com</p>
                </div>

                <div className={styles.cfCard}>
                  <h6>Mobile Number</h6>
                  <p>+91 7627037613</p>
                </div>

                <div className={styles.cfMap}>
  <iframe
    src="https://www.google.com/maps?q=Basement+of+HDFC+Bank,+Nakoda+Complex,+Rajlaxmi+Building,+Main+Rd,+near+Hansa+Palace+Road,+Sector+4,+Hiran+Magri,+Udaipur,+Rajasthan+313002&output=embed"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

              </div>
            </Col>

          </Row>
        </Container>

        {/* BOTTOM BAR */}
        <div className={styles.cfBottom}>
          <Container className="text-center">
            <p>Your next breakthrough starts with the right technology partner.
Let’s collaborate to create solutions that are fast, scalable, and future-ready.</p>

            {/* <div>
              <button className={styles.cfSupport}>Support Portal</button>
        <button className={styles.cfDocs}>Documentation</button>
            </div> */}
          </Container>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Contact;