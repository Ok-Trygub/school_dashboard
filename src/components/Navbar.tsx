import React from 'react';
import {IoSearch} from "react-icons/io5";
import {LuMessageCircleMore} from "react-icons/lu";
import {TfiAnnouncement} from "react-icons/tfi";
import {RxAvatar} from "react-icons/rx";


const Navbar = () => {
    return (
        <div className={"flex items-center justify-between p-4"}>
            <div
                className={"hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 text-gray-600"}>
                <IoSearch size={14}/>
                <input type="text" placeholder={"Search..."} className={"w-[200px] p-2 bg-transparent outline-none"}/>
            </div>
            <div className={"text-gray-600 flex items-center gap-6 justify-end w-full"}>
                <div className={"bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer"}>
                    <LuMessageCircleMore size={20}/>
                </div>
                <div
                    className={"bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative"}>
                    <TfiAnnouncement size={20}/>
                    <div
                        className={'absolute -top-3 -right-3 w-5 h-5 text-xs flex justify-center items-center bg-violet-500 text-white rounded-full'}>
                        1
                    </div>
                </div>
                <div className={"flex flex-col "}>
                    <span className={"text-xs leading-3 font-medium"}>John Doe</span>
                    <span className={"text-[10px] text-right"}>Admin</span>
                </div>
                <div>
                    <div className={"rounded-full"}>
                        <RxAvatar size={36}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
