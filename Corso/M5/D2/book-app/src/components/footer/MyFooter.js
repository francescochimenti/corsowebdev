import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class MyFooter extends Component {
  render() {
    const myFooterLink = this.props.myFooterLink
    return (
        <Container>
        <Row className="justify-content-center py-4">
          <Col md={4} className="text-center">
            <h5>Company Name</h5>
            <p>Some additional info about the company.</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {myFooterLink.map((link) =>
              <li key={link.id}><a href={link.href}>{link.name}</a></li>
              )}
            </ul>
          </Col>
          <Col md={4} className="text-center">
            <h5>Contact Us</h5>
            <p>Email: example@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center py-3">
            &copy; 2023 All Rights Reserved.
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MyFooter