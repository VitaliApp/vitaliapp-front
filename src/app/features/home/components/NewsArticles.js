let key = "ec21816683df4f9dbdedd1a16e488af1";
let url =
  "https://newsapi.org/v2/top-headlines?country=mx&category=health&apiKey=ec21816683df4f9dbdedd1a16e488af1";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function NewsAside() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from the news API
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=mx&category=health&apiKey=ec21816683df4f9dbdedd1a16e488af1"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        console.log(data.articles.urlToImage);
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <aside className="mx-2 h-44 md:h-screen overflow-x-auto md:overflow-y-auto items-center">
      <h1 className="justify-center font-bold">Articulos Recomendados</h1>
      <div className="overflow-x-auto md:overflow-y-auto flex flex-row md:flex-col">
        {articles.slice(0, 5).map((article, index) => (
          <a
            href={article.url}
            key={index}
            className="rounded-lg w-66 shadow-md p-2 md:mb-4 md:last:mb-0"
          >
            <img
              src="../../ilustrations/grupo-salud.svg"
              alt="imagen de articulo"
              width={250}
            />
            <div className="p-2">
              <p className="text-sm">{article.title}</p>
            </div>
          </a>
        ))}
      </div>
    </aside>
  );
}