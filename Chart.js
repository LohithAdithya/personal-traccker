import React from 'react';
import { Bar } from 'react-chartjs-2';
import './Chart.css';

function Chart(props) {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Expenses',
        data: new Array(12).fill(0),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  props.expenses.forEach((expense) => {
    const month = expense.date.getMonth(); // 0-based index
    chartData.datasets[0].data[month] += expense.amount;
  });

  return (
    <div className="chart">
      <Bar data={chartData} />
    </div>
  );
}

export default Chart;
