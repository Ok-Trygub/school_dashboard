"use client"
import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';


const data = [
    {
        name: 'Mon',
        present: 40,
        absent: 2
    },
    {
        name: 'Tue',
        present: 30,
        absent: 1
    },
    {
        name: 'Wed',
        present: 20,
        absent: 9
    },
    {
        name: 'Thu',
        present: 27,
        absent: 8
    },
    {
        name: 'Fri',
        present: 18,
        absent: 4
    },
    {
        name: 'Sut',
        present: 23,
        absent: 3
    },
    {
        name: 'Sun',
        present: 34,
        absent: 4
    },
];

const AttendanceChart = () => {
    return (
        <div className={"bg-white rounded-lg p-4 h-full"}>
            <div>
                <h3 className={"text-lg font-semibold"}>Attendance</h3>
            </div>
            <ResponsiveContainer width="100%" height={'90%'}>
                <BarChart
                    barSize={20}
                    responsive
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={"#ddd"}/>
                    <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false}/>
                    <YAxis width="auto" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false}/>
                    <Tooltip contentStyle={{borderRadius: "10px"}}/>
                    <Legend
                        align={'left'}
                        verticalAlign={'top'}
                        wrapperStyle={{
                            paddingTop: "20px",
                            paddingBottom: "40px"
                        }}
                    />
                    <Bar
                        dataKey="present"
                        fill="#8884d8"
                        activeBar={{fill: "#CFCEFF", stroke: "white"}}
                        radius={[10, 10, 0, 0]}
                        legendType={'circle'}
                    />
                    <Bar
                        dataKey="absent"
                        fill="#82ca9d"
                        activeBar={{fill: "#FAE27C", stroke: 'white'}}
                        radius={[10, 10, 0, 0]}
                        legendType={'circle'}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AttendanceChart;
