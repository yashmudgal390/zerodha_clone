import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 12,
          padding: 15,
          font: {
            size: 11
          }
        }
      }
    },
    cutout: '70%',
    maintainAspectRatio: false
  };

  return (
    <div style={{ height: '220px', marginTop: '10px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
