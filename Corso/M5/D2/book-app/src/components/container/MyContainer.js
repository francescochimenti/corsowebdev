import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MyBook from '../book/MyBook'

export class MyContainer extends Component {
  render() {
      const book = this.props.scifi.slice(0,12)
      return (
        <Container>
            <h1 className='d-flex justify-content-center display-1 text-danger fw-bold'>EpiBooks</h1>
            <Row>
              {book.map((book) => (
                <Col key={book.asin} sm={12} md={4} xl={3}  className='d-flex justify-content-center mt-5'>
                    <MyBook book={book}/>
                </Col>
              ))}
            </Row>
        </Container>
    )
  }
}

export default MyContainer
