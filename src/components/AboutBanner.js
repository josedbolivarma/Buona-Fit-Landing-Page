import React from 'react';
import { makeStyles } from '@material-ui/core';
import { WrapBanner } from '../styled/styledcomponents';

const AboutBanner = ({title, description, image, link}) => {
  const classes = useStyles();
  return (
    <div className={classes.aboutBanner}>
        <WrapBanner imageBg={ image } position="start" height="100vh">
            <div className={classes.aboutBanner__content}>
                <h2 className={classes.aboutBanner__title}>{ title }</h2>
                <p>{ description }</p>
                <a className={classes.aboutBanner__link} href='#'>{link}</a>
            </div>  
        </WrapBanner>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    aboutBanner: {
        width: '100%',
        height: '100vh',
        position: 'relative'
    },
    aboutBanner__content: {
        fontSize: '2rem',
        color: '#FFF',
        textAlign: 'center'
    },
    aboutBanner__link: {
        textDecoration: 'none',
        color: '#027344',
        marginTop: theme.spacing(4)
    }
}))

export default AboutBanner;