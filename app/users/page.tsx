"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {List, ListItem} from "@mui/material";



const Users = () => {
    const [usersArr , setUsers] = useState([])
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
                    {usersArr.map(user =>
                        <ListItem key={user.id} className='no-underline'>
                            <Link href={`/users/${user.id}`}>
                                {user.name}
                            </Link>

                        </ListItem>
                    )}
                </List>
            </div>
    );
};

export default Users;

