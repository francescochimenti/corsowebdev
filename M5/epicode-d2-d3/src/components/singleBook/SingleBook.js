import React, {useState} from "react";
import { Card } from "react-bootstrap";
import "./singleBook.css"
import CommentArea from "../commentArea/CommentArea";

export default function SingleBook({book}) {
  const [selected,setSelected] = useState(false)

  const setBord = () => {
    if (selected) {
      setSelected(false)
    } else {
      setSelected(true)
    }
  }

  if(!selected)
  return (
    <Card className={`${selected ? "myBorder" : ""} mb-3`} style={{ width: "18rem" }} onClick={setBord}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body className="fw-bold">
        <Card.Title className="text-uppercase">{book.title}</Card.Title>
        <Card.Text>{"Category: " + book.category}</Card.Text>
        <Card.Text className="text-danger text-uppercase">{"Price: " + book.price + " $"}</Card.Text>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );

  else{
    return <CommentArea book={book} setBord={setBord} selected={selected}/>
  }
}
