import React from 'react'

// Material UI
import { makeStyles, Typography } from '@material-ui/core';
import { ButtonStyled } from '../styled/styledcomponents';

const Contact = () => {
    const classes = useStyles();

  return (
    <div className={classes.contact}>
        <img className={classes.contact__image} src='https://media.istockphoto.com/photos/gym-background-dumbbell-on-blue-table-and-red-color-view-picture-id1193239112?k=20&m=1193239112&s=170667a&w=0&h=toSnApkOA4-RZJTyfZkQ6uifckctbaEUcN4bZJGfUak=' alt='Contact Image'/>

        <div className={classes.contact__container}>
            <Typography variant='h4' className={classes.contact__title}>Contactanos</Typography>
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
  )
}

const useStyles = makeStyles((theme) => ({
    contact: {
        margin: '4rem 0',
        width: '100%',
        height: '400px',
        display: 'flex',
        position: 'relative',
        background:'#111',
        boxshadow: ' 22px 22px 44px #aaaaaa,-22px -22px 44px #ffffff',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'url("https://media.istockphoto.com/photos/dumbbell-gym-on-red-background-isolated-christmas-new-year-concept-picture-id1081823064?k=20&m=1081823064&s=170667a&w=0&h=U-OvAQBCOt0xd6VisI5y0GpuaZwweDFBZ8vmejmfmCU=")',
            backgroundSize: 'cover'
        }
    },
    contact__image: {
        width: '40%',
        height: '400px',
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
        color: '#111',
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