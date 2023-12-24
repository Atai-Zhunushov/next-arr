"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {List, ListItem} from "@mui/material";

interface User {
    id: number;
    name: string;
    // Добавьте другие поля пользователя, если они имеются
}



const Users: React.FC = () => {
    const [usersArr, setUsers] = useState<User[]>([]);
    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await response.json()
            setUsers(users)
        }
        getUsers()
    }, [])
    console.log(usersArr)
    return (
            <div className='flex justify-center'>
                <List>
                    {usersArr.length > 0 ? (
                        <List>
                            {usersArr.map((user: User) => (
                                <ListItem key={user.id} className='no-underline'>
                                    <Link href={`/users/${user.id}`}>
                                        {user.name}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <p>Loading...</p>
                    )}
                </List>
            </div>
    );
};

export default Users;

