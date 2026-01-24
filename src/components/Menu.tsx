import React from 'react';
import Link from "next/link";
import {FaHome} from "react-icons/fa";
import {GiTeacher} from "react-icons/gi";
import {PiStudentBold, PiExam} from "react-icons/pi";
import {RiParentFill} from "react-icons/ri";
import {MdOutlineSubject, MdOutlineDescription, MdOutlineAssignment} from "react-icons/md";
import {SiGoogleclassroom} from "react-icons/si";
import {FaPeopleRoof} from "react-icons/fa6";
import {IoCalendarNumberSharp, IoSettingsSharp, IoCheckmarkCircle} from "react-icons/io5";
import {LuMessageCircleMore} from "react-icons/lu";
import {TfiAnnouncement} from "react-icons/tfi";
import {ImProfile} from "react-icons/im";
import {IoMdLogOut} from "react-icons/io";
import {role} from "@/lib/data";


const menuItems = [
    {
        title: "MENU",
        items: [
            {
                id: 1,
                icon: <FaHome size={20}/>,
                label: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                id: 2,
                icon: <GiTeacher size={20}/>,
                label: "Teachers",
                href: "/list/teachers",
                visible: ["admin", "teacher"],
            },
            {
                id: 3,
                icon: <PiStudentBold size={20}/>,
                label: "Students",
                href: "/list/students",
                visible: ["admin", "teacher"],
            },
            {
                id: 4,
                icon: <RiParentFill size={20}/>,
                label: "Parents",
                href: "/list/parents",
                visible: ["admin", "teacher"],
            },
            {
                id: 5,
                icon: <MdOutlineSubject size={20}/>,
                label: "Subjects",
                href: "/list/subjects",
                visible: ["admin"],
            },
            {
                id: 6,
                icon: <SiGoogleclassroom size={18}/>,
                label: "Classes",
                href: "/list/classes",
                visible: ["admin", "teacher"],
            },
            {
                id: 7,
                icon: <MdOutlineDescription size={20}/>,
                label: "Lessons",
                href: "/list/lessons",
                visible: ["admin", "teacher"],
            },
            {
                id: 8,
                icon: <PiExam size={20}/>,
                label: "Exams",
                href: "/list/exams",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                id: 9,
                icon: <MdOutlineAssignment size={20}/>,
                label: "Assignments",
                href: "/list/assignments",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                id: 10,
                icon: <IoCheckmarkCircle size={20}/>,
                label: "Results",
                href: "/list/results",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                id: 11,
                icon: <FaPeopleRoof size={20}/>,
                label: "Attendance",
                href: "/list/attendance",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                id: 12,
                icon: <IoCalendarNumberSharp size={20}/>,
                label: "Events",
                href: "/list/events",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                id: 13,
                icon: <LuMessageCircleMore size={20}/>,
                label: "Messages",
                href: "/list/messages",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                id: 14,
                icon: <TfiAnnouncement size={20}/>,
                label: "Announcements",
                href: "/list/announcements",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
    {
        title: "OTHER",
        items: [
            {
                id: 15,
                icon: <ImProfile size={20}/>,
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                id: 16,
                icon: <IoSettingsSharp size={20}/>,
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                id: 17,
                icon: <IoMdLogOut size={20}/>,
                label: "Logout",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
];


const Menu = () => {
    return (
        <nav className={"text-sm"}>
            {menuItems.map(menuSection => (
                <li key={menuSection.title} className={"list-none p-0 m-0 flex flex-col gap-2"}>
                    <span className={"hidden lg:block text-gray-400 font-light mt-5 mb-2"}>{menuSection.title}</span>
                    {menuSection.items.map(menuItem => {
                        if (menuItem.visible.includes(role)) {
                            return <Link href={menuItem.href} key={menuItem.id}
                                         className={"flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-1 rounded-md hover:bg-skyBlue"}>
                                <span>{menuItem.icon}</span>
                                <span className={"hidden lg:block"}>{menuItem.label}</span>
                            </Link>
                        }
                    })
                    }
                </li>
            ))}
        </nav>
    );
};

export default Menu;
