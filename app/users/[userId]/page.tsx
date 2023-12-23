"use client"
import React, {useEffect, useState} from 'react';
import {number} from "prop-types";
import {Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Paper} from "@mui/material";


const Page = ({params}) => {
    const [userData, setUserData] = useState({
        name: '',
        phone: number,
        email: '',
        id:number,
        website:''
    });


    useEffect(() => {
        const fetchPokemonData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
            const user = await response.json()
            setUserData(user)
        };


        fetchPokemonData();

    }, [])
    console.log(userData)
    return (
        <div className='text-center w-1000 mx-auto'>
            <TableContainer component={Paper} className=''>
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
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
            </TableContainer>
        </div>
    );
};

export default Page;