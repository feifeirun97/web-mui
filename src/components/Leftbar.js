import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home,Person,List, PhotoCamera, PlayCircleOutline, TabletMac, Bookmark, Storefront, Settings, ExitToApp, } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
  container:{
    height:'100vh',
    paddingTop:theme.spacing(10),
    color:'white',
    position:'sticky',
    top:0,
    backgroundColor:theme.palette.primary.main,
    [theme.breakpoints.up('sm')]:{
      backgroundColor:'white',
      color:'#555',
      border:'1px solid #ece7e7'
    }

  },

  item:{
    display:'flex',
    alignItems:'center',
    marginBottom:theme.spacing(2),
    '&:hover':{
      backgroundColor:'#e6e4e4',
      transition:'color 200ms ease-out',
      cursor:'pointer',
      borderRadius:'20px'},
    [theme.breakpoints.up('sm')]:{padding:'10px'}
  },

  icon:{
   marginRight:theme.spacing(1),
   [theme.breakpoints.up('sm')]:{
    fontSize:'20px'
  }
  },

  text:{
    fontWeight:'700',
    [theme.breakpoints.down('sm')]:{display:'none'}
  }
}))

function Leftbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon}/>
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon}/>
        <Typography className={classes.text}>Perspon</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon}/>
        <Typography className={classes.text}>List</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon}/>
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon}/>
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon}/>
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon}/>
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon}/>
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <var><div className={classes.item}>
        <Settings className={classes.icon}/>
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon}/>
        <Typography className={classes.text}>Logout</Typography>
      </div></var>
    </Container>
  );
}

export default Leftbar;
