import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';

const useStyles = makeStyles((theme)=>({
  right:{
    [theme.breakpoints.down('sm')]:{display:'none'}
  }
}))

//grid总和为12
function App() {
  const classes = useStyles();
  return (
    <div >
      <Navbar />

      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>

        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>

        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
