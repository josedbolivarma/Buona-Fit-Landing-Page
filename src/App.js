import Home from "./pages/Home";

//Material UI
import { makeStyles } from '@material-ui/core';
import Header from "./components/Header";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Home />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    backgroundColor: 'rgb(58,59,64)',
background: 'linear-gradient(90deg, rgba(58,59,64,1) 0%, rgba(102,103,107,1) 48%, rgba(102,103,107,1) 48%, rgba(49,50,55,1) 100%)',
  }
}))

export default App;
