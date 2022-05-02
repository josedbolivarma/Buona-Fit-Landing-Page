import React from 'react';
import { makeStyles } from '@material-ui/core';
import { WrapBanner } from '../styled/styledcomponents';

const AboutBannerTwo = ({title, description, image}) => {
  const classes = useStyles();
  return (
      <div className={classes.aboutBannerTwo}>
        <WrapBanner imageBg={ image } position="end" height="80vh"></WrapBanner>
            <div className={classes.aboutBannerTwo__content}>
                <h2 className={classes.aboutBannerTwo__title}>{ title }</h2>
                <p>{ description }</p>
                <a className={classes.aboutBannerTwo__link} href='#'>Más Información</a>
            </div>  
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    aboutBannerTwo: {
        width: '100%',
        height: '100vh',
        position: 'relative'
    },
    aboutBannerTwo__content: {
        fontSize: '2rem',
        width: '100%',
        color: '#000',
        textAlign: 'center',
        marginTop: theme.spacing(40),
        // backgroundColor: '#333',
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)'

    },
    aboutBannerTwo__link: {
        textDecoration: 'none',
        color: '#027344',
        marginTop: theme.spacing(4)
    }
}))

export default AboutBannerTwo;