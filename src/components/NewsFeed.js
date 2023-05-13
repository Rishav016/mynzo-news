import React, { useContext } from "react";
import "./NewsFeed.css";
import Post from "./Post";
import { NewsContext } from "../state/NewsContext";

export default function NewsFeed() {
  const { newsData, bookmarkHandler, isLoading } = useContext(NewsContext);
  return (
    <div className="grid-container">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          {newsData &&
            newsData.map((card, index) => (
              <Post
                key={card.id}
                data={card}
                updateBookmarked={bookmarkHandler}
              ></Post>
            ))}
        </>
      )}
    </div>
  );
}
