import React from 'react';

const Announcements = () => {
    return (
        <div className={'bg-white p-4 rounded-md'}>
            <div className={'flex items-center justify-between'}>
                <h3 className={'text-lg font-semibold'}>Announcements</h3>
                <span className={'text-xs text-gray-400'}>View All</span>
            </div>
            <div className={'flex flex-col gap-4 mt-4'}>
                <div className={'bg-skyBlue rounded-lg p-4'}>
                    <div className={'flex items-center justify-between'}>
                        <h4 className={'font-medium'}>Lorem ipsum dolor sit amet.</h4>
                        <span className={'text-xs text-gray-400 bg-white rounded-md px-1 py-1'}>2025-01-01</span>
                    </div>
                    <p className={'text-sm text-gray-400 mt-2'}>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                    </p>
                </div>
            </div>
            <div className={'flex flex-col gap-4 mt-4'}>
                <div className={'bg-lightPurple rounded-lg p-4'}>
                    <div className={'flex items-center justify-between'}>
                        <h4 className={'font-medium'}>Lorem ipsum dolor sit amet.</h4>
                        <span className={'text-xs text-gray-400 bg-white rounded-md px-1 py-1'}>2025-01-01</span>
                    </div>
                    <p className={'text-sm text-gray-400 mt-2'}>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                    </p>
                </div>
            </div>
            <div className={'flex flex-col gap-4 mt-4'}>
                <div className={'bg-lightYellow rounded-lg p-4'}>
                    <div className={'flex items-center justify-between'}>
                        <h4 className={'font-medium'}>Lorem ipsum dolor sit amet.</h4>
                        <span className={'text-xs text-gray-400 bg-white rounded-md px-1 py-1'}>2025-01-01</span>
                    </div>
                    <p className={'text-sm text-gray-400 mt-2'}>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Announcements;
