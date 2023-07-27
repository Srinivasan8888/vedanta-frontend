import "../graph/chartdash.scss";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

                                                                 // class level
const generateData = (inforeport, startSensorIndex, endSensorIndex) => {
  const data = [];

  for (let index = 0; index < inforeport.length; index++) {
    for (let i = startSensorIndex; i <= endSensorIndex; i++) {
      if(i <= 108) {
        data.push({
          id: `${i}`,
          sensor: `Sensor ${i}`,
          sensorName: `CBT${i}`,
          updatedAt: inforeport[index]?.updatedAt,
        });
      }
    }
    return data;
  }
};
                                                               // function
const ChartDash = ({ openGraph, closeGraph, waveGuideSelected }) => {

  const [infoChart, setInfoChart] = useState([]);
  const [error, SetError] = useState(false);

  const [sensorData, setSensorData] = useState([]);
  const [updateTime, setUpdateTime] = useState();
  const [sensorName, setSenserName] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/sensor/find");
        const infoVal = await response.json();
        setInfoChart(infoVal);
      } catch (error) {
        SetError(error);
      }
    };
    fetchData();
  }, []);

  if (!openGraph) {
    return null;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!infoChart) {
    return <div>Loading...</div>;
  }
  
  const startSensorIndex = (waveGuideSelected - 1) * 10 + 1;
  const endSensorIndex = waveGuideSelected * 10;

  const chartData = generateData(infoChart, startSensorIndex, endSensorIndex);

  const selectSensor = (sensor) => {
    const sensorval = [];
    const updateTime = [];
    const trimedSensor = sensor.replace(/ /g, "");
    const sensorName = trimedSensor.toLowerCase();

    for (let index = 0; index < infoChart.length; index++) {
      sensorval[index] = infoChart[index]?.[sensorName];
      updateTime[index] = infoChart[index]?.updatedAt;
    }
    setSensorData(sensorval);
    setUpdateTime(updateTime);
    setSenserName(sensorName);
  };

  var chartName = sensorName;
  var updateChartName;
  if (chartName) {
        updateChartName = chartName.replace("sensor", "CBT");
    }
  const data = {
    labels: updateTime,
    datasets: [
      {
        label: `${updateChartName}`,
        data: sensorData,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="overlay-graph-dash" onClick={closeGraph} />

      <div className="chartdash">
        <div className="chart">
        <Line data={data} options={options} />
        </div>

        <div className="chartSelection">
        <div className="box-dash">
          {
            chartData.map((item, index) => {
              return (
            <div className="box-chart-dash" key={index} onClick={()=>{selectSensor(item.sensor)}}>
            <span className="text-base">{item.sensorName}</span>
            </div>
              )
            })
          }
          </div>
        </div>

      </div>
    </>
  );
};

export default ChartDash;
