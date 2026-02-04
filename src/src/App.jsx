import { useEffect, useState } from "react";

const API_URL = "https://sleek-sands-api1.onrender.com";";

export default function App() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Sleek Sands</h1>
      <p>API status: {status}</p>
    </div>
  );
}
