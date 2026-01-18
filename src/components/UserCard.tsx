import React from 'react';
import {TfiMoreAlt} from "react-icons/tfi";

interface IUserCard {
    type: string
}

const UserCard: React.FC<IUserCard> = ({type}) => {
    return (
        <div className={'rounded-2xl gap-4 flex-1 odd:bg-purple even:bg-yellow p-4 min-w-[130px]'}>
            <div className={'flex justify-between items-center'}>
                <span className={'text-[10px] bg-white px-2 py-1 rounded-full text-green-600'}>2024/2025</span>
                <TfiMoreAlt size={20} color={'#FFFFFF'}/>
            </div>
            <h1 className={'text-2xl font-semibold my-4'}>1,234</h1>
            <h2 className={'capitalize text-sm font-medium text-gray-600'}>{type}</h2>
        </div>
    );
};

export default UserCard;
