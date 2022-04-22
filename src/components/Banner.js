import React, { useState } from 'react'

//Material UI
import { makeStyles } from '@material-ui/core';
import Header from './Header';

const slides = [
    {
        id: 1,
        url: 'https://res.cloudinary.com/duzncuogi/image/upload/v1650468560/samples/Buona-Fit-Demo-Day/proteins/nitro-tech_bqozxq.jpg'
    },
    {
        id: 2,
        url: 'https://res.cloudinary.com/duzncuogi/image/upload/v1650468560/samples/Buona-Fit-Demo-Day/proteins/naked-whey_lxebqk.jpg'
    },
    {
        id: 3,
        url: 'https://res.cloudinary.com/duzncuogi/image/upload/v1650468559/samples/Buona-Fit-Demo-Day/proteins/hidro-whey_dwhkee.jpg'
    }
]

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
            <Header />
        <div className={classes.banner__opacity}>
          
        <img 
        className={classes.banner__image}
        src='https://res.cloudinary.com/duzncuogi/image/upload/v1650339601/samples/Buona-Fit-Demo-Day/protein-1_khsax6.jpg'
        alt='Protein'
        />
        <div className={classes.banner__fadeBottom}></div>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    banner: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    banner__opacity: {
        position: 'relative',
        minWidth: '30%',
        height: '80vh'
    },
    banner__image: {
        width: '100%',
        objectFit: 'cover',
        height: '100%',
        opacity: '.9'
    },
    banner__fadeBottom: {
        position: "absolute",
        top: "60vh",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        backgroundImage: "linear-gradient(180deg, transparent, rgba(37,37,37, 0.61), #111)",
    }
}))

export default Banner