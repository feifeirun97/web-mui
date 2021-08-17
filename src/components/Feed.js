import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import Post from './Post';
const useStyles = makeStyles((theme)=>({
  container:{
    paddingTop:theme.spacing(3),
  }
}))

function Feed() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

export default Feed;
