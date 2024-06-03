import { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];

    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
        // The above line makes date as 10/05/2024 and slice method will remove the /2024
      });

      setData(dataCopy);
    }
  }, [historicalData]);
  return <Chart chartType="LineChart" data={data} height="100%" legendToggle />;
};

export default LineChart;
