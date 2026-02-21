import React from 'react';
import {FaUserTie} from "react-icons/fa6";
import {AiOutlineSchedule} from "react-icons/ai";
import {SiGoogleclassroom} from "react-icons/si";
import {MdOutlinePlayLesson} from "react-icons/md";
import BigCalendar from "@/components/BigCalendar/BigCalendar";
import Announcements from "@/components/Announcements";
import Link from "next/link";
import Performance from "@/components/Performance";
import {TfiMoreAlt} from "react-icons/tfi";


const SingleStudentPage = () => {
    return (
        <div className={'flex-1 p-4 flex flex-col gap-4 xl:flex-row'}>
            <div className={"w-full xl:w-2/3"}>
                <div className={'flex flex-col lg:flex-row gap-4'}>
                    <div className={'bg-skyBlue py-6 px-4 rounded-md flex-1 flex gap-4'}>
                        <div className={'w-1/3'}>
                            <FaUserTie
                                className={'w-full h-full rounded-full object-cover bg-gray-300'}
                            />
                        </div>
                        <div className={'w-2/3 flex flex-col items-center gap-1'}>
                            <h3 className={'text-xl font-semibold pb-3'}>Alina Trygub</h3>
                            <p className={'text-sm text-gray-500 pb-5'}>Student</p>
                            <div
                                className="flex items-center justify-between gap-x-1 gap-y-1 flex-wrap text-xs font-medium">
                                <div className={'w-full md:w-1/3 flex lg:w-full 2xl:w-1/3'}>
                                    <span>5+</span>
                                </div>
                                <p className={'w-full md:w-1/3 flex lg:w-full 2xl:w-1/3'}>January 2025</p>
                                <p className={'w-full md:w-1/3 flex lg:w-full 2xl:w-1/3'}>user@gmail.com</p>
                                <p className={'w-full md:w-1/3 flex lg:w-full 2xl:w-1/3'}>
                                    +38 097 000 00 00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={'flex-1 flex gap-4 justify-between flex-wrap'}>
                        <div className={'bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'}>
                            <AiOutlineSchedule size={24}/>
                            <div className={''}>
                                <p className={'text-xl font-semibold'}>90%</p>
                                <span className={'text-sm text-gray-400'}>Attendance</span>
                            </div>
                        </div>
                        <div className={'bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'}>
                            <MdOutlinePlayLesson size={24}/>
                            <div className={''}>
                                <p className={'text-xl font-semibold'}>18</p>
                                <span className={'text-sm text-gray-400'}>Lessons</span>
                            </div>
                        </div>
                        <div className={'bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'}>
                            <SiGoogleclassroom size={24}/>
                            <div className={''}>
                                <p className={'text-xl font-semibold'}>6</p>
                                <span className={'text-sm text-gray-400'}>Grade</span>
                            </div>
                        </div>
                        <div className={'bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'}>
                            <SiGoogleclassroom size={24}/>
                            <div className={''}>
                                <p className={'text-xl font-semibold'}>6A</p>
                                <span className={'text-sm text-gray-400'}>Class Name</span>
                            </div>
                        </div>
                        <div className={'bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'}>
                            <SiGoogleclassroom size={24}/>
                            <div className={''}>
                                <p className={'text-xl font-semibold'}>6</p>
                                <span className={'text-sm text-gray-400'}>Classes</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'mt-4 bg-white rounded-md p-4 h-[800px]'}>
                    <h3>Student's schedule</h3>
                    <BigCalendar/>
                </div>
            </div>
            <div className={"w-full xl:w-1/3 flex flex-col gap-4"}>
                <div className={'bg-white p-4 rounded-md'}>
                    <h3 className={'text-xl font-semibold'}>Shortcuts</h3>
                    <div className={'mt-4 flex gap-4 flex-wrap text-xs text-gray-500 font-semibold'}>
                        <Link href={'/'} className={'p-3 rounded-md bg-lightSkyBlue'}>Student's Lessons</Link>
                        <Link href={'/'} className={'p-3 rounded-md bg-lightPurple'}>Student's Teachers</Link>
                        <Link href={'/'} className={'p-3 rounded-md bg-lightYellow'}>Student's Results</Link>
                        <Link href={'/'} className={'p-3 rounded-md bg-pink-50'}>Student's Exams</Link>
                        <Link href={'/'} className={'p-3 rounded-md bg-lightSkyBlue'}>Student's Assignments</Link>
                    </div>
                </div>
                <div className={"bg-white p-4 rounded-md h-80 relative"}>
                    <div className={'flex items-center justify-between'}>
                        <h3 className={"text-xl font-semibold"}>Performance</h3>
                        <TfiMoreAlt size={16} color={"#666"}/>
                    </div>
                    <Performance/>
                </div>
                <Announcements/>
            </div>
        </div>
    );
};

export default SingleStudentPage;
