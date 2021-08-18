import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Fab, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme)=>({
  fab:{
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  modal:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  container:{
    width:500,
    height:550,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    [theme.breakpoints.down('sm')]:{
      width:'100vw',
      height:'80vh'
    }
  },

  form:{
    padding:theme.spacing(2),
  },

  item:{
    marginBottom:theme.spacing(3),
  }
}))

function Add() {
  const classes = useStyles();
  const [open,setOpen] = useState(false);
  const [openAlert,setOpenAlert] = useState(false);
  //照抄MUI handleclose
  const handleClose  = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  return (
  <div>
    <Tooltip title="Add" aria-label="add" onClick={()=>setOpen(true)}>
      <Fab color="primary" className={classes.fab}>
        <AddIcon />
      </Fab>
    </Tooltip>
    <Modal open={open} onClose={()=>setOpen(false)} className={classes.modal}>
      <Container className={classes.container}>
        <form className={classes.form} autoComplete="off">
          <div className={classes.item}>
            <TextField 
              id="standard-basic" 
              label="Title" size='small' 
              style={{width:'100%'}}
            />
          </div>

          <div className={classes.item}>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              placeholder="Tell your story..."
              variant="outlined"
              style={{width:'100%'}}
            />
          </div>

          <div className={classes.item}>
            <TextField select label="Visibility" defaultValue="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
            </TextField>
          </div>

          <div className={classes.item}>
            <FormLabel component="legend">Who can comment?</FormLabel>
            <RadioGroup >
              <FormControlLabel value="Everybody" control={<Radio size='small'/>} label="Everybody" />
              <FormControlLabel value="Only friends" control={<Radio size='small'/>} label="Only friends" />
              <FormControlLabel value="Nobody" control={<Radio size='small'/>} label="Nobody" />
            </RadioGroup>
          </div>

          <div className={classes.item}>
            <Button 
              variant='outlined' 
              color='primary' 
              style={{marginRight:20}} 
              onClick={()=>setOpenAlert(true)}
            >
              Create
            </Button>

            <Button 
            variant='outlined' 
            color='secondary' 
            onClick={()=>setOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Container>
    </Modal>

    <Snackbar open={openAlert} autoHideDuration={2000} onClose={handleClose}>
      <Alert severity="success" onClose={handleClose}>
        This is a success message!
      </Alert>
    </Snackbar>

  </div>    
  );
}

export default Add;
