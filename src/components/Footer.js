import React from 'react';

//Material UI
import { makeStyles, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PaymentIcon from '@material-ui/icons/Payment';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EuroIcon from '@material-ui/icons/Euro';

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
        <div className={classes.footer__container}>
            <div className={classes.footer__top}>
                <div className={classes.footer__socialIcons}>
                
                <a className={classes.footer__iconMedia} href='#'>
                    <FacebookIcon />
                </a>
                <a className={classes.footer__iconMedia} href='#'>
                    <TwitterIcon />
                </a>
                <a className={classes.footer__iconMedia} href='#'>
                    <InstagramIcon />
                </a>
                </div>
                <h2 className={classes.footer__logo}>BUONA FIT</h2>
                <div className={classes.footer__socialIcons}>
                <a className={classes.footer__iconPayment} href='#'>
                    <PaymentIcon />
                </a>
                <a className={classes.footer__iconPayment} href='#'>
                <MonetizationOnIcon />
                </a>
                <a className={classes.footer__iconPayment} href='#'>
                <EuroIcon />
                </a>
                </div>
            </div>
            <div className={classes.footer__bottom}>
                <div className={classes.footer__links}>
                    <a className={classes.footer__link} href='#'>NUESTRO BLOG</a>
                    <a className={classes.footer__link} href='#'>PRODUCTOS</a>
                    <a className={classes.footer__link} href='#'>FAMOSOS</a>
                    <a className={classes.footer__link} href='#'>APP</a>
                    <a className={classes.footer__link} href='#'>CONTACTO</a>
                </div>
                <Typography variant='body2' className={classes.footer_copywrite}>Landing Page created by Buona Fit Center</Typography>
            </div>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
        footer: {
            width: '100%',
            backgroundColor: 'rgb(19,19,21)',
            background: 'linear-gradient(90deg, rgba(19,19,21,1) 0%, rgba(29,29,30,1) 48%, rgba(30,30,31,1) 48%, rgba(49,50,55,1) 100%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '4rem 0',
            color: '#FFF',
            marginTop: '2rem'
        },
        footer__container: {
            width: '90%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        footer__top: {
            width: '100%',
            display: 'flex',
            justifyContent: ' space-between',
            alignItems: 'center',
        },
        footer__socialIcons: {
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(4),
        },
        footer__iconMedia: {
            color: '#FFF',
            textDecoration: 'none'
        },
        footer__logo: {
            letterSpacing: '3px'
        },
        footer__iconPayment: {
            color: '#FFF',
            textDecoration: 'none'
        },
        footer__links: {
           display: 'flex',
           gap: theme.spacing(4),
           margin: '2rem 0',
           marginTop: theme.spacing(8)
        },
        footer__link: {
            color: '#FFF',
            fontSize: '1rem',
            textDecoration: 'none'
        },
        footer__bottom: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        footer_copywrite: {
            color: '#CCC',
            textAlign: 'center'
        }
}))

export default Footer