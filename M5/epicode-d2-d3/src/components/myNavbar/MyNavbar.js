import React from "react";
import "./myNavbar.css";
import { nanoid } from "nanoid";

export default function MyNavbar({link}) {
  return (
    <header>
      <a className="logo" href="index.html">
        epibooks
      </a>
      <input id="nav" type="checkbox" />
      <label htmlFor="nav"></label>
      <nav>
        <ul>
            {link.map((el) => (
                <li key={nanoid()}><a href={el.href}>{el.name}</a></li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
