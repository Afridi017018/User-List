import React from 'react';
import User from '../User/User';

const AllUsers = ({userInfo}) => {

    

    return (
        <div className='mx-10 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            
            {
                userInfo.length > 0 &&
                
                userInfo.map((element)=>(
                    <User key={element.id} userInfo = {element} />
                ))
            }

        </div>
    );
};

export default AllUsers;