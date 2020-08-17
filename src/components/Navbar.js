import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import {
	AppBar,
	Toolbar,
	ListItem,
	IconButton,
	ListItemIcon,
	ListItemText,
	Avatar,
	Divider,
	List,
	Typography,
	Box,
	
	
	
} from '@material-ui/core';

import {
	ArrowBack, Home} 
from "@material-ui/icons";

import LaptopMacIcon from '@material-ui/icons/LaptopMac';

import MyAvatar from  "../MyAvatar.jpg";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

import Footer from './Footer'

//css styles

const useStyles = makeStyles(theme=>({
  menuSliderContainer: {
	width:250,
    height:"100%",	
    backgroundColor: '#004d40',
    
  },
  
  avatar:{
	  
	  display:"block",
	  margin:"0.5rem auto",
	  width:theme.spacing(13),
	  height:theme.spacing(13)
  },
  listItem:{
	  
	color:"white"  
	  
  }
  
}));

const menuItems = [

{
	listIcon:<Home/>,
	listText:"Home",
	listPath:"/"
	
	
},

{
	listIcon:<LaptopMacIcon/>,
	listText:"Dev Experience",
	listPath:"/dev-experience"
	
},
{
	listIcon:<ContactPhoneIcon/>,
	listText:"Hire Me",
	listPath:"/hireme"
	
}



]

const Navbar =()=>{
	
	const [state,setState]= useState({
		
		right:false
		
		
	})
	
	const toggleSlider = (slider,open) => () =>{
		
		setState({...state,[slider]:open})
		
	}
	
	const classes =useStyles()
	
	const sideList= slider =>(
	
	<Box className={classes.menuSliderContainer}
	component="div"
	onClick={toggleSlider(slider,false)}
	>
	
	<Avatar className={classes.avatar} src={MyAvatar} alt="Subhadeep Paul" />
	
	<Divider/>
	
	<List>
	
	{menuItems.map((lstitem,key)=>(
	
	<ListItem button key={key} component={Link} to={lstitem.listPath}>
	
	<ListItemIcon className={classes.listItem}>
	
	{lstitem.listIcon}
	
	</ListItemIcon>
	
	<ListItemText className={classes.listItem} primary={lstitem.listText}/>
	
	</ListItem>
	
	))}
	
	</List>
	
	</Box>
	
	)
	
	return(
	<div>
	
	
	<Box component="nav">
	
	<AppBar position="static" style={{background:'#222'}}>
	
	<Toolbar>
	
	<IconButton onClick={toggleSlider("right",true)}>
	
	<ArrowBack style={{color:'tomato'}}/>
	
	</IconButton>
	
	<Typography variant="h5" style={{color:'white'}}>
	Dev-Folio
	</Typography>
	
	<MobileRightMenuSlider 
	open={state.right} 
	anchor="right"
	onClose={toggleSlider("right",false)}
	>
		{sideList("right")}
		<Footer/>
	</MobileRightMenuSlider>
	
	</Toolbar>
	
	</AppBar>
	
	</Box>
	
	</div>
	)
	
	
	
}

export default Navbar;