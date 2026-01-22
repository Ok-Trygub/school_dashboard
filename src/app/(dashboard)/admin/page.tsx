import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import AttendanceChart from "@/components/AttendanceChart";

const AdminPage = () => {
    return (
        <div className={'p-4 flex gap-4 flex-col md:flex-row'}>
            <div className={'w-full lg:w-2/3 flex flex-col gap-8'}>
                <div className={'flex justify-between gap-4 flex-wrap'}>
                    <UserCard type={'student'}/>
                    <UserCard type={'teacher'}/>
                    <UserCard type={'parent'}/>
                    <UserCard type={'staff'}/>
                </div>
                <div className={"flex gap-4 flex-col lg:flex-row"}>
                    <div className={"w-full lg:w-1/3 h-[450px]"}>
                        <CountChart/>
                    </div>
                    <div className={"w-full lg:w-2/3 h-[450px]"}>
                        <AttendanceChart/>
                    </div>
                </div>

                <div className={""}>

                </div>

            </div>
            {/*right*/}
            <div className={'w-full lg:w-1/3'}>
                r
            </div>


        </div>
    );
};

export default AdminPage;
