import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Typography,
	Box,
       } from '@material-ui/core';
import	Navbar from './Navbar' 

const useStyles=makeStyles(theme=>({
	
	mainContainer:{
		
		background:"#233"
		
	},
	
	DevTypes:{
		
		position:"relative",
		padding:"1rem",
		margin:"0 auto",
		"&:before":{
			
			content:"''",
			position:"absolute",
			height:"100%",
			border:"1px solid tan",
			right:"40px",
			top:0
			
			
		},
		
		"&:after":{
			
			content:"''",
			display:"table",
			clear:"both"
		},
		
		[theme.breakpoints.up("md")]:{
			
			padding:"2rem",
			"&:before":{
				
				left:"calc(50% - 1px)",
				right:"auto"
				
			}
			
			
		}
		
		
	},
	timeLineItem:{
		
		padding:"1rem",
		borderBottom:"2px solid tan",
		position:"relative",
		margin:"1rem 3rem 1rem 1rem",
		clear:"both",
		"&:after":{
			
			content:"''",
			position:"absolute"
			
			
		},
		"&:before":{
			
			content:"''",
			position:"absolute",
			right:"-0.625rem",
			top:"calc(50% - 5px)",
			borderStyle:"solid",
			borderColor:"tomato tomato transparent transparent",
			borderWidth:"0.625rem",
			transform:"rotate(45deg)"
			
			
		}
		,
		[theme.breakpoints.up("md")]:{
			
			width:"44%",
			margin:"1rem",
			"&:nth-of-type(2n)":{
				
				float:"right",
			    margin:"1rem",
				borderColor:"tan"
				
			},
			"&:nth-of-type(2n):before":{
				
				right:"auto",
				left:"-0.625rem",
				borderColor:"transparent transparent tomato tomato"
			}
			
			
		}
		
		
		
	}
	,
	timeLineYear:{
		
		textAlign:"center",
		maxWidth:"9.375rem",
		margin:"0 3rem 0 auto",
		fontSize:"1.8rem",
		background:"tomato",
		color:"white",
		lineHeight:1,
		padding:"0.5rem 0 1rem",
		
		"&:before":{
			
			"display":"none",
		
		},
		[theme.breakpoints.up("md")]:{
			
			textAlign:"center",
			margin:"0 auto",
			
			"&:nth-of-type(2n)":{
			float:"none",
			margin:"0 auto"
			
				
				
			},
			"&:nth-of-type(2n):before":{
				
				display:"none"
				
			}
			
		}
		
		
	},
	
	heading:{
		
		color:"tomato",
		padding:"3rem 0",
		
		
		
	},
	subHeading:{
		
		color:"white",
		padding:"0",
		
		
		
		
	}
	
	
}))


function Devexp() {
	
	const classes= useStyles();
	
  return (
    <div>
	<Navbar/>
	<Box component="header" className={classes.mainContainer}>
	
	
	<Typography variant="h4" align="center" className={classes.heading}>
	
	Development Roadmap


	</Typography>
	
	
	<Box component="div" className={classes.DevTypes}>
	
	
	<Typography variant="h3" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>Front-End </Typography>
	
	<Box component="div" className={classes.timeLineItem}>
	
	<Typography variant="h5" align="center" className={classes.subHeading}>
	
	Front-End Development
	
	</Typography>
	
	<Typography variant="body1" align="center" style={{color:"tomato"}}>
	
	PSD to HTML5 , Single-Page-Application (SPA) , PWA , Mobile-App (UI)
	
	</Typography>
	
	<Typography variant="body1" align="center" style={{color:"tan"}}>
	
	HTML5,CSS3,Bootstrap4/5,Vanilla JS, Jquery, ES6, React JS,React-Redux,React-Native, Gatsby.JS	
	</Typography>
	
	
	</Box>
	
	
	<Typography variant="h3" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>Back-End</Typography>
	
	<Box component="div" className={classes.timeLineItem}>
	
	<Typography variant="h5" align="center" className={classes.subHeading}>
	
	Back-End Development
	
	</Typography>
	<Typography variant="body1" align="center" style={{color:"tomato"}}>
	
	E-commerce, Dynamic Web-App, REST API, GraphQL
	
	</Typography>
	<Typography variant="body1" align="center" style={{color:"tan"}}>
	
	Node js, Express Js, Next Js, PHP, Codeigniter
	
	</Typography>
	
	</Box>
	
	
	
	<Typography variant="h3" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>Database</Typography>
	
	<Box component="div" className={classes.timeLineItem}>
	
	<Typography variant="h5" align="center" className={classes.subHeading}>
	
	Database-&-Deployment
	
	</Typography>
	<Typography variant="body1" align="center" style={{color:"tomato"}}>
	Database-Management, Database-Design ,Project-Versioning, Deployment
	
	</Typography>
	<Typography variant="body1" align="center" style={{color:"tan"}}>
	

	MySQL, MongoDB , Firebase , HEROKU, AWS S3, AWS EC2,
	
	
	</Typography>
	
	</Box>
	
	
	<Typography variant="h3" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>Others</Typography>
	
	<Box component="div" className={classes.timeLineItem}>
	
	<Typography variant="h5" align="center" className={classes.subHeading}>
	
	Scripting and Project-Management
	
	</Typography>
	<Typography variant="body1" align="center" style={{color:"tomato"}}>
	
	Web-Scripting, Automation , Web-Scraping 
	
	</Typography>
	<Typography variant="body1" align="center" style={{color:"tan"}}>
	
	Python, VBA, AWS EC2 , AWS S3 ,GIT ,GITHUB ,Machine-Learning, Shopify(liquid) Dev, Wordpress Dev
	
	</Typography>
	
	</Box>
	
	</Box>
	
	</Box>
	
	</div>
  );
}

export default Devexp;
