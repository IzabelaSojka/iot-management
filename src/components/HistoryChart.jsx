import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Chart, registerables } from 'chart.js';
import '../styles/HistoryChart.css';

Chart.register(...registerables);

const HistoryChart = ({ moduleId }) => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());
  const [stop, setStop] = useState(new Date().toISOString());
  const [mode, setMode] = useState("hourly");
  const chartRef = useRef(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/modules/${moduleId}/history`, { params: { start, stop, mode } })
      .then(response => setData(response.data))
      .catch(error => console.error("Error fetching history data:", error));
  }, [moduleId, start, stop, mode]);

  const chartData = {
    labels: data.map(entry => new Date(entry.timestamp).toLocaleString()),
    datasets: [
      {
        label: "Temperatura",
        data: data.map(entry => entry.temperature),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data.labels = chartData.labels;
      chartRef.current.data.datasets[0].data = chartData.datasets[0].data;
      chartRef.current.update();
    } else {
      const ctx = document.getElementById("historyChart").getContext("2d");
      chartRef.current = new Chart(ctx, {
        type: "line",
        data: chartData,
      });
    }
  }, [chartData]);

  return (
    <div className="history-container">
      <h3>Historia Temperatur</h3>
      <label>
        Start:
        <input
          type="datetime-local"
          value={new Date(start).toISOString().substring(0, 16)}
          onChange={(e) => setStart(new Date(e.target.value).toISOString())}
        />
      </label>
      <label>
        Stop:
        <input
          type="datetime-local"
          value={new Date(stop).toISOString().substring(0, 16)}
          onChange={(e) => setStop(new Date(e.target.value).toISOString())}
        />
      </label>
      <label>
        Tryb:
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="hourly">Godzinowy</option>
          <option value="daily">Dzienny</option>
        </select>
      </label>
      <canvas id="historyChart"></canvas>
    </div>
  );
};

export default HistoryChart;