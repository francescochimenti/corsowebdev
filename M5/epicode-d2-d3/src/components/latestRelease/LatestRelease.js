import React, { useState, useEffect, useRef } from "react";
import { Row, Container, Col } from "react-bootstrap";
import SingleBook from "../singleBook/SingleBook";
import "./latestRelease.css";
import { nanoid } from "nanoid";
import { BeatLoader } from "react-spinners";

export default function LatestRelease({ book }) {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [select, setSelect] = useState("Fantasy");
  const [loading, setLoading] = useState(true);
  const [visibleBooks, setVisibleBooks] = useState([]);
  const [numDisplayed, setNumDisplayed] = useState(12);
  const ref = useRef(null);

  const handleScroll = () => {
    if (!ref || !ref.current) {
      return;
    }

    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    setVisibleBooks(result.slice(0, numDisplayed));
  }, [result, numDisplayed]);

  useEffect(() => {
    let timeoutId;
    let filteredBooks = [...book];
    if (search !== "") {
      setLoading(true);
      filteredBooks = filteredBooks.filter((el) =>
        el.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (select !== "All") {
      filteredBooks = filteredBooks.filter(
        (el) => el.category.toLowerCase() === select.toLowerCase()
      );
    }

    if ((prevSelect) => prevSelect !== select) {
      setLoading(true);
    }

    timeoutId = setTimeout(() => {
      setResult(filteredBooks);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search, book, select]);

  if (!loading) {
    return (
      <Container>
        <h1
          ref={ref}
          className="text-center p-5 fw-bold text-uppercase text-danger display-3"
        >
          Epibooks
        </h1>
        <div className="input-container">
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              id="search-input"
              placeholder="Search for books"
              onChange={(el) => setSearch(el.target.value)}
            />
            <div className="box">
              <select
                value={select}
                onChange={(el) => setSelect(el.target.value)}
              >
                <option>All</option>
                <option>Fantasy</option>
                <option>History</option>
                <option>Romance</option>
                <option>Horror</option>
                <option>Scifi</option>
              </select>
            </div>
          </form>
        </div>
        <Row>
          {visibleBooks.map((el) => (
            <Col
              className="d-flex justify-content-center align-items-center"
              key={nanoid()}
              sm={12}
              md={4}
              xl={3}
            >
              <SingleBook book={el} />
            </Col>
          ))}
        </Row>
        {numDisplayed < result.length && (
          <div className="d-flex justify-content-center w-100 gap-5">
            <button
              className="btn btn-danger"
              onClick={() => setNumDisplayed(numDisplayed + 12)}
            >
              Show more
            </button>
            <button
              className="btn btn-info text-white"
              onClick={() => {
                handleScroll();
                setNumDisplayed(12);
              }}
            >
              Scroll to top
            </button>
          </div>
        )}
      </Container>
    );
  } else {
    return (
      <Container>
        <h1 className="text-center p-5 fw-bold text-uppercase text-danger display-3">
          Epibooks
        </h1>
        <div className="input-container">
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              id="search-input"
              placeholder="Search for books"
              onChange={(el) => setSearch(el.target.value)}
            />
            <div className="box">
              <select
                value={select}
                onChange={(el) => setSelect(el.target.value)}
              >
                <option>All</option>
                <option>Fantasy</option>
                <option>History</option>
                <option>Romance</option>
                <option>Horror</option>
                <option>Scifi</option>
              </select>
            </div>
          </form>
        </div>
        <Row>
          <Col className="d-flex justify-content-center align-items-center w-100 p-5 mt-5">
            <BeatLoader color="red" className="p-5" />
          </Col>
        </Row>
      </Container>
    );
  }
}
