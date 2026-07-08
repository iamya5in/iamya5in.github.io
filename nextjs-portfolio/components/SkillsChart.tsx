'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const labels = [
  'Native Android (Kotlin/Java)',
  'Flutter (Dart)',
  'Android SDK Dev',
  'System Design',
  'FinTech & Payments',
  'Developer Advocacy',
];

const dataValues = [95, 90, 85, 80, 88, 92];

export default function SkillsChart() {
  const data = {
    labels,
    datasets: [
      {
        label: 'Proficiency',
        data: dataValues,
        backgroundColor: dataValues.map((_, i) =>
          i === 0 ? '#C8102E' : '#0F0E0B'
        ),
        borderWidth: 0,
        borderRadius: 0,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        grid: { color: '#E8E3D6' },
        border: { display: false },
        ticks: {
          font: { family: 'DM Mono', size: 10 },
          color: '#7A7368',
          callback: (v: string | number) => `${v}%`,
        },
      },
      y: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          font: { family: 'DM Sans', size: 12, weight: 'bold' as const },
          color: '#0F0E0B',
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#0F0E0B',
        titleFont: { family: 'DM Mono', size: 10 },
        bodyFont: { family: 'DM Mono', size: 11 },
        callbacks: {
          label: (ctx: any) =>
            ` ${ctx.parsed.x}% proficiency`,
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
}
