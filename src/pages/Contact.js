import React from 'react'

// Material UI
import { makeStyles, Typography } from '@material-ui/core';
import { ButtonStyled } from '../styled/styledcomponents';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    const classes = useStyles();

  return (
      <Fade left>
    <div id='contacto' className={classes.contact}>
        <img className={classes.contact__image} src='https://s1.1zoom.me/b5050/147/Fitness_Handbag_Jump_Colored_background_600380_1920x1080.jpg' alt='Contact'/>

        <div className={classes.contact__container}>
            <Typography variant='h4' className={classes.contact__title}>Contáctanos</Typography>
            <form className={classes.contact__form}>
                <div className={classes.contact__inputBox}>
                <input className={classes.contact__input} type='text' placeholder='Llena este campo'/>
                </div>
                <div className={classes.contact__inputBox}>
                <input className={classes.contact__input} type='text' placeholder='Llena este campo'/>
                </div>
                <div className={classes.contact__inputBox}>
                <input className={classes.contact__input} type='text' placeholder='Llena este campo'/>
                </div>
                <ButtonStyled>Enviar</ButtonStyled>
            </form>
        </div>
    </div>
    </Fade>
  )
}

const useStyles = makeStyles((theme) => ({
    contact: {
        width: '100%',
        height: '400px',
        display: 'flex',
        position: 'relative',
        background:'#111',
        margin: '4rem 0',
        boxshadow: ' 22px 22px 44px #aaaaaa,-22px -22px 44px #ffffff',
        color: '#FFF',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'url("https://s1.1zoom.me/b5050/147/Fitness_Handbag_Jump_Colored_background_600380_1920x1080.jpg")',
            backgroundSize: 'cover',
            color: '#000',
        }
    },
    contact__image: {
        width: '40%',
        height: '400px',
        objectFit: 'cover',
        
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    contact__container: {
        width: '90%',
        margin: '0 auto',
        padding: theme.spacing(4),
        
    },
    contact__form: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2)
    },
    contact__inputBox: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1)
    },
    contact__input: {
        padding: theme.spacing(1.4),
        backgroundColor: 'transparent',
        borderBottom: '1px solid #FFF',
        outline: 'none',
        border: 'none',
        color: '#FFF'
    },
    contact__title: {
        marginBottom: theme.spacing(4),
        fontWeight: '700',
        letterSpacing: '2px'
    },
    contact__label: {
        color: '#333',
        fontSize: '1.1rem'
    }
}))

export default Contact