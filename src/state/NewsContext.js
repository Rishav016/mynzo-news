import React, { createContext, useEffect, useState } from "react";

const NewsContext = createContext(null);

const NewsProvider = ({ children }) => {
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setLoader] = useState(false);
  const [pagination, setPagination] = useState(10);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
      );

      const jsonData = await response.json();

      try {
        const responses = await Promise.all(
          jsonData
            .slice(0, 30)
            .map((newsID) =>
              fetch(
                `https://hacker-news.firebaseio.com/v0/item/${newsID}.json?print=pretty`
              )
            )
        );

        const responseData = await Promise.all(
          responses.map((response) => {
            return response.json();
          })
        );
        setNewsData(responseData);
      } catch (e) {
        console.log("Error fetching item data:", e);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
    setLoader(false);
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
    <NewsContext.Provider value={{ newsData, bookmarkHandler, isLoading }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsContext, NewsProvider };
