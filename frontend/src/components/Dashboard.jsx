import { useEffect, useState } from "react";
import { GoDatabase } from "react-icons/go";
import { BiSolidCctv } from "react-icons/bi";
import { TbDeviceCctvOff } from "react-icons/tb";
import { Carousel } from "antd";
import { Chart } from "primereact/chart";

const Dashboard = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["Total", "Online", "Offline", "Pending", "YTB Installed"],
      datasets: [
        {
          data: [300, 50, 100, 120, 200],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--green-500"),
            documentStyle.getPropertyValue("--red-500"),
            documentStyle.getPropertyValue("--orange-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--green-400"),
            documentStyle.getPropertyValue("--red-500"),
            documentStyle.getPropertyValue("--orange-500"),
          ],
        },
      ],
    };

    // Set chart options and disable legend (labels at the top)
    const options = {
      cutout: "63%",
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
    <div className=" ">
      {/*Header count dashboard */}
      <div className="grid grid-cols-5 py-3 gap-4 ">
        <div className="border-light bg-light-background border border-b-amber-400 rounded-md p-3 grid grid-cols-2 items-center">
          <div className=" flex flex-col font-semibold ">
            <div className="text-light-text text-xl">8</div>
            <div className="text-light-text ">Total</div>
          </div>
          <div className="">
            <button className="light-icon-bg p-3 rounded-md">
              <GoDatabase className="border-light text-blue-500 " size={30} />
            </button>
          </div>
        </div>
        <div className="border-light bg-light-background border rounded-md p-3 grid grid-cols-2">
          <div className=" flex flex-col ">
            <div className="text-light-text text-xl">8</div>
            <div className="text-light-text ">Online</div>
          </div>
          <div className="">
            <button className=" light-icon-bg p-3 rounded-md">
              <BiSolidCctv className=" text-green-600" size={30} />
            </button>
          </div>
        </div>
        <div className="border-light bg-light-background border rounded-md p-3 grid grid-cols-2">
          <div className=" flex flex-col ">
            <div className="text-light-text text-xl">0</div>
            <div className="text-light-text ">Offline</div>
          </div>{" "}
          <div>
            <button className=" light-icon-bg p-3 rounded-md">
              <BiSolidCctv className=" text-orange-400" size={30} />
            </button>
          </div>
        </div>
        <div className="border-light bg-light-background border rounded-md p-3 grid grid-cols-2">
          <div className=" flex flex-col ">
            <div className="text-light-text text-xl">0</div>
            <div className="text-light-text ">Pending</div>
          </div>
          <div>
            <button className=" light-icon-bg p-3 rounded-md">
              <TbDeviceCctvOff className="text-purple-700" size={30} />
            </button>
          </div>
        </div>
        <div className="border-light border bg-light-background rounded-md p-3 grid grid-cols-2">
          <div className=" flex flex-col ">
            <div className="text-light-text text-xl">8</div>
            <div className="text-light-text ">YTB Installed</div>
          </div>
          <div>
            <button className=" light-icon-bg p-3 rounded-md">
              <TbDeviceCctvOff className="text-gray-500" size={30} />
            </button>
          </div>
        </div>
      </div>
      {/*Hourly statistics */}
      <div className="grid grid-cols-12 gap-4">
        {/* Hourly Statistics Section (80% width, 8/12 of the grid) */}
        <div className="col-span-9 bg-light-background p-2 rounded-md">
          <div className="text-light-text font-semibold text-xl">
            Hourly Statistics
          </div>
          <div className="flex justify-center  text-light-text font-semibold items-center">
            <div>No data</div>
          </div>
        </div>

        {/* Carousel Section (20% width, 4/12 of the grid) */}
        <div className="col-span-3   bg-light-background p-2 rounded-md">
          <Carousel arrows className=" " infinite={false} dots={false}>
            <div className=" ">
              <div>
                {/* Chart */}
                <div className="">
                  <Chart
                    type="doughnut"
                    data={chartData}
                    options={chartOptions}
                    className=""
                  />
                </div>

                {/* Labels at the bottom */}
                <div className="mt-4 flex  gap-4 flex-wrap  justify-start items-baseline">
                  {chartData.labels &&
                    chartData.labels.map((label, index) => (
                      <div key={index} className="text-start  ">
                        <div
                          className="w-6 h-6 inline-block"
                          style={{
                            backgroundColor:
                              chartData.datasets[0]?.backgroundColor[index],
                          }}
                        ></div>
                        <p className="text-light-text text-sm flex flex-col flex-wrap">
                          {label}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div>
              {" "}
              <Chart
                type="doughnut"
                data={chartData}
                // options={chartOptions}
                className="w-full md:w-30rem"
              />
            </div>
            <div>
              {" "}
              <Chart
                type="doughnut"
                data={chartData}
                // options={chartOptions}
                className="w-full md:w-30rem"
              />
            </div>
            <div>
              <Chart
                type="doughnut"
                data={chartData}
                options={chartOptions}
                className="w-full md:w-30rem text-light-text"
              />
            </div>
          </Carousel>

          {/* Global Styles for Carousel Arrows */}
          <style>
            {`
        /* Remove dots */
        .slick-dots {
          display: none !important;
        }

        /* Customize arrows to black */
        .slick-prev, .slick-next {
          color:var(--light-arrow) !important; 
        }

        // /* Hover state for arrows */
        // .slick-prev:hover, .slick-next:hover {
        //   color: black !important; /* Keep hover color black */
        // }
      `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
