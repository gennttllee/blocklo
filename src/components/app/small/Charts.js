import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';

const data = {
    labels: ['Angel sale','Private sale', 'Public sale', 'Ecosystem', 'Treasury', 'Liquidity', 'Team', 'Advisors'],
    datasets: [{
        label: 'Token Distribution',
        data: [4.5, 8, 20, 19.5, 10, 11, 4],
        backgroundColor: ['#F96666','#71CDFB','orange', '#86C18A', '#FF5CBE', '#FFEFCA', '#00FFD1', '#CBC3E3'],
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