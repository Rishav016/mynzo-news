import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./styles.css"; // CSS file for styling
import { NewsProvider } from "./state/NewsContext";

const App = () => {
  const bookmarkedItems = [];
  return (
    <div className="app">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <h1 style={{ fontFamily: "fantasy" }}>Mynzo News</h1>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="btn-bookmark" to={"bookmarked"}>
              Bookmarks{" "}
              {bookmarkedItems.length > 0 ? bookmarkedItems.length : ""}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main-content">
        <NewsProvider>
          <Outlet />
        </NewsProvider>
      </div>
    </div>
  );
};

export default App;
