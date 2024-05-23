import React, { useEffect, useState } from "react";
import useRequestData from "../hooks/useRequestData";
import Error from "../components/Error";
import Loader from "../components/Loader";

const Weather = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  const [zip, setZip] = useState("5000");

  useEffect(() => {
    const valid = /^\d{4}$/.test(zip);
    if (valid) {
      makeRequest(
        "https://api.openweathermap.org/data/2.5/forecast?zip=" +
          zip +
          ",dk&units=metric&appid=23dd53bef3d8da5e9df5235810554f3a"
      );
    }
  }, [zip]);

  return (
    <div className="p-5 text-black">
      {isLoading && <Loader />}
      {error && <Error />}
      {data && (
        <div>
          <input
            className="text-white border-2"
            onChange={(e) => setZip(e.target.value)}
            type="number"
            placeholder="Zip Code"
            pattern="[0-9]{4}"
            defaultValue={zip}
          />
          <p>{data.city.name}</p>
          <p>
            Sunrise:
            {new Date(data.city.sunrise * 1000).toLocaleString("da-dk", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
          <p>
            Sunset:
            {new Date(data.city.sunset * 1000).toLocaleString("da-dk", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Pressure</th>
              <th>Description</th>
              <th>Time(Forecast)</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.list.map((t) => (
                <tr>
                  <td>{t.main.temp} &deg;C</td>
                  <td>{t.main.humidity}</td>
                  <td>{t.main.pressure}</td>
                  {t.weather.map((p) => (
                    <td>{p.description}</td>
                  ))}
                  <td>{t.dt_txt}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Weather;
