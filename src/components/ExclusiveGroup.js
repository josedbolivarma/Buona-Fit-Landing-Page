import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core';
import { ButtonStyled, ExclusiveText, ExclusiveTitle } from '../styled/styledcomponents';
import Fade from 'react-reveal/Fade';

const ExclusiveGroup = () => {
  const classes = useStyles();
  return (
    <section className={classes.exclusiveGroup}>
            <div className={classes.exclusiveGroup__container}>
                <img className={classes.exclusiveGroup__image} src="https://res.cloudinary.com/duzncuogi/image/upload/v1650339729/samples/Buona-Fit-Demo-Day/protein-youcandoit_aduass.jpg" alt="Exclusive Card" />
              <Fade right>
              <div className={classes.exclusiveGroup__content}>
                  <ExclusiveTitle>Ahorros exclusivos $ 60,000 de descuento para usuarios premium</ExclusiveTitle>
                <ExclusiveText className={classes.exclusiveGroup__text}>- Un campeón es alguien que se levanta cuando el otro no puede. <b>- William Harrison</b></ExclusiveText>
                <ButtonStyled className={classes.exclusiveGroup__btn}>Empezar a planificar</ButtonStyled>
              </div>
              </Fade>
          </div>
      </section>
  )
}

const useStyles = makeStyles((theme) => ({
    exclusiveGroup: {
        width: '100%',
        height: '380px',
        border: '2px solid #EFEFEF',
        position: 'relative',
        margin: '2rem 0',
        [theme.breakpoints.down('sm')]: {
            height: '100%'
        }
    },
    exclusiveGroup__container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },
  
    exclusiveGroup__image: {
        width: '400px',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '300px'
        }
    },
    exclusiveGroup__content: {
        padding: theme.spacing(3),
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing(6)
    },
  
}))

export default ExclusiveGroup