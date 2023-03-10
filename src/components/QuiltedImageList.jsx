import * as React from 'react';
import { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grow, ImageListItemBar } from '@mui/material';
import { Box } from '@mui/system';
import '../styles.css'
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const [display,setDisplay] = useState(false);

  return (
    <Box sx={{ mx: 'auto' ,display: 'flex' ,width: '90%'}}>
    <ImageList
      sx={{ width: '100%', height: '100%' }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem 
          onMouseEnter={() => setDisplay("true")}
          onMouseLeave={() => setDisplay("false")}
         className='seafood-img' key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
          <Grow
          timeout={1500}
          in = {display}
          >
          <ImageListItemBar sx={{display:{display}}}
            title={item.title}
          /></Grow>
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
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2018/02/12/14/11/mussels-3148439__480.jpg',
    title: 'Mussels',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  
];