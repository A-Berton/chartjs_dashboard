import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const options = {
    responsive: true,
    plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Global Sales 2023',
        },
      },
}

const data = {
    labels,
    datasets: [
        {
            label: 'Sales Category 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 600 })),
            borderColor: 'rgb(229, 204, 255)',
            backgroundColor: 'rgba(229, 204, 255, 0.8)',
            barThickness: 18,
            borderWidth: 2,
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false,
        },
        {
            label: 'Sales Category 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 600 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.8)',
            barThickness: 18,
            borderWidth: 2,
            borderRadius: Number.MAX_VALUE,
        },
    ], 
};

const Sales = () =>{
    return <Bar  options={options} data={data} height={100}/>;
}

export default Sales