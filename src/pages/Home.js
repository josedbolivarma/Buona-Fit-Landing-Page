import React from 'react'
// Material UI
import { makeStyles } from '@material-ui/core';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Contact from './Contact';
import Footer from '../components/Footer';
import ExclusiveGroup from '../components/ExclusiveGroup';
import CompletedGroup from '../components/CompletedGroup';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
        <Banner />
        <Navbar />
        <div className={classes.home__container}>
        <ExclusiveGroup />
        </div>
        <CompletedGroup />
        <div className={classes.home__container}>
        <Contact />
        </div>

        <Footer />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    home: {
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    home__container: {
      width: '90%',
      margin: '4rem auto'
    }
}))

export default Home