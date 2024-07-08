import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import io from "socket.io-client";
import EditModuleDialog from "./EditModuleDialog";
import HistoryChart from "./HistoryChart";
import '../styles/ModuleDetails.css';

const ModuleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [module, setModule] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [showEditDialog, setShowEditDialog] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/modules/${id}`)
      .then(response => setModule(response.data))
      .catch(error => console.error("Error fetching module:", error));

    const socket = io("http://localhost:3001", {
      transports: ["websocket"],
    });

    socket.on("moduleUpdate", (data) => {
      const updatedModule = data.find(mod => mod.id === id);
      if (updatedModule) {
        setTemperature(updatedModule.temperature);
      }
    });

    return () => socket.disconnect();
  }, [id]);

  if (!module) return <p>Loading...</p>;

  return (
    <div className="container">
        <div className="details-actions">
        <button className="back-button" onClick={() => navigate("/")}>Powrót</button>
        {module.available && (
          <button className="edit-button" onClick={() => setShowEditDialog(true)}>Edytuj</button>
        )}
      </div>
      <div className="details-header">
        <h1>Szczegóły Modułu: {module.name}</h1>
      </div>
      <div className="module-details">
        <div className="module-info">
          <p><b>Opis: </b>{module.description}</p>
          <p><b>Dostępność:</b> {module.available ? "Tak" : "Nie"}</p>
          <p><b>Temperatura docelowa:</b> {module.targetTemperature}°C</p>
          <p>
            <b>Aktualna temperatura:</b>
            <span style={{ color: temperature && Math.abs(temperature - module.targetTemperature) <= 0.5 ? "green" : "red" }}>
              {temperature !== null ? temperature : "Brak danych"}°C
            </span>
          </p>
        </div>
      </div>
      {!module.available && (
        <p>Moduł niedostępny, edycja zablokowana.</p>
      )}
      <HistoryChart moduleId={id} />
      {showEditDialog && (
        <EditModuleDialog
          module={module}
          onClose={() => setShowEditDialog(false)}
          onSave={(updatedModule) => setModule(updatedModule)}
        />
      )}
    </div>
  );
};

export default ModuleDetails;
