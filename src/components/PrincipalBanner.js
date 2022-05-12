import React from 'react';

//Material UI
import { makeStyles, Typography } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

const PrincipalBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.principalBanner}>
        <img className={classes.principalBanner__image} src='https://wallpapercave.com/wp/wp10467311.jpg' alt='Principal Banner'/>
        <Fade left>
        <div className={classes.principalBanner__content}>
          <Typography
          className={classes.principalBanner__title} 
          variant="h1">Nutrición Deportiva & Salud.</Typography>
         <div className={classes.principalBanner__textContainer}>
         <Typography 
          className={classes.principalBanner__text}
          variant='h4'>Todos establecen objetivos cuando comienzan algo nuevo, en especial cuando ese algo nuevo es una aventura para alcanzar estado físico.<br />
          <b>Inscribete aquí.</b>
          </Typography>
         </div>
        </div>
        </Fade>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  principalBanner: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    margin: '6rem 0',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
  }
  },
  principalBanner__image: {
    width: '40%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
  }
  },
  principalBanner__content: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    gap: theme.spacing(10)
  },
  principalBanner__title: {
    color: '#EFEFEF',
    fontSize: '5.8vw'
  },
  principalBanner__text: {
    color: '#D4D4D4',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3)
  },
  principalBanner__textContainer: {
    width: '70%'
  }
}))

export default PrincipalBanner;