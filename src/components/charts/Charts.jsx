import React from 'react'
import '../charts/chart.scss'
import Box from '../box/Box'
import { useState,useEffect } from 'react'
import { colors } from '../../constants'
import { Line } from 'react-chartjs-2'

const Charts = () => {
  return (
    <div className='box-container'>
        <Box>
            <Sensor1Chart />
        </Box>
        <Box>
            <Sensor2Chart />
        </Box>
        <Box>
            <Sensor3Chart />
        </Box>
        <Box>
            <Sensor4Chart />
        </Box>
    </div>
  )
}

export default Charts

const Sensor1Chart = () => {

    const [grapInfo,graphSetInfo] = useState([]);
    const [graphError,graphSetError] = useState(false);

    useEffect(() => {
        const fetchGraph = async () => {
            try {
                const response = await fetch("http://localhost:4000/sensor/find");
                const infoVal = await response.json();
                graphSetInfo(infoVal);   
            } catch (error) {
                graphSetError(error)
            }
        }

        const interval = setInterval(() => {
            fetchGraph();
        },1000)
    },[]);

    if(graphError){
        return <div>Error:</div>
    }
    
    if(!grapInfo){
        return <div>Loading...</div>
    }

    const sensor1All = [];
    const sensor2All = [];
    const sensor3All = [];
    const sensor4All = [];
    //const updateAtAll = [];
    
    for (let index = 0; index < grapInfo.length; index++) {
        sensor1All[index] = grapInfo[index]?.sensor1;
        sensor2All[index] = grapInfo[index]?.sensor2;
        sensor3All[index] = grapInfo[index]?.sensor3;
        sensor4All[index] = grapInfo[index]?.sensor4;
        //updateAtAll[index] = grapInfo[index]?.updatedAt;
    }

    const updateAtAll = [];

    for (let index = 0; index < grapInfo.length; index++) {
        const date = new Date(grapInfo[index]?.updatedAt);
        const options = {month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        const formattedDate = date.toLocaleDateString(undefined,options); // Change the format here as per your requirement
        updateAtAll[index] = formattedDate;
    }

console.log(updateAtAll);


    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            yAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            line: {
                Color: colors.orange,
                tension: 0.4,
                fill: false,
                borderWidth: 5,
            }
        },
    };

    const chartData = {
        labels: updateAtAll,
        datasets: [
            {
                label: 'Sensor1',
                data: sensor1All,
                borderColor: colors.orange,
                tension: 0.1,
                fill: false,
                borderWidth: 3,
            }
        ],
    };

    return (
        <>
            <div className="title mb">
                Sensor 1
            </div>
            <div>
                <Line options={chartOptions} data={chartData} height={`80px`} />
            </div>
        </>
    )
}

const Sensor2Chart = () => {

    const [grapInfo,graphSetInfo] = useState([]);
    const [graphError,graphSetError] = useState(false);

    useEffect(() => {
        const fetchGraph = async () => {
            try {
                const response = await fetch("http://localhost:4000/sensor/find");
                const infoVal = await response.json();
                graphSetInfo(infoVal);   
            } catch (error) {
                graphSetError(error)
            }
        }

        const interval = setInterval(() => {
            fetchGraph();
        },1000)
    },[]);

    if(graphError){
        return <div>Error:</div>
    }
    
    if(!grapInfo){
        return <div>Loading...</div>
    }

    const sensor1All = [];
    const sensor2All = [];
    const sensor3All = [];
    const sensor4All = [];
    //const updateAtAll = [];
    
    for (let index = 0; index < grapInfo.length; index++) {
        sensor1All[index] = grapInfo[index]?.sensor1;
        sensor2All[index] = grapInfo[index]?.sensor2;
        sensor3All[index] = grapInfo[index]?.sensor3;
        sensor4All[index] = grapInfo[index]?.sensor4;
        //updateAtAll[index] = grapInfo[index]?.updatedAt;
    }

    const updateAtAll = [];

    for (let index = 0; index < grapInfo.length; index++) {
        const date = new Date(grapInfo[index]?.updatedAt);
        const options = {month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        const formattedDate = date.toLocaleDateString(undefined,options); // Change the format here as per your requirement
        updateAtAll[index] = formattedDate;
    }

console.log(updateAtAll);


    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            yAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            line: {
                Color: colors.orange,
                tension: 0.4,
                fill: false,
                borderWidth: 5,
            }
        },
    };

    const chartData = {
        labels: updateAtAll,
        datasets: [
            {
                label: 'Sensor2',
                data: sensor2All,
                borderColor: colors.green,
                tension: 0.1,
                fill: false,
                borderWidth: 3,
            }
        ],
    };

    return (
        <>
            <div className="title mb">
                Sensor 2
            </div>
            <div>
                <Line options={chartOptions} data={chartData} height={`80px`} />
            </div>
        </>
    )
}

