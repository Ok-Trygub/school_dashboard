import React from 'react';
import TableSearch from "@/components/TableSearch";
import {HiAdjustmentsVertical} from "react-icons/hi2";
import {BiSortUp} from "react-icons/bi";
import {LuCirclePlus} from "react-icons/lu";


const TeacherListPage = () => {
    return (
        <div className={'bg-white p-4 rounded-md flex-1 m-4 mt-0'}>
            <div className={'flex items-center justify-between'}>
                <h2 className={"hidden md:block text-lg font-semibold"}>All Teachers</h2>
                <div className={'flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'}>
                    <TableSearch/>
                </div>
                <div className={''}>
                    <button>
                        <HiAdjustmentsVertical/>
                    </button>
                    <button>
                        <BiSortUp/>
                    </button>
                    <button>
                        <LuCirclePlus/>
                    </button>
                </div>
            </div>
            <div className={''}></div>
            <div className={''}></div>
        </div>
    );
};

export default TeacherListPage;
