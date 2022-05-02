import React from 'react'

//Material UI
import { makeStyles } from '@material-ui/core'

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
        <div className={classes.navbar__container}>
            <div className={classes.navbar__menu}>
                <a className={classes.navbar__link} href='#'>BLOG</a>
                <a className={classes.navbar__link} href='#'>NUESTRA APP</a>
                <a className={classes.navbar__link} href='#'>PRODUCTOS</a>
                <a className={classes.navbar__link} href='#'>CONTACTO</a>
            </div>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    navbar: {
        width: '100%',
        padding: '1.2rem 0',
        // backgroundColor: '#131315',
        backgroundColor: '#000',
        boxShadow:  '20px 20px 60px #222,-20px -20px 60px #000',
    },
    navbar__container: {
        width: '90%',
        height: '100%',
        margin: '0 auto',
        display: 'flex', 
        justifyContent: 'center',
        AlignItems: 'center'
        // justifyContent: 'space-between'
    },
    navbar__menu: {
        display: 'flex',
        gap: theme.spacing(3),
    },
    navbar__link: {
        color: 'white',
        fontSize: '1rem',
        fontWeight: '700',
        textDecoration: 'none',
        letterSpacing: '2.4px'
    }
}))

export default Navbar