const Sensor3Chart = () => {

    const [grapInfo,graphSetInfo] = useState([]);
    const [graphError,graphSetError] = useState(false);

    useEffect(() => {
        const fetchGraph = async () => {
            try {
                const response = await fetch("http://localhost:4000/sensor/find");
                const infoVal = await response.json();
                graphSetInfo(infoVal);   
            } catch (error) {
                graphSetError(error)
            }
        }

        const interval = setInterval(() => {
            fetchGraph();
        },1000)
    },[]);

    if(graphError){
        return <div>Error:</div>
    }
    
    if(!grapInfo){
        return <div>Loading...</div>
    }

    const sensor1All = [];
    const sensor2All = [];
    const sensor3All = [];
    const sensor4All = [];
    //const updateAtAll = [];
    
    for (let index = 0; index < grapInfo.length; index++) {
        sensor1All[index] = grapInfo[index]?.sensor1;
        sensor2All[index] = grapInfo[index]?.sensor2;
        sensor3All[index] = grapInfo[index]?.sensor3;
        sensor4All[index] = grapInfo[index]?.sensor4;
        //updateAtAll[index] = grapInfo[index]?.updatedAt;
    }

    const updateAtAll = [];

    for (let index = 0; index < grapInfo.length; index++) {
        const date = new Date(grapInfo[index]?.updatedAt);
        const options = {month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        const formattedDate = date.toLocaleDateString(undefined,options); // Change the format here as per your requirement
        updateAtAll[index] = formattedDate;
    }

console.log(updateAtAll);


    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            yAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            line: {
                Color: colors.orange,
                tension: 0.4,
                fill: false,
                borderWidth: 5,
            }
        },
    };

    const chartData = {
        labels: updateAtAll,
        datasets: [
            {
                label: 'Sensor3',
                data: sensor3All,
                borderColor: colors.purple,
                tension: 0.1,
                fill: false,
                borderWidth: 3,
            }
        ],
    };

    return (
        <>
            <div className="title mb">
                Sensor 3
            </div>
            <div>
                <Line options={chartOptions} data={chartData} height={`80px`} />
            </div>
        </>
    )
}

const Sensor4Chart = () => {

    const [grapInfo,graphSetInfo] = useState([]);
    const [graphError,graphSetError] = useState(false);

    useEffect(() => {
        const fetchGraph = async () => {
            try {
                const response = await fetch("http://localhost:4000/sensor/find");
                const infoVal = await response.json();
                graphSetInfo(infoVal);   
            } catch (error) {
                graphSetError(error)
            }
        }

        const interval = setInterval(() => {
            fetchGraph();
        },1000)
    },[]);

    if(graphError){
        return <div>Error:</div>
    }
    
    if(!grapInfo){
        return <div>Loading...</div>
    }

    const sensor1All = [];
    const sensor2All = [];
    const sensor3All = [];
    const sensor4All = [];
    //const updateAtAll = [];
    
    for (let index = 0; index < grapInfo.length; index++) {
        sensor1All[index] = grapInfo[index]?.sensor1;
        sensor2All[index] = grapInfo[index]?.sensor2;
        sensor3All[index] = grapInfo[index]?.sensor3;
        sensor4All[index] = grapInfo[index]?.sensor4;
        //updateAtAll[index] = grapInfo[index]?.updatedAt;
    }

    const updateAtAll = [];

    for (let index = 0; index < grapInfo.length; index++) {
        const date = new Date(grapInfo[index]?.updatedAt);
        const options = {month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        const formattedDate = date.toLocaleDateString(undefined,options); // Change the format here as per your requirement
        updateAtAll[index] = formattedDate;
    }

console.log(updateAtAll);


    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            yAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            line: {
                Color: colors.orange,
                tension: 0.4,
                fill: false,
                borderWidth: 5,
            }
        },
    };

    const chartData = {
        labels: updateAtAll,
        datasets: [
            {
                label:'Sensor4',
                data: sensor4All,
                borderColor: colors.red,
                tension: 0.1,
                fill: false,
                borderWidth: 3,
            }
        ],
    };

    return (
        <>
            <div className="title mb">
                Sensor 4
            </div>
            <div>
                <Line options={chartOptions} data={chartData} height={`80px`} />
            </div>
        </>
    )
}