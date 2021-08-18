import { AppBar, InputBase, Toolbar, Typography, Badge, Avatar } from '@material-ui/core';
import { makeStyles,alpha } from '@material-ui/core/styles';
import { Search, Mail, Notifications, Cancel } from '@material-ui/icons';
import React, { useState } from 'react';
const useStyles = makeStyles((theme)=>({
  //屏幕大于sm600px显示lg，小于则显示sm
  toolbar:{
    display:'flex',
    justifyContent:'space-between'
  },

  search:{
    display:'flex',
    alignItems:'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: theme.shape.borderRadius,//可以写10px
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width:'30%',
    padding:'5px 10px',
    [theme.breakpoints.down('sm')]:{
      display:props=>props.open? 'flex' :'none',
      width:'60%'
    }
  },

  input:{
    color:'white',
    marginLeft:theme.spacing(1),
  },

  cancel:{
    [theme.breakpoints.up('sm')]:{display:'none'},
    marginLeft:'auto',
    '&:hover':{cursor:'pointer'}
  },

  searchButton:{
    marginRight:theme.spacing(2),
    [theme.breakpoints.up('sm')]:{display:'none'},
    '&:hover':{cursor:'pointer'}
  },

  // 小屏幕时，点开search会让buttons消失
  icons:{
    alignItems:'center',
    display:props=>props.open? 'none' :'flex'
  },

  badge:{
    marginRight:theme.spacing(2)
  },

  lg:{
    display:'none',
    [theme.breakpoints.up('sm')]:{display:'block'}
  },

  sm:{
    display:'block',
    [theme.breakpoints.up('sm')]:{display:'none'}
  }
}))

function Navbar() {
  //hooks
  //在小屏情况下点击搜索会让icons按钮消失，显示搜索栏
  const [open, setOpen] = useState(false);
  console.log(open);
  //可以吧state传入useStyles使用
  const classes = useStyles({ open });
  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' className={classes.lg}>
          Fei's Web
        </Typography>
        <Typography variant='h6' className={classes.sm}>
          FWeb
        </Typography>
        
        <div className={classes.search}>
          <Search />
          <InputBase placeholder='Search...' className={classes.input}/>
          <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
        </div>

        <div className={classes.icons}>
          {/* 这里是sm情况下的Search */}
          <Search className={classes.searchButton} onClick={()=>setOpen(true)} />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar src='https://avatarfiles.alphacoders.com/944/thumb-94447.jpg'/>
        </div>
        
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;