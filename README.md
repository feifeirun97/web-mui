# MUI基础

### Button

```jsx
<Button 
  variant="contained"
  color="primary"
  size="large"
  startIcon={<Person/>}
  style={{backgroundColor:"pink", color:"black"}}//自定css
  >
  Material UI
</Button>

<Button size='small' color='primary'>Share</Button>
```

### 变量

**常用：**`variant:h1-5, body1-2`和`gutterBottom`

### Styles + Palette

**[Styles](https://material-ui.com/styles/basics/)： **对于多CSS方便修改查看, 吧css写在js中

**[Palette](https://material-ui.com/customization/palette/)：**MUI调色板，调用需要在makeStyles()传入`theme`参数, `theme`可以重写自建也可以调用Palette

**常用：**

| 代码                                    | 用途     | 替换                |
| --------------------------------------- | -------- | ------------------- |
| `margin:theme.spacing(1)`               | 控制距离 | `margin:10px`       |
| `borderRadius:theme.shape.borderRadius` | 默认圆角 | `border-radius:2px` |
| `[theme.breakponts.up/down('sm')]`      | 响应式   |                     |

> 编写全局theme.js

```jsx
//新建theme.js
import { createTheme } from '@material-ui/core/styles';
export const theme = createTheme({
  palette: {
    primary: {main:"#111"},
  },
  myButton: {border:"5px solid"}
})
//注意要在index.js加上themeProvider
import { ThemeProvider } from '@material-ui/styles';
import {theme} from "./theme"
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

> 调用theme和useStyle
>

```jsx
import { Person } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  button: {
    background: 'linear-gradient(90deg, #FE6B8B, #FF8E53)',
    color: 'black',
    height: 48,
    padding: '30px'
  },
  buttonUsePalette: {
    backgroundColor: theme.palette.success.light
  }
}))
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Button  
        variant="contained"
        color="primary"
        size="large"
        startIcon={<Person/>}
        className={classes.button}
      >
        Material UI
      </Button>
    </div>
  );
}
```

> 复杂CSS

```jsx
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
```

### Tooltip

[**Tooltip: **](https://material-ui.com/components/tooltips/)悬停出现文字`Toolip->Fab->Icon`

```jsx
<Tooltip title="Add" aria-label="add" >
  <Fab color="primary" className={classes.fab}>
  	<AddIcon />
  </Fab>
</Tooltip>
```

### Avator

[**Avator: **](https://material-ui.com/components/avatars/)头像

```jsx
<AvatarGroup max={4}>
  <Avatar src='https://material-ui.com/static/images/avatar/1.jpg'/>
  <Avatar src='https://material-ui.com/static/images/avatar/2.jpg'/>
  <Avatar src='https://material-ui.com/static/images/avatar/3.jpg'/>
  <Avatar src='https://material-ui.com/static/images/avatar/4.jpg'/>
  <Avatar src='https://material-ui.com/static/images/avatar/5.jpg'/>
</AvatarGroup>
```

### Typography

[**Typography: **](https://material-ui.com/api/typography/#main-content)类似span，常用参数`variant, gutterBottom`，一般放文字类

```jsx
<Typography>Online Users</Typography>
```

### Modal

[**Modal: **](https://material-ui.com/components/modal/#modal)弹出框，包括`Menu, Drawer之类`

```jsx
<Modal open={open} onClose={()=>setOpen(false)} className={classes.modal}>
  <Container className={classes.container}>sad</Container>
</Modal>
```

### ImageList

[**ImageList: **](https://material-ui.com/components/image-list/)图片展示

```jsx
<ImageList rowHeight={160} className={classes.imageList} cols={3}>
  {itemData.map((item) => (
  <ImageListItem key={item.img} cols={item.cols || 1}>
  <img src={item.img} alt={item.title} />
  </ImageListItem>
  ))}
</ImageList>

<ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
  <ImageListItem>
    <img src="https://material-ui.com/static/images/image-list/breakfast.jpg"/>
  </ImageListItem>
</ImageList>
```



### Text Field

[**Text Field: **](https://material-ui.com/components/text-fields/)文字框，下拉选择框，包括

```jsx
<Container className={classes.container}>
  <form className={classes.form} autoComplete="off">
    <div className={classes.item}>
      <TextField 
        id="standard-basic" 
        label="Title" size='small' 
        style={{width:'100%'}}
      />
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        defaultValue="Tell your story..."
        variant="outlined"
        style={{width:'100%'}}
      />
    </div>
  </form>
</Container>
```

### Radio

[**Radio: **](https://material-ui.com/components/radio-buttons/)现形选择框

```jsx
<div className={classes.item}>
  <FormLabel component="legend">Who can comment?</FormLabel>
  <RadioGroup >
    <FormControlLabel value="Everybody" control={<Radio size='small'/>} label="Everybody" />
    <FormControlLabel value="Only friends" control={<Radio size='small'/>} label="Only friends" />
    <FormControlLabel value="Nobody" control={<Radio size='small'/>} label="Nobody" />
  </RadioGroup>
</div>
```

### Snack Bar

[**Snack Bar: **](https://material-ui.com/components/snackbars/)提供有关应用程序进程的简短消息, 一般和`alert`搭配使用.

### Alert

**Alert: **需要安装`npm i @material-ui/lab `

```jsx
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const [openAlert,setOpenAlert] = useState(false);
  //照抄MUI handleclose
const handleClose  = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpenAlert(false);};
<Snackbar open={openAlert} autoHideDuration={2000} onClose={handleClose}>
  <Alert severity="success" onClose={handleClose}>
    This is a success message!
  </Alert>
</Snackbar>

```



### App Bar

**[Bar:](https://material-ui.com/components/app-bar/) **网站导航栏，一般由好几部分表情组成`<AppBar>` - `<Toolbar>` - `<Button>` - `<Icon>`等等,  `<Typography>代替<span>`排版

```jsx
<AppBar>
  <Toolbar>
    <Typography variant='h6'>
      Fei's Web
    </Typography>
  </Toolbar>
</AppBar>
```

### Responsive design

[**Break points: **](https://material-ui.com/customization/breakpoints/#breakpoints)灵活布局，按照页面大小不同显示效果不同. 通常需要创建2个一样的标签

```
v=value       |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
```

```jsx
const useStyles = makeStyles((theme)=>({
  //屏幕大于sm600px显示lg，小于则显示sm
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
  const classes = useStyles();
  return (
    <div >
      <AppBar>
        <Toolbar>
          <Typography variant='h6' className={classes.lg}>
            Fei's Web
          </Typography>
          <Typography variant='h6' className={classes.sm}>
            FWeb
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
```

### Data Display

[**Badge: **](https://material-ui.com/components/badges/)数据提示，如点赞数，邮件数

```jsx
<Badge badgeContent={4} color="secondary" className={classes.badge}>
	<Mail />
</Badge>
```

### Container

[**Container: **](https://material-ui.com/components/container/)水平居中，基本布局元素

### Grid

[**Grid: **](https://material-ui.com/components/grid/)CSS 的 Flexible Box 模块来实现高灵活性. 通常嵌套出现.`Grid-Container-item`.总和12

```jsx
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
```

### Card

[**Card: **](https://material-ui.com/components/cards/)卡片Post，嵌套出现`Card->[CardActionArea-CardMedia-CardContent]-[CardActions]`



# 1.Navbar导航

**难点：**

+ State传入useStyles，`props=>props.open`
+ 响应式布局

```jsx
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
```

# 2.LeftBar

```jsx
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

```

