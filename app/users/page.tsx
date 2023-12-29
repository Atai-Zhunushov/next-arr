"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {
    Box, CircularProgress,
    List,
    ListItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {number} from "prop-types";

interface User {
    name: string;
    phone: string;
    email: string;
    id: number;
    website: string;
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
                <div>
                    {usersArr.length > 0 ? (
                        <List>
                            <TableContainer component={Paper} >
                                <Table sx={{ minWidth: 350,   }} size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className='p-5' >User</TableCell>
                                            <TableCell align="left">Phone</TableCell>
                                            <TableCell align="left">Email</TableCell>
                                            <TableCell align="left">Website</TableCell>
                                            <TableCell align="left">ID</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody  >
                                        {usersArr.map((user: User) => (
                                            <TableRow
                                                sx={ { border: 0 } }

                                            >
                                                <TableCell className='p-5' component="th" scope="row">
                                                    {user.name}
                                                </TableCell>
                                                <TableCell align="left">{user.phone}</TableCell>
                                                <TableCell align="left">{user.email}</TableCell>
                                                <TableCell align="left">{user.website}</TableCell>
                                                <TableCell align="left">{user.id}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </List>

                    ) : (
                        <Box>
                        <CircularProgress/>
                        </Box>
                    )}
                </div>
            </div>
    );
};

export default Users;

