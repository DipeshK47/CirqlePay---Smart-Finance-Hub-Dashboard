'use client';  // Ensures this component is a client-side component

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  accounts: any[];
}

export const DoughnutChart: React.FC<DoughnutChartProps> = ({ accounts }) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1250, 2500, 43434], // Static data, you can dynamically populate it based on your accounts
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
      },
    ],
    labels: ['Bank1', 'Bank2', 'Bank3'],
  };

  const options = {
    maintainAspectRatio: false, // Ensures that you can control the size
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  return (
    <div style={{ width: '140px', height: '140px' }}> {/* Adjust size here */}
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;