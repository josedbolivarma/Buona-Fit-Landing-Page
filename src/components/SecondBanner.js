import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";

const SecondBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.secondBanner}>
        <div className={classes.secondBanner__container}>
        <img className={classes.secondBanner__image} src='https://i.pinimg.com/originals/39/b2/be/39b2be478b2bfe2ce2f1e12b057fdc22.png' alt='Runner'/>
        <div>
        <Typography
          className={classes.principalBanner__title} 
          variant="h1">VER ES CREER</Typography>
        <p className={classes.secondBanner__text}>
        Es muy bueno tener aspiraciones saludables y también es importante tener un plan de acción en mente. Si te gusta establecer metas y tienes objetivos altos en mente, puede ser fácil sentirse abrumado. Quizás sea útil desglosar los objetivos de estado físico en pasos posibles para mantenerte motivado, cumplir tus objetivos y disfrutar el recorrido. <br /> <br /> 
        <b>Con Buona Fit disfrutarás del proceso.</b>
        </p>
        </div>
        </div>
    </div>
  )
}

export default SecondBanner;

const useStyles = makeStyles((theme) => ({
    secondBanner: {
        width: '100%',
        height: '100%',
        marginTop: '4rem'
    },
    secondBanner__container: {
        width: '90%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '.5fr 1fr',
        padding: '2rem 0',
        gap: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
        }

    },
    secondBanner__image: {
        width: '100%',
        height: '100%',
    },
    principalBanner__title: {
        color: '#EFEFEF',
        fontSize: '5.8vw',
        marginBottom: '2.4rem'
      },
    secondBanner__text: {
        color: '#D4D4D4',
        fontSize: '2rem',
        lineHeight: '40px'
    }
}))