import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Card, Col, Container, Image, Nav, Row } from 'react-bootstrap';

const Footer = () => {
  const router = useRouter();
  return (
    <Card className='footer-card'>
      <Container>
          {/* <Link href="https://www.linkedin.com/company/code-town-technologies/mycompany/?viewAsMember=true" target='_blank' passHref>
            <Nav.Link>
              <img src='/images/footer/1.png' alt='linkedin' />
            </Nav.Link>
          </Link> */}
          {/* <Link href="#" passHref>
            <Nav.Link><img src='/images/footer/2.png' alt='linkedin' /></Nav.Link>
          </Link>
          <Link href="#" passHref>
            <Nav.Link><img src='/images/footer/3.png' alt='linkedin' /></Nav.Link>
          </Link> */}
      

       <Row className="align-items-center mb-4">
  {/* Left Side Links */}
  <Col
    lg={10}
    md={9}
    sm={8}
    xs={8}
    className="d-flex align-items-center"
  >
    <Link href="/about" passHref>
      <Nav.Link
        className={
          router.pathname == "/about"
            ? "footer-nav-link-active"
            : "footer-nav-link"
        }
      >
        About
      </Nav.Link>
    </Link>

    <Link href="/services" passHref>
      <Nav.Link
        className={
          router.pathname == "/services"
            ? "footer-nav-link-active"
            : "footer-nav-link"
        }
      >
        Services
      </Nav.Link>
    </Link>

    <Link href="/portfolio" passHref>
      <Nav.Link
        className={
          router.pathname == "/portfolio"
            ? "footer-nav-link-active"
            : "footer-nav-link"
        }
      >
        Portfolios
      </Nav.Link>
    </Link>
  </Col>

  {/* Right Side LinkedIn */}
  <Col
    lg={2}
    md={3}
    sm={4}
    xs={4}
    className="text-end"
  >
    <a
      href="https://www.linkedin.com/company/code-town-technologies/mycompany/?viewAsMember=true"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="/images/footer/1.png"
        alt="linkedin"
        className="footer-linkedin"
      />
    </a>
  </Col>
</Row>
        <div className="mt-5 pb-2">
          <Row>
            <Col className='responsive' lg={2} md={5} sm={12} xs={12}>
              <Image src='/images/Logo.png' width={140} alt='logo' />
            </Col>
            <Col className='responsive' lg={5} md={5} sm={12} xs={12}>
              <span className='footer-span'>2022-2023 ©codetowntechnologies - All Rights Reserved</span>
            </Col>
            <Col className='responsive' lg={5} md={5} sm={12} xs={12}>
              <div className='footer-detail'>
                {/* <span className='footer-contacts-1'><Image src='/images/footer/mobile.png' /> +91 76270 37613</span> */}
                <span className='footer-contacts'><Image src='/images/footer/email.png' /> hr@codeTownTechnologies.com</span>
              </div>
            </Col>
          </Row>
        </div>
        {/* <Nav className="ml-auto mt-4">
          <Nav.Item className='footer-codetown'>
            <span>2020-2022 ©codetowntechnologies - All Rights Reserved</span>
          </Nav.Item>
          <Nav.Item className='footer-codetown'>
            <span>2020-2022 ©codetowntechnologies - All Rights Reserved</span>
          </Nav.Item>
        </Nav> */}
      </Container>
    </Card>
  );
};

export default Footer;