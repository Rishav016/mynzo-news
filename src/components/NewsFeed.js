import React, { useContext } from "react";
import "./NewsFeed.css";
import Post from "./Post";
import { NewsContext } from "../state/NewsContext";

export default function NewsFeed() {
  const { newsData, bookmarkHandler } = useContext(NewsContext);

  return (
    <div className="grid-container">
      {newsData &&
        newsData.map((card, index) => (
          <Post data={card} updateBookmarked={bookmarkHandler}></Post>
        ))}
    </div>
  );
}
