import React from 'react'

//Material UI
import { makeStyles } from '@material-ui/core'

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      
        <h2 className={classes.header__logo}>BUONA FIT</h2>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    header: {
        width: '100%',
        height: '80vh',
        color: '#FFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(19,19,21)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: 'url("https://f.vividscreen.info/soft/78219bc4111e5224fd24756995652b35/Fitness-Yoga-in-Sand-1920x1200.jpg")'
        // background: 'linear-gradient(90deg, rgba(19,19,21,1) 0%, rgba(29,29,30,1) 48%, rgba(30,30,31,1) 48%, rgba(49,50,55,1) 100%)',

    },  
    header__logo: {
        fontSize: '6vw',
        letterSpacing: '8px'
    },
    header__container: {
        width: '90%',
        height: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        AlignItems: 'center'
        // justifyContent: 'space-between'
    },
    header__menu: {
        display: 'flex',
        gap: theme.spacing(2),
    },
    header__link: {
        color: 'white',
        fontSize: '1.4rem',
        fontWeight: '700',
        textDecoration: 'none',
        letterSpacing: '.4px'
    }
}))

export default Header