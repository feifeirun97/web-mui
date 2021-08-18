import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { Height } from "@material-ui/icons";
import React from 'react'

const useStyles = makeStyles(theme=>({
  card:{
    marginBottom:theme.spacing(5),
  },
  media:{
    height:250,
    [theme.breakpoints.down('sm')]:{height:125}
  }
}))

function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://img0.baidu.com/it/u=3736127263,3559891737&fm=26&fmt=auto&gp=0.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant='h5'>My first post</Typography>
          <Typography  variant='body2'>Hellooooooo! My name is Fei.
            I'm a postgraduate student at University of New South Wales, 
            major in IT. Having experience with both frontend and backend development. 
            Motivated to learn, grow and excel in web technologies.
            Now seeking a web full stack developer job</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>Share</Button>
        <Button size='small' color='primary'>Learn more</Button>
      </CardActions>
    </Card>
  )
}

export default Post
