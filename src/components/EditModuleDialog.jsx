import React, { useState } from "react";
import axios from "axios";
import '../styles/EditModuleDialog.css';

const EditModuleDialog = ({ module, onClose, onSave }) => {
  const [name, setName] = useState(module.name);
  const [description, setDescription] = useState(module.description);
  const [targetTemperature, setTargetTemperature] = useState(module.targetTemperature);
  const [error, setError] = useState("");

  const validateAndSave = () => {
    if (!name || !description || targetTemperature === undefined) {
      setError("Wszystkie pola są wymagane");
      return;
    }

    if (targetTemperature < 0 || targetTemperature > 40) {
      setError("Temperatura docelowa musi być między 0 a 40°C");
      return;
    }

    const updatedModule = { ...module, name, description, targetTemperature };

    axios.patch(`http://localhost:3001/modules/${module.id}`, updatedModule)
      .then(response => {
        onSave(response.data);
        onClose();
      })
      .catch(error => setError("Error updating module: " + error.message));
  };

  return (
    <div className="dialog">
      <div className="dialog-header">
        <h2>Edycja</h2>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
      {error && <p className="error">{error}</p>}
      <label>
        Nazwa:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Opis:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Temperatura docelowa:
        <input type="number" value={targetTemperature} onChange={(e) => setTargetTemperature(parseFloat(e.target.value))} />
      </label>
      <button onClick={validateAndSave}>Zapisz</button>
    </div>
  );
};

export default EditModuleDialog;