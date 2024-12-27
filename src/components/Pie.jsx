import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Pie = ({ result }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartCtx = chartRef.current.getContext("2d");

    // Destroy any previous chart instance to avoid duplication
    if (chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }

    // Marks data for the pie chart
    const marks = [result.DataScience, result.BasicOfLinux];
    const remaining = [15 - result.DataScience, 15 - result.BasicOfLinux];

    chartRef.current.chartInstance = new Chart(chartCtx, {
      type: "pie",
      data: {
        labels: ["Data Science Marks", "Basic of Linux Marks"],
        datasets: [
          {
            label: "Marks Distribution",
            data: marks,
            backgroundColor: ["#FFF574", "#FF8383"], // Custom colors for each section
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
        },
      },
    });
  }, [result]);

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "white",
        color: "black",
        border: "1px solid #DDD",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <h4>Result:</h4>
      <p>
        <strong>Name:</strong> {result.StudentName}
      </p>
      <p>
        <strong>DataScience:</strong> {result.DataScience}
      </p>
      <p>
        <strong>BasicOfLinux:</strong> {result.BasicOfLinux}
      </p>
      <canvas
        ref={chartRef}
        style={{ maxWidth: "300px", margin: "20px auto" }}
      />
    </div>
  );
};

export default Pie;
