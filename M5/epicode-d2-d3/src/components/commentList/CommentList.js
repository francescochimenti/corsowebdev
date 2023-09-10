import React from "react";
import DeleteComment from "../deleteComment/DeleteComment";
import { nanoid } from "nanoid";

const CommentList = ({ comments, URL, TOKEN, getComment }) => {
  return (
    <div className="max-div-comment" key={nanoid()}>
      {comments.filter((comment) => comment !== null).length > 0 ? (
        comments
          .filter((comment) => comment !== null)
          .map((comment) => (
            <div key={comment.elementId} className="mb-3">
              <div className="card-body">
                <h5>Recensioni:</h5>
                <p className="card-text fw-bold">
                  <span className="text-danger">
                    Commento:
                  </span>
                  <span className="text-dark">{comment.comment}</span>
                </p>
                <span className="card-text fw-bold">
                  <span>Valutazione:</span>
                  {Array.from({ length: comment.rate }).map(() => (
                    <span className="text-warning">&#9733;</span>
                  ))}
                </span>
                <div>
                  {/* <p className="text-muted fw-bold">
                    Creato da: {comment.author}
                  </p> */}
                </div>
                <DeleteComment
                  commentId={comment._id}
                  TOKEN={TOKEN}
                  URL={URL}
                  getComment={getComment}
                />
              </div>
            </div>
          ))
      ) : (
        <div className="alert alert-warning" role="alert">
          Nessun commento disponibile
        </div>
      )}
    </div>
  );
};

export default CommentList;
