import React, { useEffect, useState } from "react";
import useRequestData from "../hooks/useRequestData";
import Error from "../components/Error";
import Loader from "../components/Loader";

const ElspotPrice = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  const [dk, setDk] = useState("dk1")

  useEffect(() => {
    makeRequest(
      "https://api.energidataservice.dk/dataset/Elspotprices?offset=0&start=2024-05-03T00:00&end=2024-05-04T00:00&filter=%7B%22PriceArea%22:[%22" + dk + "%22]%7D&sort=HourUTC%20DESC"
    );
  }, [dk]);

  return (
    <div className="p-5 text-black">
      {isLoading && <Loader />}
      {error && <Error />}
       <select className="text-white" onChange={(e) => setDk(e.target.value)} value={dk}>
            <option value="dk1">DK1</option>
            <option value="dk2">DK2</option>
        </select>
      <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>Hour DK</th>
            <th>Price Area</th>
            <th>Spot Price(DKK)</th>
            <th>Spot Price(EUR)</th>
          </tr>
        </thead>
        <tbody>
      {data && data.records.map(t =>
      <tr>
      <td>{t.HourDK}</td>
      <td>{t.PriceArea}</td>
      <td>{t.SpotPriceDKK}</td>
      <td>{t.SpotPriceEUR}</td>
      </tr>
      )}
      </tbody>
      </table>
      </div>
      
    </div>
  );
};

export default ElspotPrice