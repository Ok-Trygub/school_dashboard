import React from 'react';
import TableSearch from "@/components/TableSearch";
import {HiAdjustmentsVertical} from "react-icons/hi2";
import {BiSortUp} from "react-icons/bi";
import {LuCirclePlus} from "react-icons/lu";
import Table, {ITableColumn} from "@/components/Table";
import {role, studentsData} from "@/lib/data";
import Pagination from "@/components/Pagination";
import {MdOutlineViewCozy} from "react-icons/md";
import {Roles} from "@/enums/roles";
import Link from "next/link";
import {RiDeleteBinLine} from "react-icons/ri";


type IStudent = {
    id: number;
    name: string,
    email?: string,
    photo: string,
    phone?: string,
    grade: number,
    class: string
}

const tableColumns: ITableColumn[] = [
    {
        header: "Info",
        accessor: "info"
    },
    {
        header: "Student Id",
        accessor: "studentId",
        className: "hidden md:table-cell"
    },
    {
        header: "Grade",
        accessor: "grade",
        className: "hidden md:table-cell"
    },
    {
        header: "Phone",
        accessor: "phone"
    },
    {
        header: "Actions",
        accessor: "actions",
        className: "text-end pr-6"
    }
]


const StudentsListPage = () => {
    const renderRow = (item: IStudent): React.ReactNode => {
        return <tr key={item.id} className={'border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lightPurple'}>
            <td className={'flex items-center gap-4 p-4'}>
                <div className={"md:hidden xl:flex w-10 h-10 rounded-full object-cover items-center"}>{item.photo}</div>
                <div className={'flex flex-col'}>
                    <div className={'font-semibold'}>{item.name}</div>
                    <p className={'text-xs text-gray-500 cursor-default'}>{item.class}</p>
                </div>
            </td>
            <td className={'hidden md:table-cell cursor-default'}>{item.id}</td>
            <td className={'hidden md:table-cell cursor-default'}>{item.grade}</td>
            <td className={'cursor-default'}>{item.phone}</td>
            <td className={''}>
                <div className={'flex items-center gap-2 justify-end pr-4'}>
                    <button className={'w-7 h-7 flex items-center justify-center rounded-full bg-skyBlue'}>
                        <MdOutlineViewCozy size={16} color={'ffffff'}/>
                    </button>
                    {role === Roles.Admin &&
                        <Link href={`/list/teachers/${item.id}`}>
                            <button className={'w-7 h-7 flex items-center justify-center rounded-full bg-purple'}>
                                <RiDeleteBinLine size={16} color={'ffffff'}/>
                            </button>
                        </Link>
                    }
                </div>
            </td>
        </tr>
    }

    return (
        <div className={'bg-white p-4 rounded-md flex-1 m-4 mt-0'}>
            <div className={'flex items-center justify-between'}>
                <h2 className={"hidden md:block text-lg font-semibold"}>All Students</h2>
                <div className={'flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'}>
                    <TableSearch/>

                    <div className={'flex items-center gap-4 self-end'}>
                        <button className={'w-8 h-8 flex items-center justify-center rounded-full bg-yellow'}>
                            <HiAdjustmentsVertical size={14}/>
                        </button>
                        <button className={'w-8 h-8 flex items-center justify-center rounded-full bg-yellow'}>
                            <BiSortUp size={14}/>
                        </button>
                        {role === Roles.Admin &&
                            <button className={'w-8 h-8 flex items-center justify-center rounded-full bg-yellow'}>
                                <LuCirclePlus size={14}/>
                            </button>
                        }
                    </div>
                </div>
            </div>
            <Table
                columns={tableColumns}
                renderRow={renderRow}
                data={studentsData}
            />
            <Pagination/>
        </div>
    );
};

export default StudentsListPage;
