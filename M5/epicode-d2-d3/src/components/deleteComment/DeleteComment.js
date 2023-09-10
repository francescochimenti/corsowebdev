import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const DeleteComment = ({ TOKEN, URL, commentId, getComment }) => {
  const handleDelete = async (commentId) => {
    try {
      const response = await axios.delete(URL + commentId, {
        headers: {
          Authorization: TOKEN,
        },
      });

      if (response.status === 200) {
        alert("Commento eliminato con successo!");
        getComment();
      } else {
        alert("Errore durante l'eliminazione del commento.");
      }
    } catch (error) {
      console.log("Errore durante l'eliminazione del commento:", error);
    }
  };
  return (
    <Button
      onClick={() => handleDelete(commentId)}
      variant="danger"
      className="btn mt-3"
    >
      Elimina
    </Button>
  );
};

export default DeleteComment;
