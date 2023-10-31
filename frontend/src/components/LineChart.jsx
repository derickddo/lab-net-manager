import { Line } from "react-chartjs-2"
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";


// eslint-disable-next-line react/prop-types
const LineChart = ({ data }) => {
    const chartData = {
      // eslint-disable-next-line react/prop-types
      labels: data.labels,
      datasets: [
        {
          label: "Device Types",
          // eslint-disable-next-line react/prop-types
          data: data.deviceCount,
          backgroundColor: "rgba(2,0,36,0.99)",
          borderColor: "rgba(2,0,36,0.99)",
          borderWidth: 1,
        },
      ],
    };
    
  return <Line data={chartData} />;
};

export default LineChart