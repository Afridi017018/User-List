import React from 'react';

import { MdOutlineDriveFileRenameOutline, MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

const User = ({userInfo}) => {
const navigate = useNavigate();
    return (
        <div>
            <div className="card w-80 lg:w-80 bg-base-100 shadow-xl h-80">
                <figure className="px-10 pt-10">
                    <img src={userInfo.avatar} alt="" className="rounded-full w-20 h-20" />
                </figure>
                <div className="card-body items-start text-start">

                    <p className='text-xl font-bold flex justify-start items-center gap-2'><MdOutlineDriveFileRenameOutline /> <span className='cursor-pointer' onClick={()=> navigate('user-details', { state: userInfo })}>{userInfo.firstName} {userInfo.lastName}</span></p>
                    <p className='text-gray-600 flex justify-start items-center gap-2'><MdEmail /> <span className='text-sm'>{userInfo.email}</span></p>
                    <p className='text-gray-600 flex justify-start items-center gap-2 text-sm'><FaAddressCard /> <span>{userInfo.address}</span> </p>
                    <p className='text-gray-600 flex justify-start items-center gap-2 text-sm'><HiOutlineOfficeBuilding /> <span>{userInfo.company}</span></p>

                </div>
            </div>
        </div>
    );
};

export default User;