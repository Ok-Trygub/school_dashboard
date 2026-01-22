"use client"
import React from 'react';
import {RadialBar, RadialBarChart, ResponsiveContainer} from "recharts";
import {TfiMoreAlt} from "react-icons/tfi";
import Image from 'next/image'

const data = [
    {
        name: 'Total',
        count: 111,
        fill: 'white',
    },
    {
        name: 'Girls',
        count: 53,
        fill: '#FAE27C',
    },
    {
        name: 'Boys',
        count: 58,
        fill: '#C3EBFA',
    }
];


const CountChart = () => {
    return (
        <div className={"bg-white rounded-xl w-full h-full p-4"}>
            <div className={"flex justify-between items-center"}>
                <h3 className={"text-lg font-semibold"}>Students</h3>
                <button className={"border-none p-0 cursor-pointer"}>
                    <TfiMoreAlt size={20} color={"#666"}/>
                </button>
            </div>
            <div className={"w-full h-[260px] min-w-0 relative"}>
                <ResponsiveContainer width="100%">
                    <RadialBarChart
                        cx="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        <RadialBar background dataKey="count"/>
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image
                    src={'/maleFemale.png'}
                    alt={"chart_img"}
                    width={50}
                    height={50}
                    className={"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"}
                />
            </div>

            <div className={"flex justify-center gap-16"}>
                <div className={"flex flex-col gap-1"}>
                    <div className={"w-5 h-5 bg-skyBlue rounded-full"}></div>
                    <p className={"font-bold"}>1,234</p>
                    <p className={"text-xs text-gray-300"}>Boys (55%)</p>
                </div>
                <div className={"flex flex-col gap-1"}>
                    <div className={"w-5 h-5 bg-yellow rounded-full"}></div>
                    <p className={"font-bold"}>1,234</p>
                    <p className={"text-xs text-gray-300"}>Girls (45%)</p>
                </div>

            </div>
        </div>
    );
};

export default CountChart;
