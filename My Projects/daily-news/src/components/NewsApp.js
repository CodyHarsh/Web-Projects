import React, { useEffect, useState, useRef } from "react";
import News from "./News";
import "./NewsApp.css";

function NewsApp() {
  const newsApiKey = "1f4a12d2698e432ea9cf18126dcc7acd";
  const [query, setQuery] = useState("top-headlines");
  const [newsFeed, setNewsFeed] = useState([]);
  const queryInputRef = useRef(null);
  const newsApiLink = `https://newsapi.org/v2/everything?q=${query}&from=2023-01-01&sortBy=publishedAt&apiKey=${newsApiKey}`;
  
  
  async function fetchData() {
    try {
      const request = await fetch(newsApiLink);
      const data = await request.json();
      console.log(data);
      setNewsFeed(data.articles);
    } catch (e) {
      console.log("exception occured");
    }
  }

  useEffect(() => {
    fetchData();
  }, [query]);

  

  function handleSubmit(event) {
    event.preventDefault();
    let queryValue = queryInputRef.current.value;
    if (queryValue === "") {
      queryValue = "top-headlines";
    }
    console.log(queryValue);
    setQuery(queryValue);
  }

  return (
    <div className="root-div">
      <h1 style={{fontFamily: 'monospace', fontSize: '3rem', textAlign: 'left', marginBottom: '20px'}}>News Daily</h1>
      <form onSubmit={handleSubmit}>
        <input ref={queryInputRef} type="text" placeholder="Search your News" />
        <input onClick={handleSubmit} type="submit" value="Submit" className="submit-btn"/>
      </form>
      <h1 className="h-not-found">Searched For News: {query}</h1>
      <div className="div-main">
        {newsFeed.map((value) => {
          return <News key={value.url} news={value} />;
        })}
      </div>
    </div>
  );
}

export default NewsApp;
