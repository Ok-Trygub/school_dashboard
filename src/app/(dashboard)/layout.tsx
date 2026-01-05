import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.jpg"

export default function DashboardLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className={"h-screen flex"}>
            <div className={"w-[14%] md:w-[8%] lh:w-[16%] xl:w-[14%] bg-red-200"}>
                <Link href={"/"} className={"flex items-center justify-center lg:justify-start gap-2"}>
                    <Image src={Logo} alt="logo" width={32} height={32}/>
                    <span className={"hidden lg:block"}>Your School</span>
                </Link>
            </div>


            <div className={"w-[86%] md:w-[92%] lh:w-[84%]  xl:w-[86%] bg-green-200"}>r</div>
        </div>
    );
}
