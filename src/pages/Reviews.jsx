import React, { useEffect } from "react";
import useRequestData from "../hooks/useRequestData";
import Error from "../components/Error";
import Loader from "../components/Loader";


const Reviews = () => {

    const { makeRequest, isLoading, data, error } = useRequestData();

    useEffect(() => {
        makeRequest("http://localhost:5023/reviews");
      }, []);

      
  return (
    <div className="flex text-center text-black bg-green-400 carousel carousel-center">
    {data &&
        data.map((t) => (
            
          <div className="w-full h-32 carousel-item" key={t._id}>
            <h2 className="w-full text-4xl font-bold">Kundeudtalelser</h2>
            <p className="w-full mx-4 ">{t.content}</p>
            <h2 className="w-full text-center">{t.author}</h2>
          </div>
        ))}
    </div>  );
};

export default Reviews;
