import React, { useEffect, useState } from "react";
import useRequestData from "../hooks/useRequestData";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Title from "../components/Title";

const News = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  const [searchKey, setSearchKey] = useState("health");
  const [language,setLanguage] = useState("en")
  

  useEffect(() => {
    handleSearch()
}, [searchKey]);


// Search function together with API call
const handleSearch = (e) => {
    makeRequest(
      "https://newsapi.org/v2/everything?language="+ language + "&q=" + searchKey + "&apiKey=" + import.meta.env.VITE_APP_NEWSAPIKEY
    );
}

  return (
    <section className="text-center">
      <Title titleText={"NewsAPI - Everything"}></Title>
       

        <input className="border-2 border-white" onChange={(e) => setSearchKey(e.target.value)} type="text"  defaultValue={searchKey}/>
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
            <option value="ru">Russian</option>
        </select>

      {isLoading && <Loader />}
      {error && <Error />}

      <div className="flex flex-wrap px-12 mt-32 text-black" >
        {data &&
          data.articles.map((n, i) => (
            <div
              className="w-1/3 p-4 mb-8 border-2 border-black"
              key={"news" + i}
            >
              <h2 className="mb-4">{n.title}</h2>
              <p className="mb-2">{n.description}</p>
              <figure className="mt-2 mb-2">
                {n.urlToImage ? <img src={n.urlToImage} alt={n.title} /> : null}
              </figure>
              <p>{n.author}</p>
              <p>
                {new Date(n.publishedAt).toLocaleString("da-dk", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>

              {/*
                <p>{formatDistanceToNow(new Date(n.publishedAt),{locale:da, addSuffix:true})}</p>
                */}
              <a href={n.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          ))}
      </div>
    </section>
  );
};

export default News;
