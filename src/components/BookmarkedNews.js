import React, { useContext } from "react";
import Post from "./Post";
import { NewsContext } from "../state/NewsContext";

export default function BookmarkedNews() {
  const { newsData, bookmarkHandler } = useContext(NewsContext);
  const bookmarkedNews = newsData.filter((news) => news.bookmarked);
  return (
    <div className="grid-container">
      {bookmarkedNews.length === 0 && (
        <div>
          <p>No Bookmarked News</p>
        </div>
      )}
      {bookmarkedNews.length > 0 &&
        bookmarkedNews.map((card, index) => {
          if (card.bookmarked)
            return <Post data={card} updateBookmarked={bookmarkHandler}></Post>;
          return null;
        })}
    </div>
  );
}
