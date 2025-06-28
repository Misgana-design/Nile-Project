// src/News.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./News.css";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const API_URL = `https://newsapi.org/v2/everything?q=donation OR charity OR education OR africa&language=en&sortBy=publishedAt&pageSize=6&apiKey=${API_KEY}`;


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log("News response:", response);
        setArticles(response.data.articles);
      } catch (err) {
        setError("Failed to load news. Check your internet");
        console.log("API_ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p className="loading">Loading news...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="news-container">
      <h1 className="news-title">Latest News</h1>
      <h2 className="news-title-charity">Charity & Education News</h2>
      <div className="news-grid">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            <img
              src={article.urlToImage || "/placeholder.jpg"}
              alt={article.title}
              className="news-image"
            />
            <div className="news-content">
              <h2 className="news-heading">{article.title}</h2>
              <p className="news-date">
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>
              <p className="news-description">
                {article.description || "No description available."}
              </p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <button className="read-more-btn">Read Full Article</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
