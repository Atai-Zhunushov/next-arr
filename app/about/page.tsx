"use client"
import React, {useEffect, useState} from 'react';
import {Card, CardMedia, CardActionArea, CardContent, Typography, Box, CircularProgress} from "@mui/material";
import Image from "next/image";

interface Cats {
    name: string;
    img: string;
    url: string;
    height:number;
    width:number;

    id: number;
    // Дополнительные поля, если они есть в данных о покемонах
}
interface Cat {
    name: string;
    url: string;
    id:number;
}


const Page = () => {
    const [catData, setCatData] = useState<Cats[]>([]);
    const [catCatRandom, setCatRandom] = useState<Cat | null>(null);


    useEffect(() => {
        const getCat = async () => {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=beng&api_key=live_2qFeQ5hWacu6Cb3kg7YTGZzQy7dj3JHc4YCkRqE1FxWbj5WnVddMuH4IJPXRMUq1')
            const resp = await fetch('https://api.thecatapi.com/v1/breeds')
            const cats = await response.json()
            const catBreed = await resp.json()
            const combinedData = cats.map((cat) => {
                const breed = catBreed.find((breed) => breed.id === cat.breeds[0]?.id);
                return {
                    ...cat,
                    name: breed ? breed.name : 'Unknown Breed', // Здесь используется имя породы или 'Unknown Breed', если порода не найдена
                };
            });

            setCatData(combinedData)

        }
        getCat()
    }, [])
    console.log(catData)








    return (
        <div>
            <Typography className='text-center mb-7' variant='h5'>
                Наша коллекция котов
            </Typography>
            <div className='flex flex-wrap gap-8 w-1700'>
                {catData.length > 0 ? catData.map((cat) => (
                    <div key={cat.id} className='w-400 h-300'>
                        <p className='text-center mb-1'>{cat.name}</p>
                        <Image src={cat.url} width={400} height={300} className='h-full'></Image>
                    </div>
                )) : <Box className='flex mx-auto'>
                    <CircularProgress/>
                </Box>}

            </div>
            <div>

            </div>
        </div>
    );
};

export default Page;