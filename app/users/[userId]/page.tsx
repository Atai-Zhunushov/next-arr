"use client"
import React, {useEffect, useState} from 'react';
import {number} from "prop-types";
import {Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Paper} from "@mui/material";

interface PageParams {
    userId: number;
    // Другие параметры, если есть
}
interface User {
    name: string;
    phone: string;
    email: string;
    id: number;
    website: string;
}


const Page: React.FC<{ params: PageParams }> = ({params}) => {
    const [userData, setUserData] = useState<User>({
        name: '',
        phone: '',
        email: '',
        id: 0,
        website: ''
    });


    useEffect(() => {
        const fetchPokemonData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
            const user = await response.json()
            setUserData(user)
        };


        fetchPokemonData();

    }, [params.userId])
    console.log(userData)
    return (
        <div className='text-center w-1000 mx-auto'>
            {userData ?
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>User</TableCell>
                                <TableCell align="right">Phone</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Website</TableCell>
                                <TableCell align="right">ID</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                sx={ { border: 0 } }
                            >
                                <TableCell component="th" scope="row">
                                    {userData.name}
                                </TableCell>
                                <TableCell align="right">{userData.phone}</TableCell>
                                <TableCell align="right">{userData.email}</TableCell>
                                <TableCell align="right">{userData.website}</TableCell>
                                <TableCell align="right">{userData.id}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer> : <p>Loading ...</p>
            }
        </div>
    );
};

export default Page;