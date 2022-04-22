import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core';
import { ButtonStyled, ExclusiveText, ExclusiveTitle } from '../styled/styledcomponents';
import Fade from 'react-reveal/Fade';

const CompletedGroup = () => {
  const classes = useStyles();
  return (
    <div className={classes.completedGroup}>
        <div className={classes.completedGroup__container}>
            <img className={classes.completedGroup__image} src='https://s1.1zoom.me/big0/792/Fitness_Pose_Hands_Smile_Headphones_Glasses_603311_1280x853.jpg' alt='Image Famous'/>
            <Fade left>
            <div className={classes.completedGroup__content}>
                <ExclusiveTitle>TÚ PUEDES LOGRARLO</ExclusiveTitle>
                <ExclusiveText>Para mejorarnos a veces hay que atreverse a hacer algo más, algo diferente.</ExclusiveText>
                <ExclusiveText>Recuerda... <br />
                 - La resistencia con la que te enfrentas en el gimnasio y la resistencia con la que te encuentras en la vida solo pueden construir un carácter fuerte.<br /> - <b>Arnold Schwarzenegger.</b>
                 </ExclusiveText>
                <ButtonStyled>Ver este artículo</ButtonStyled>
            </div>
            </Fade>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    completedGroup: {
        position: 'relative',
        width: '100%',
        backgroundColor: '#000',
        color: '#FFF',
        margin: '2rem 0'
    },
    completedGroup__container: {
        width: '98%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row-reverse',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    completedGroup__image: {
        width: '40%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    completedGroup__content: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
        gap: theme.spacing(2)
    }
}))

export default CompletedGroup