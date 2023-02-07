//not in use

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box } from '@mui/system';

export default function SeafoodImage() {
  return (

    <Box sx={{ mx: 'auto' ,display: 'flex' ,width: '75%'}}>
        <ImageList cols={4} sx={{ width: '100%', }}>
      {itemData.map((item) => (
        <ImageListItem className='seafood-img' key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>{item.desc}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>

    
  );
}

const itemData = [
  {
    img: 'https://cdn.pixabay.com/photo/2017/05/31/02/55/lobster-2358898_1280.jpg',
    title: 'Lobster',
    desc: 'Harvested without overfishing',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2018/02/12/14/11/mussels-3148439__480.jpg',
    title: 'Mussels',
    desc: 'Sourced from New Zealand & Australia',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    desc: '@desc',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    desc: '@desc',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    desc: '@desc',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    desc: '@desc',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    desc: '@desc',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    desc: '@desc',
  },
 
];