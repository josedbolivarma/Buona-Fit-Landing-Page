import React from 'react'
// Material UI
import { makeStyles } from '@material-ui/core';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Contact from './Contact';
import Footer from '../components/Footer';
import ExclusiveGroup from '../components/ExclusiveGroup';
import CompletedGroup from '../components/CompletedGroup';
import PrincipalBanner from '../components/PrincipalBanner';
import FitGroup from '../components/FitGroup';
import AboutBannerTwo from '../components/AboutBannerTwo';
import AboutBanner from '../components/AboutBanner';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
        <Banner />
        <Navbar />
        <div className={classes.home__container}>
        <PrincipalBanner />
        <ExclusiveGroup />
        </div>
        <FitGroup />
        <div className={classes.home__bannerContainer}>
          <AboutBanner title='Entrena con nosotros' description="La mejor decisión en tu 2022" image="https://blogging-techies.com/wp-content/uploads/2020/07/1593662115_268_38-mejores-fondos-de-pantalla-negros-de-todo-el-mundo.jpg" />
          <AboutBannerTwo title='Entrena con nosotros' description="La mejor decisión en tu 2022" image="https://colombia.com.co/wp-content/uploads/2021/07/GMN-Mega-Gainer-5-Libras-Tarro-Marketplace-Colombia.jpg" />
          <AboutBannerTwo title='Entrena con nosotros' description="La mejor decisión en tu 2022" image="https://amfitnesstetic.cl/wp-content/uploads/2021/06/glutapro.jpg" />
          <AboutBanner title='Entrena con nosotros' description="La mejor decisión en tu 2022" image="https://w0.peakpx.com/wallpaper/87/804/HD-wallpaper-tiger-white-animal-beautiful-black-king-lion-love-new-popular-tiger-white.jpg" />

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
        flexDirection: 'column',
    },
    home__container: {
      width: '90%',
      margin: '0 auto'
    },
    home__bannerContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      padding: theme.spacing(2),
      backgroundColor: '#FFF',
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: 'repeat(1, 1fr)',

      }
    }
}))

export default Home