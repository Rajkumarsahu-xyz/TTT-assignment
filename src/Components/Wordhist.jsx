import React, { useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import "./Wordhist.css";

const Wordhist = () => {
  const [histData, setHistData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://www.terriblytinytales.com/test.txt"
      );
      const textdata = response.data;
      const words = textdata.split(/\s+/);
      const counter = {};

      words.forEach((w) => {
        w = w.toLowerCase();
        counter[w] = (counter[w] || 0) + 1;
      });

      const sortData = Object.entries(counter)
        .sort((x, y) => y[1] - x[1])
        .slice(0, 20)
        .map(([word, count]) => ({ word, count }));

      setHistData(sortData);
    } catch (error) {
      console.error("Error in fetching data from txt file:", error);
    } finally {
      setLoading(false);
    }
  };

  const exportData = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      encodeURIComponent(
        histData.map(({ w, ctr }) => `${w},${ctr}`).join("\n")
      );
    const link = document.createElement("a");
    link.setAttribute("href", csvContent);
    link.setAttribute("download", "histogram.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <h1>Word Frequency Histogram</h1>
      <button onClick={fetchData} disabled={loading} className="submit-btn">
        {loading ? "Loading..." : "Submit"}
      </button>
      {histData.length > 0 && (
        <div>
          <BarChart width={1000} height={500} data={histData} className="chart">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#90EE90" />
          </BarChart>
          <button onClick={exportData} className="export-btn">
            Export
          </button>
        </div>
      )}
    </div>
  );
};

export default Wordhist;
