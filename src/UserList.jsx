import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [userlist, setUserlis] = useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUserlis(response.data);
            })
            
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen font-sans">
            <h1 className="text-3xl font-bold text-center text-black mb-6">User List</h1>
            <ul className="space-y-4">
                {userlist.map((user) => (
                    <li
                        key={user.id}
                        className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <p className="text-lg font-medium text-gray-800">
                            Name: {user.name}
                        </p>
                        <p className="text-gray-600">
                        username: {user.username}
                        </p>
                        <p className="text-gray-600">
                           Email: {user.email}
                        </p>
                        <p className="text-gray-600">
                            Phone: {user.phone}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
