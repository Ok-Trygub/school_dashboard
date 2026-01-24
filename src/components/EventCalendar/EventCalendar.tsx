"use client"
import React, {useState} from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './index.css';
import {TfiMoreAlt} from "react-icons/tfi";


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];


const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className={'bg-white p-4 rounded-lg'}>
            <Calendar onChange={onChange} value={value}/>
            <div className={'flex items-center justify-between'}>
                <h3 className={"text-lg font-semibold my-4"}>Events</h3>
                <button className={"border-none p-0 cursor-pointer"}>
                    <TfiMoreAlt size={20} color={"#666"}/>
                </button>
            </div>
            <div className={'flex flex-col gap-4'}>
                {events.map(event => (
                    <div
                        className={'p-5 rounded-lg border-2 border-gray-100 border-t-4 odd:border-t-skyBlue even:border-t-purple'}
                        key={event.id}
                    >
                        <div className={'flex items-center justify-between'}>
                            <h4 className={'font-semibold text-gray-600'}>{event.title}</h4>
                            <span className={'text-xs text-gray-300'}>{event.time}</span>
                        </div>
                        <p className={'mt-4 text-gray-400 text-xs'}>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventCalendar;
