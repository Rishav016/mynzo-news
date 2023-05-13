import React, { createContext, useEffect, useState } from "react";

const NewsContext = createContext(null);

const NewsProvider = ({ children }) => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiKey = process.env.REACT_APP_NEWS_API;
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`
      );
      const jsonData = await response.json();
      const data = jsonData.sources.map((news) => {
        return { ...news, bookmarked: false };
      });
      setNewsData(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const bookmarkHandler = (id) => {
    setNewsData((prevNews) => {
      return prevNews.map((news) => {
        if (news.id === id) {
          return { ...news, bookmarked: !news.bookmarked };
        }
        return news;
      });
    });
  };

  return (
    <NewsContext.Provider value={{ newsData, bookmarkHandler }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsContext, NewsProvider };
