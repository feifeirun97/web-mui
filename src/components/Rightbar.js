import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Container, Divider, ImageList, ImageListItem, Link, Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
const useStyles = makeStyles((theme)=>({
  container:{
    paddingTop:theme.spacing(10)
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
  title:{
    fontWeight:700,
    color:'#555'
  }
}))

function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container} >
      <Typography className={classes.title} gutterBottom>Online Users</Typography>
      <AvatarGroup max={4} style={{marginBottom:30}}>
        <Avatar src='https://material-ui.com/static/images/avatar/1.jpg'/>
        <Avatar src='https://material-ui.com/static/images/avatar/2.jpg'/>
        <Avatar src='https://material-ui.com/static/images/avatar/3.jpg'/>
        <Avatar src='https://material-ui.com/static/images/avatar/4.jpg'/>
        <Avatar src='https://material-ui.com/static/images/avatar/5.jpg'/>
      </AvatarGroup>

      <Typography className={classes.title} gutterBottom>Gallery</Typography>
      <ImageList rowHeight={150} className={classes.imageList} cols={2} style={{marginBottom:30}}>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/burgers.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/camera.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/morning.jpg"
            alt=""
          />
        </ImageListItem>
      </ImageList>

      <Typography className={classes.title} gutterBottom>Categories</Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Music
      </Link>
      <Divider flexItem style={{marginBottom:15}}/>
      <Link href="#" className={classes.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Life
      </Link>
    </Container>
  );
}

export default Rightbar;
