import { makeStyles } from '@material-ui/core';
import React from 'react';

// Material UI

const AboutContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.aboutContainer}>
        AboutContainer
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    aboutContainer: {
        width: '100%',
        height: '100%',
        padding: theme.spacing(1)
    }
}))

export default AboutContainer