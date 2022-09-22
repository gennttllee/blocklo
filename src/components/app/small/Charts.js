import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [{
        label: 'users gained',
        data: [4, 1, 3, 2, 5],
        backgroundColor: ['#71CDFB', '#86C18A', '#FF5CBE', '#FFEFCA', '#FFCA58'],
        borderWidth: 5,
        borderColor: '#724DDD',
    }],
}

const options = {
    color: 'white',
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: "bottom",
        },
    },
}


const Charts = () => {
    return (
        <Doughnut data={data} options={options} />
    )
}

export default Charts