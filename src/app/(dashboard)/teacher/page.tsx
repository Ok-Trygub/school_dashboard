import React from 'react';
import BigCalendar from "@/components/BigCalendar/BigCalendar";
import EventCalendar from "@/components/EventCalendar/EventCalendar";
import Announcements from "@/components/Announcements";

const TeacherPage = () => {
    return (
        <div className={'p-4 flex gap-4 flex-col xl:flex-row'}>
            <div className={'w-full xl:w-2/3'}>
                <div className={'h-full bg-white p-4 rounded-lg'}>
                    <h3 className={'text-xl font-semibold'}>Schedule</h3>
                    <BigCalendar/>
                </div>
            </div>
            <div className={'w-full lg:w-1/3 flex flex-col gap-8'}>
                <EventCalendar/>
                <Announcements/>
            </div>
        </div>
    );
};

export default TeacherPage;
