import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core';
import { ButtonStyled, ExclusiveText, ExclusiveTitle } from '../styled/styledcomponents';

const CompletedGroup = () => {
  const classes = useStyles();
  return (
    <div className={classes.completedGroup}>
        <div className={classes.completedGroup__container}>
            <img className={classes.completedGroup__image} src='https://s1.1zoom.me/big0/792/Fitness_Pose_Hands_Smile_Headphones_Glasses_603311_1280x853.jpg' alt='Image Famous'/>
            <div className={classes.completedGroup__content}>
                <ExclusiveTitle>Superate</ExclusiveTitle>
                <ExclusiveText>Para mejorarnos a veces hay que atreverse a hacer algo más, algo diferente.</ExclusiveText>
                <ButtonStyled>Ver este artículo</ButtonStyled>
            </div>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    completedGroup: {
        position: 'relative',
        width: '100%',
        backgroundColor: '#000',
        color: '#FFF'
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