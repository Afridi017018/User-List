import React, { useEffect, useState } from 'react';
import AddUserForm from '../../components/AddUserForm/AddUserForm';
import AllUsers from '../../components/AllUsers/AllUsers';
import Search from '../../components/Search/Search';
import { v4 as uuidv4 } from 'uuid';


const Home = () => {
    const [userInfo, setUserInfo] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        const getAllUsers = async () => {
            const res = await fetch(`https://dummyjson.com/users`);
            const data = await res.json();

            const obj = await data.users.map((e) => {
                const id = uuidv4();
                const newObj = {
                    id,
                    avatar: e.image,
                    firstName: e.firstName,
                    lastName: e.lastName,
                    email: e.email,
                    address: `${e.address.address}, ${e.address.city}`,
                    company: e.company.name,
                }
                return newObj
            })

            setUserInfo(obj)
        }

        getAllUsers();
    }, [])

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const filteredUsers = userInfo.filter((user) =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedUsers = [...filteredUsers].sort((a, b) => {
        if (sortOption === 'name') {
            return a.firstName.localeCompare(b.firstName);
        }
        if (sortOption === 'email') {
            return a.email.localeCompare(b.email);
        }
        if (sortOption === 'company') {
            return a.company.localeCompare(b.company);
        }
        return 0;
    });

    const handleAddUser = (newUser) => {
        const id = uuidv4();
        setUserInfo([...userInfo, {...newUser, id }]);
    };

    return (
        <div>
            <Search onSearchChange={handleSearchChange} onSortChange={handleSortChange} />
            <div className='lg:grid lg:grid-cols-6 gap-2'>

            <div className="lg:col-span-1 lg:hidden">
            <AddUserForm onAddUser={handleAddUser} />
            </div>

            <div className='lg:col-span-5'>
            <AllUsers userInfo={sortedUsers} />
            </div>

            <div className="lg:col-span-1 hidden lg:block">
            <AddUserForm onAddUser={handleAddUser} />
            </div>
            
        </div>
        </div>
    );
};

export default Home;
