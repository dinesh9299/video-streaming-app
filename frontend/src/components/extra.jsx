import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function Extra() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["A", "B", "C"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };

    // Set chart options and disable legend (labels at the top)
    const options = {
      cutout: "60%",
      responsive: true,
      plugins: {
        legend: {
          display: false, // Hide the legend (which is responsible for showing labels at the top)
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card flex flex-col justify-center items-center p-4 bg-white shadow-lg rounded-lg">
      {/* Chart */}
      <div className="w-full md:w-[30rem]">
        <Chart
          type="doughnut"
          data={chartData}
          options={chartOptions}
          className="w-full"
        />
      </div>

      {/* Labels at the bottom */}
      <div className="mt-4 flex space-x-6">
        {chartData.labels &&
          chartData.labels.map((label, index) => (
            <div key={index} className="text-center">
              <div
                className="w-6 h-6 inline-block"
                style={{
                  backgroundColor:
                    chartData.datasets[0]?.backgroundColor[index],
                }}
              ></div>
              <p className="text-light-text">{label}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
