import React from 'react';
import TableSearch from "@/components/TableSearch";
import {HiAdjustmentsVertical} from "react-icons/hi2";
import {BiSortUp} from "react-icons/bi";
import {LuCirclePlus} from "react-icons/lu";
import Table, {ITableColumn} from "@/components/Table";
import {resultsData, role} from "@/lib/data";
import Pagination from "@/components/Pagination";
import {RiEdit2Line} from "react-icons/ri";
import {Roles} from "@/enums/roles";
import Link from "next/link";
import {RiDeleteBinLine} from "react-icons/ri";


type IResult = {
    id: number;
    subject: string,
    class: string,
    teacher: string,
    student: string,
    type: "exam" | "assignment",
    date: string,
    score: number
}

const tableColumns: ITableColumn[] = [
    {
        header: "Subject Name",
        accessor: "name"
    },
    {
        header: "Student",
        accessor: "student"
    },
    {
        header: "Score",
        accessor: "score",
        className: "hidden md:table-cell"
    },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "hidden md:table-cell"
    },
    {
        header: "Class",
        accessor: "class",
        className: "hidden md:table-cell"
    },
    {
        header: "date",
        accessor: "date",
        className: "hidden md:table-cell"
    },
    {
        header: "Actions",
        accessor: "actions",
        className: "text-end pr-6"
    }
]


const ResultsListPage = () => {
    const renderRow = (item: IResult): React.ReactNode => {
        return <tr key={item.id} className={'border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lightPurple'}>
            <td className={'flex items-center gap-4 p-4'}>{item.subject}</td>
            <td className={'cursor-default'}>{item.student}</td>
            <td className={'hidden md:table-cell cursor-default'}>{item.score}</td>
            <td className={'hidden md:table-cell cursor-default'}>{item.teacher}</td>
            <td className={'hidden md:table-cell cursor-default'}>{item.class}</td>
            <td className={'hidden md:table-cell cursor-default'}>{item.date}</td>
            <td className={''}>
                <div className={'flex items-center gap-2 justify-end pr-4'}>
                    <button className={'w-7 h-7 flex items-center justify-center rounded-full bg-skyBlue'}>
                        <RiEdit2Line size={16} color={'ffffff'}/>
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
                <h2 className={"hidden md:block text-lg font-semibold"}>All Results</h2>
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
                data={resultsData}
            />
            <Pagination/>
        </div>
    );
};

export default ResultsListPage;
