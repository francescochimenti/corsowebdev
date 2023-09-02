import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';


export class MyBook extends Component {
  render() {
    const book = this.props.book
    return (
        <Card style={{ width: '18rem' }} className='shadow'>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text> {book.category} </Card.Text>
          <Card.Text> {book.price} </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default MyBook