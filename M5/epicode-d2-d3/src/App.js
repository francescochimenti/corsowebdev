import React, { useState, useEffect } from "react";
import MyNavbar from "./components/myNavbar/MyNavbar";
import { myNavLink, myFooterLink } from "./data/myLink";
import LatestRelease from "./components/latestRelease/LatestRelease";
import axios from "axios";
import MyFooter from "./components/myFooter/MyFooter";

export default function App() {
  const [book, setBook] = useState([]);
  const url = "https://epibooks.onrender.com/";

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setBook(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <MyNavbar link={myNavLink} />
      <LatestRelease book={book} />
      <MyFooter link={myFooterLink} />
    </>
  );
}
