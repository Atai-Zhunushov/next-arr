import React from 'react';
import {Card, CardMedia, CardActionArea, CardContent, Typography} from "@mui/material";


const Page = () => {
    return (
        <div>
            <Typography className='text-center' variant='h5'>
                Наша коллекция
            </Typography>
            <div className='my-5 flex justify-center gap-5'>
                <Card sx={{ maxWidth: 344, height:400 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/pexels-ardit-mbrati-16439513.jpg'
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bmw
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Germany
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 , height:570 }}>
                    <CardActionArea>
                        <CardMedia
                            sx={{height:400}}
                            component="img"
                            height="140"
                            image="/pexels-flors-q-1430931 (1).jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                SportBikes
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                "Motorcycles are a diverse range of two-wheeled vehicles,
                                varying across styles, designs, and functionalities.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345, height:400 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/pexels-lloyd-freeman-1429775.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Mercedes Benz
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Mercedes-Benz is a renowned global automobile brand known for producing luxury vehicles
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
};

export default Page;