import React from "react";
import "./NewsFeed.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Post({ data, updateBookmarked }) {
  return (
    <div className="grid-items">
      <div className="card">
        <div className="card-header">{data.name}</div>
        <div className="card-content">{data.description}</div>
        <div className="card-footer">
          <a
            className="btn-readmore"
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
          <FontAwesomeIcon
            onClick={(e) => updateBookmarked(data.id)}
            style={{
              float: "right",
              color: data.bookmarked ? "darkorange" : "#333",
            }}
            icon={faStar}
          />
        </div>
      </div>
    </div>
  );
}
