

import React, { useState } from "react";

function AdvicePage() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdvice("");
    setLoading(true);

    const url = `http://localhost:8080/health/advice-stream?height=${height}&weight=${weight}&age=${age}`;
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
    const chars = event.data.split("");
    let index = 0;

    const typeChar = () => {
      if (index < chars.length) {
        setAdvice((prev) => prev + chars[index]);
        index++;
        setTimeout(typeChar, 20); // 控制速度（越小越快）
      }
    };

  typeChar();
};

    eventSource.onerror = (err) => {
      console.error("SSE error:", err);
      eventSource.close();
      setLoading(false);
    };

    eventSource.onopen = () => {
      console.log("Connected to server.");
    };

    eventSource.addEventListener("end", () => {
      eventSource.close();
      setLoading(false);
    });
  };

  return (
    <div>
      <h2>AI 健康建議</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="身高 (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
        <input type="number" placeholder="體重 (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <input type="number" placeholder="年齡" value={age} onChange={(e) => setAge(e.target.value)} />
        <button type="submit" disabled={loading}>
          {loading ? "載入中..." : "取得建議"}
        </button>
      </form>
      <div style={{ whiteSpace: "pre-wrap", marginTop: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
        {advice}
      </div>
    </div>
  );
}

export default AdvicePage;