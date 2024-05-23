import React, { useEffect } from "react";
import useRequestData from "../hooks/useRequestData";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";

export const Home = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();
  const {
    makeRequest: MR2,
    isLoading: IL2,
    data: D2,
    error: E2,
  } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5023/aboutus");
  }, []);

  useEffect(() => {
    MR2("http://localhost:5023/services?limit=2");
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Error />}
      <div className="flex text-black">
        <div className="w-1/2 p-5">
          <h1 className="mb-4 text-5xl">
            Velkommen til
            <span className="font-bold text-green-300"> Viborg Haveservice</span>
          </h1>
          {data && <p dangerouslySetInnerHTML={{__html:data.content}}></p>}
           <Link className="mt-4 btn btn-success" to="/reviews">Se alle ydelser</Link>
        </div>
        <div className="w-1/2 p-5">
          {D2 &&
            D2.map((t) => (
              <div key={t._id}>
                <figure className="pb-2">
                  <img src={"http://localhost:5023/images/" + t.image} alt="" />
                </figure>
                <h2 className="pb-2">{t.title}</h2>
                <p className="pb-4">{t.content}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
