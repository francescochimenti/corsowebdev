import React, { useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

export default function AddComment({
  book,
  id,
  TOKEN,
  URL,
  getComment,
}) {
  const [rate, setRate] = useState("");
  const [review, setReview] = useState("");
  const sendComment = async () => {
    try {
      const response = await axios.post(
        URL,
        {
          comment: review,
          rate: rate,
          elementId: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: TOKEN,
          },
        }
      );

      if (response.status === 200) {
        getComment();
        setReview("");
        setRate("");
        alert("Commento inviato con successo!");
      } else {
        alert("Errore nel recupero dei commenti");
      }
    } catch (error) {
      console.log("Errore nell'invio del commento:", error);
    }
  };
  return (
    <>
      <Card.Body className="fw-bold d-flex align-items-center flex-column">
        <div className="d-flex justify-content-between">
        <Card.Title className="text-uppercase m-0 p-0">{book.title}</Card.Title>
        <Card.Img
          className="rounded-3"
          style={{ width: "50px", height: "50px" }}
            variant="top"
        src={book.img}
        
        />
        </div>
        <input
          className="form-control mt-4"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Inserisci il tuo commento qui"
        />
        <input
          className="form-control mt-3"
          type="number"
          min="1"
          max="5"
          value={rate}
          onChange={(e) => setRate(e.target.value.toString())}
          placeholder="Inserisci il tuo voto da 1 a 5 qui"
        />
        <button
          className="btn btn-info m-4 "
          onClick={() => {
            if (rate >= 1 && rate <= 5 && review !== "") {
              sendComment();
            } else if (review === "") {
              alert("Per favore, inserisci un commento.");
            }
            else {
              alert("Per favore, inserisci un voto tra 1 e 5.");
            }
          }}
        >
          Invia
        </button>
      </Card.Body>
    </>
  );
}
