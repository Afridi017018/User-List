import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const userDetails = () => {

    const navigate = useNavigate();
    const { state } = useLocation()


    return (
        <div>
            <div className='flex justify-center items-center'>
            <div className="max-w-lg mx-auto mt-10">
                <div className="flex mb-4 justify-center items-center">
                    <img src={state.avatar} alt="Avatar" className="w-52 h-52 mr-4 border border-gray-500 p-5 rounded-full" />

                </div>
                <div className="flex flex-col gap-5 mt-10">
                    <h2 className="text-3xl font-bold">{state.firstName} {state.lastName}</h2>
                    <p><span className="text-lg font-semibold">Email:</span> {state.email}</p>
                    <p><span className="text-lg font-semibold">Address:</span> {state.address}</p>
                    <p><span className="text-lg font-semibold">Company:</span> {state.company}</p>
                </div>
                <div className='mt-5 text-center'>
                    <button onClick={()=> navigate('/')} className='bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-700'>Go Back</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default userDetails;