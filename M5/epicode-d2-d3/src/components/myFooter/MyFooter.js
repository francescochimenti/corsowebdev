import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { nanoid } from "nanoid";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; 
import "./myFooter.css";

const MyFooter = ({ link }) => {
  return (
    <footer className="footer-professional mt-5">
      <Container>
        <Row className="py-5">
          <Col md={4}>
            <h5 className="fw-bold text-uppercase">epibooks</h5>
            <p>Leading in the book industry with over 20 years of experience. Committed to promoting knowledge and learning.</p>
            <div className="social-icons">
              <FaFacebookF className="mr-2" />
              <FaTwitter className="mr-2" />
              <FaInstagram className="mr-2" />
              <FaLinkedinIn />
            </div>
          </Col>
          <Col md={2}>
            <h6 className="text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              {link.map((el) => (
                <li key={nanoid()}><a href={el.href} className="footer-link">{el.name}</a></li>
              ))}
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="text-uppercase">Contact</h6>
            <p><FaEnvelope className="icon-spacing" /> example@example.com</p>
            <p><FaPhoneAlt className="icon-spacing" /> +123 456 7890</p>
          </Col>
          <Col md={3}>
            <h6 className="text-uppercase">Legal</h6>
            <ul className="list-unstyled">
              <li><a href="index.html" className="footer-link">Terms & Conditions</a></li>
              <li><a href="index.html" className="footer-link">Privacy Policy</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="border-top pt-4">
          <Col className="text-center py-3">
            &copy; 2023 epibooks. All Rights Reserved. P.IVA: 12345678901
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
