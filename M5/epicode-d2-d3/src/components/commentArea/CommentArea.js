import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import AddComment from "../addComment/AddComment";
import CommentList from "../commentList/CommentList";
import { BarLoader } from "react-spinners";

const CommentArea = ({ book, setBord, selected }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const id = book.asin;

  const URL = "https://striveschool-api.herokuapp.com/api/comments/";
  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZiOTgyYzMyYWYyNzAwMTQ5ODYxMTQiLCJpYXQiOjE2OTQyMTAwOTIsImV4cCI6MTY5NTQxOTY5Mn0.FiyvuJpyWQ2fPmBNRuOZwJW73vb7Pa3PASf3iDOiiVo";

  const getComment = async () => {
    try {
      const response = await axios.get(URL + id, {
        headers: {
          Authorization: TOKEN,
        },
      });
      setComments([response.data]);
    } catch (error) {
      console.log("Errore nel recupero dei commenti:", error);
    }
  };

  useEffect(() => {
    getComment();
    let timeoutId;
    timeoutId = setTimeout(() => {
      setLoading(false);
    }, 750);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!loading && book) {
    return (
      <>
        <Card
          className={`${selected ? "border-primary" : ""} mb-3 `}
          style={{ width: "18rem" }}
        >
          <Card.Header>
            <button
              onClick={setBord}
              className="btn btn-sm btn-danger float-end"
            >
              <span className="text-white fw-bold">CLOSE</span>
            </button>
          </Card.Header>
          <AddComment
            book={book}
            id={id}
            TOKEN={TOKEN}
            URL={URL}
            getComment={getComment}
            setBord={setBord}
          />
          <Card.Footer>
            <CommentList
              comments={comments}
              TOKEN={TOKEN}
              URL={URL}
              getComment={getComment}
            />
          </Card.Footer>
        </Card>
      </>
    );
  } else {
    return (
      <>
        <Card
          className={`${selected ? "border-primary" : ""} mb-3 `}
          style={{ width: "18rem" }}
        >
          <Card.Header>
            <button
              onClick={setBord}
              className="btn btn-sm btn-danger float-end"
            >
              CLOSE
            </button>
          </Card.Header>
          <div className="d-flex justify-content-center align-items-center p-5">

          <BarLoader color="red" />
          </div>
        </Card>
      </>
    );
  }
};

export default CommentArea;
