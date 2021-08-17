import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
  container:{
    paddingTop:theme.spacing(3)
  }
}))

function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      rightbar
    </Container>
  );
}

export default Rightbar;
