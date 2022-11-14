import React from 'react';
// import DonutChart from "react-donut-chart";
import {PieChart,Pie} from 'recharts'

const Overview = () => {
    const data = [
        
        { name: "Processing", order: 250, fill:'yellow'},
        {name: "Pending", order: 465, fill: 'grey' },
        { name: "Ready to Deliver", order: 163, fill:'pink' },
        { name: "Delivered", order: 975, fill:'Blue'},
        { name: "Delivered", order: 925, fill:'darkGreen' }

    ]
    return (
        <div className='Overview'>
            <div id="header">Overview</div>
            {/* <DonutChart  width={300} height={350} data ={[
                { label: 'Processing',value:450},
                { label: 'Pending', value: 150 },
                { label: 'Ready to Deliver', value: 350 },
                { label: 'Delivered', value: 550 },
                
            ]} /> */}
            <PieChart width = {350} height={350} className="pieChart">
                <Pie data = {data} dataKey = 'order' outer radius = {900} />
            </PieChart>
            <div>
                <span className='span'> <div id="dot" style={{ "backgroundColor": "grey" }}></div><h3>Pending</h3> <div id="dot" style={{ "backgroundColor": "yellow" }}></div> <h3> Processing</h3> </span>
                <span className='span'> <div id="dot" style={{ "backgroundColor": "green" }}></div> <h3>  Ready to Deliver </h3> <div id="dot" style={{ "backgroundColor": "blue" }}></div> <h3>Delivered</h3> </span>

            </div>
        </div>
    )
}

export default Overview; 
