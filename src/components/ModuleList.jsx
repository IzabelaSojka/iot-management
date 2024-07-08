import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import io from "socket.io-client";
import '../styles/ModuleList.css';

const ModuleList = () => {
  const [modules, setModules] = useState([]);
  const [temperatures, setTemperatures] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3001/modules")
      .then(response => {
        setModules(response.data);
      })
      .catch(error => console.error("Error fetching modules:", error));

    const socket = io("http://localhost:3001", {
      transports: ["websocket"],
    });

    socket.on("moduleUpdate", (data) => {
      const tempMap = data.reduce((acc, curr) => {
        acc[curr.id] = curr.temperature;
        return acc;
      }, {});
      setTemperatures(tempMap);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="container">
      <div className="list-header">
        <h1>LISTA MODUŁÓW</h1>
      </div>
      <ul>
        {modules.map(module => (
          <div key={module.id} className="module-card">
            <h2 className="module-title">
              <Link to={`/modules/${module.id}`}>{module.name}</Link>
            </h2>
            <div className="module-info">
              <p>Dostępność: {module.available ? "Tak" : "Nie"}</p>
              <p>Temperatura docelowa: {module.targetTemperature}°C</p>
              <p>
                Aktualna temperatura:{" "}
                <span style={{ color: temperatures[module.id] && Math.abs(temperatures[module.id] - module.targetTemperature) <= 0.5 ? "green" : "red" }}>
                  {temperatures[module.id] !== undefined ? temperatures[module.id] : "Brak danych"}°C
                </span>
              </p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ModuleList;
