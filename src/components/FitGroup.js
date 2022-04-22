import React from 'react';

//Material UI
import { makeStyles, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Fade from 'react-reveal/Fade';

const FitGroup = () => {
  const classes = useStyles();

  return (
    
    <section className={classes.fitGroup}>
      <div className={classes.fitGroup__contentImage}>
        <img className={classes.fitGroup__image} src='https://ss704.liverpool.com.mx/xl/1114935804.jpg' alt='Fit Group'/>
        </div>
      <Fade right>
        <div className={classes.fitGroup__content}>
          <Typography className={classes.fitGroup__title}>DOMICILIO</Typography>
          <Typography className={classes.fitGroup__text}>+57 322-2895106</Typography>
          <div className={classes.fitGroup__socialIcons}>
            <a className={classes.fitGroup__link} href='#'>
            <FacebookIcon className={classes.fitGroup__socialIcon} />
            </a>
            <a className={classes.fitGroup__link} href='#'>
            <InstagramIcon className={classes.fitGroup__socialIcon} />
            </a>
            <a className={classes.fitGroup__link} href='#'>
            <TwitterIcon className={classes.fitGroup__socialIcon} />
            </a>

          </div>
        </div>
    </Fade>
        <div className={classes.fitGroup__gradient}></div>
    </section>
  )
}

const useStyles = makeStyles((theme) => ({
  fitGroup: {
    width: '100%',
    minHeight: '70vh',
    // backgroundColor: '#000',
    backgroundImage: 'url("https://media.istockphoto.com/photos/abstract-luxury-black-gradient-with-border-black-vignette-background-picture-id1202572695?b=1&k=6&m=1202572695&s=170667a&w=0&h=sZfsbSEOaF1wlrmrTYRRuwnx_l8bKR94RecKdIfmBYk=")',
    backgroundSize: 'cover',
    backgroundPosition: 'start',
    position: 'relative',
    margin: '4rem 0',
    display: 'flex',
    flexDirection: 'row-reverse'
    // backgroundImage: 'url("")',
    // backgroundSize: 'contain',
  },
  fitGroup__contentImage: {
    position: 'relative',
    width: '40%',
    height: '400px',
    [theme.breakpoints.down('sm')]:{
      display: 'none'
    }
    
  },
  fitGroup__image: {
    position: 'absolute',
    borderRadius: '12px 12px 0 0',
    width: '70%',
    height: '100%',
    right: '100px',
    bottom: '-100px',
    zIndex: '1000',
    [theme.breakpoints.down('sm')]:{
      display: 'none'
    }
  },
  fitGroup__gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#EFEFEF',
    clipPath: 'polygon(0 0, 100% 0, 100% 36%, 0 35%)',
    borderRadius: '12px 0px 0px 12pxpx',
    right: '0',
    bottom: '-100%'
  },
  fitGroup__content: {
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]:{
      textAlign: 'center',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  fitGroup__title: {
    fontSize: '6vw',
    color: '#EFEFEF',
    textAlign: 'center',
    letterSpacing: '4px',
    fontWeight: '600'
  },
  fitGroup__text: {
    fontSize: '5.4vw',
    color: '#EFEFEF',
    fontWeight: '500'
  },
  fitGroup__socialIcons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: theme.spacing(2.8)
  },
  fitGroup__link: {
    textDecoration: 'none',
    color: '#FFF'
  },
  fitGroup__socialIcon: {
      fontSize: '6vw'
  }
}))

export default FitGroup